const makechange = function(denominations, value) {
    const count = []
    for (let i = 0; i <= value; i++) { // i is the value subproblem
        count[i] = i // give it an inital value to comapre, must be bigger!
        denominations.forEach(d => { // for each denomination, see if it's less than the value
            // d <= i because i is our smaller subproblem
            if (d <= i && count[i] > count[i - d] + 1) { // subtract d because we need to remove the current denom to get the previous count
                count[i] = count[i - d] + 1
            }
        })
    }
    return count[value]
}
//console.log(makechange([1,5,15,20], 30))

const longestCommonSub = function(seq1, seq2) {
    const matrix = []
    for (let i = 0; i <= seq1.length; i++) {
        const array = []
        for(let j = 0; j <= seq2.length; j++) {
            array.push(0)
        }
        matrix.push(array)
    }

    for (let s = 0; s <= seq1.length; s++) {
        for (let z = 0; z <= seq2.length; z++) {
            if (s === 0 || z === 0) {
                matrix[s][z] = 0 // can fill these with zero's because if the strings empty, then no sequence
            } else if (seq1[s-1] === seq2[z-1]) {
                matrix[s][z] = matrix[s - 1][z - 1] + 1 // take box diagonal left because that's the final case for that sub problem
            } else {
                matrix[s][z] = matrix[s - 1][z] > matrix[s][z - 1] ? // either take box on top or to left 
                    matrix[s - 1][z] : // top box
                    matrix[s][z - 1] // or left box
            }
        }
    }
    return matrix[seq1.length][seq2.length]
}

const knapsack = function(weights, values, maxWeight) {
    const matrix = []
    for (let i = 0; i <= weights.length; i++) {
        const array = []
        for (let j = 0; j < maxWeight; j++) {
            array.push(0)
        }
        matrix.push(array)
    }
    // v - 1 and w - 1 is our current place inside the input arrays
    for (let v = 0; v <= values.length; v++) {
        for (let w = 0; w <= maxWeight; w++) {
            if (v === 0 || w === 0) {
                matrix[v][w] = 0 // we can assume these are zero because adding 0 weight doesn't do anything
            } else if (weights[v - 1] <= w) { // if we can subtract from our subproblem
                // w is the current max weight in subproblem, weights[v - 1] is subtracting our current weight
                // to get us to the last possible subproblem we can add our current weight to, then we add our current value
                if (matrix[v - 1][w] > matrix[v - 1][w - weights[v - 1]] + values[v - 1]) { // compare current value in matrix to possible new one
                    matrix[v][w] = matrix[v - 1][w] // take the above box
                } else {
                    matrix[v][w] = matrix[v - 1][w - weights[v - 1]] + values[v - 1] // subtract current added weight and value
                }
            } else {
                matrix[v][w] = matrix[v - 1][w]
            }
        }
    }
    return matrix[weights.length][maxWeight]
}


//console.log(knapsack([1, 2, 3], [5, 10, 12], 5))

const editDistance = function(str1, str2) {
    const matrix = []
    for (let i = 0; i <= str1.length; i++) {
        const array = []
        for (let j = 0; j <= str2.length; j++) {
            array.push(0)
        }
        matrix.push(array)
    }

    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {
            if (i === 0) {
                matrix[i][j] = j // if a string is empty, then we need to delete everything in the other string
            } else if (j === 0) {
                matrix[i][j] = i // if a string is empty, then we need to delete everything in the other string
            } else if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] // if they're equal take the diagonal left and don't change anything
            } else {
                matrix[i][j] = Math.min(
                    matrix[i][j - 1], // insertion, left box
                    matrix[i - 1][j], // deletion, top box
                    matrix[i - 1][j - 1] // replacement, diagonal box
                ) + 1 // not equal so we needa do work
            }
        }
    }
    return matrix[str1.length][str2.length]
}

const str1 = ['a', 'l', 'g', 'o', 'r', 'i', 't', 'h', 'm', 'b']
const str2 = ['l', 'o', 'g', 'a', 'r', 'i', 't', 'h', 'm']
console.log(editDistance(str1, str2))
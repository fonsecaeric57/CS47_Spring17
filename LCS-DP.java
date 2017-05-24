/*
give a dynamic programming solution to the longest common subsequence problem:
Input:  two sequences seq1 = [x0, x1, ..., xn] and seq2 = [y0, y1, ..., yn];
Output: length of the longest common subsequence.

The time complexity is O(n1n2) since there is one for-loop which iterates n1 + 1 times, 
followed by another which iterates n2 + 1 times, followed by a nested for loop which 
iterates n1 × n2 times. The space complexity is dominated by the size of the table 
(there are other constants for the other local variables), 
which is the number of cells or O(n1n2).
*/

public static int dynamicProgramingLongestCommonSubsequence(String w1,String w2) {
    //Step 1: Instantiate the table 
    int n1 = w1.length();
    int n2 = w2.length();
    int[][] lcs = new int [n1+1][n2+1];

    // Step 2: Base Case 
    // two for loops to examine table
    for (int i = 0; i < n1+1; i++)
        lcs[i][0] = 0;
    for (int j = 0; j < n2+1; j++)
        lcs[0][j] = 0;
    
    //Step 3: Oher cases 
    //Two nested for loops  
    for (int i=1; i < n1 +1; i++)
        for (int j = 1; j < n2+1; j++)
            lcs[i][j] = (w1.charAt(i-1) == w2.charAt(j-1)) ? lcs[i-1][j-1] + 1
            : Math.max(lcs[i-1][j], lcs[i][j-1]);

    // Step 4: Return cell value of the original problem
    return lcs[n1][n2];
}
public static void main(String[] args) {
    
}
}
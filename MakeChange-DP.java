/*
Let change(v) represent the subproblem of finding the change with the input denominations 
(unchanged) for an amount v of money. The subproblems that will need to be calculated in 
order to compute change(target) will be of the form change(v), where 0 ≤ v ≤ target
where target is the amount we would like to make change for. Therefore, these subproblems
can be accommodated by a one-dimensional array change[v], where 0 ≤ v ≤ target.

Time Complexity and Space Complexity:
We have a nested for-loop which iterates O(d · target) times where d is the number of 
coin denominations and target is the input value. The space complexity is the size of the table 
which is O(target).
*/



public static int DynamicProgramminMakeChange(int[] denominations, int target ) {
    int[] change = new int[ target+1];
    //base case is change [0] = 0

    for ( int v = 1; v < target +1; v++){
        if (d <= v && change[v] > change[v-d] + 1)
            change[v] = change[v-d] + 1;
    }
    return change[target];
    }
}
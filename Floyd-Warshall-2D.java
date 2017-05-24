 /*
Modified Floyd-Warshall-
The idea is that we only two 2-dimensional tables: one which we will call dist1 
for the distances computed on the previous iteration of k, and one which we call dist2 
to store the distances computed on the current instance of k. We are careful to create a 
temporary variable to swap the roles of the arrays created at the beginning of the code, 
rather than create a new table on every iteration and letting garbage collection handling 
memory recouping.
*/
int [][][] dist1 = new int [V][V];
int [][][] dist2 = new int [V][V];

for (int i = 0; i < V; i++)
    for (int j =0; j<V; j++)
    dist2[i][j] = i -> j ? w(i -> j) : (i == j ? 0 : inf)
for (int k =1 ; k < V +1; k++)
    int [][][] temp = dist1;
    dist1 = dist2;
    dist2 = temp;
    for (int i =0; i < V; i++)
        for ( int j=0; j<V; j++)
            dist2[i][j] = min(dist1[i][j], dist1[i][j], dist1[k][j]);
return dist2;

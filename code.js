function convertToAdjList(adjMatrix) {
    //make a new adjacency list the same length as the matrix
    const adjlist = new Array(adjMatrix.length);
    //for each row
    for (let i = 0; i < adjMatrix.length; i++) {
        //make a new list to store connections
        adjlist[i] = [];
        //for each item in the column
        for (let j = 0; j < adjMatrix[i].length; j++){
            //check if the connection exists
            if (adjMatrix[i][j] == 1) {
                //if so push that value to the list
                (adjlist[i]).push(j);
            }
            
        }
    }

    return adjlist;
}
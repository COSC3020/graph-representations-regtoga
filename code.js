function convertToAdjListog(adjMatrix) {
    //The name is convert to adj List og (og is slang for original)
    //i changed the name so that i could use your test code to prove that my code works bi-directionally
    //without changing anything about the test code. thats why the test code now runs the newconvert to
    //adj list function that uses this function twice to do the same job its like this x''' = x' because two of the nots cancel

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

function convertToAdjMatrix(adjList) {
    const adjMatrix = [];

    //for each row: (same number in both list and matrix)
    for (let i = 0; i < adjList.length; i++) {
        adjMatrix[i] = [];
        //for each cell in the column set it to zero as a default value
        for (let j = 0; j < adjList.length; j++) {
            adjMatrix[i][j] = 0;
        }
        // for each element in the adj. list there must be atleast one change in the matrix
        for (let j = 0; j < adjList[i].length; j++){
            adjMatrix[i][adjList[i][j]] = 1;
        }
    }

    return adjMatrix;
}


function convertToAdjList(adjMatrix) {
    //by converting back and forth i am utilizing the single test to prove both functions true

    //console.log(adjMatrix);
    var step1 = convertToAdjListog(adjMatrix);
    //console.log(step1);
    var step2 = convertToAdjMatrix(step1);
    //console.log(step2);
    var step3 = convertToAdjListog(step2);
    //console.log(step3);

    return step3;
}
function convertToAdjList(adjMatrix) {
    const adjlist = new Array(adjMatrix.length);
    for (let i = 0; i < adjMatrix.length; i++) {
        adjlist[i] = [];
        for (let j = 0; j < adjMatrix[i].length; j++){
            if (adjMatrix[i][j] == 1) {
                (adjlist[i]).push(j);
            }
            
        }
    }

    return adjlist;
}


var AdjMatrix1 = [
    [0,1,0,1,0],
    [1,0,1,1,0],
    [0,1,0,0,1],
    [1,1,0,0,1],
    [0,0,1,1,0]
]

var answer1 = [
    [2,4],
    [1,3,4],
    [2,5],
    [1,2,5],
    [3,4]
]

var AdjMatrix2 = [
    [0,1,0,0,0],
    [0,0,0,1,0],
    [1,1,0,0,0],
    [1,0,0,0,1],
    [0,0,1,0,0]
]

var answer2 = [
    [2],
    [4],
    [1,2],
    [1,5],
    [3]
]


console.log(convertToAdjList([[0,0]]));

ans1 = convertToAdjList(AdjMatrix1);
console.log(ans1)
console.log(JSON.stringify(ans1) === JSON.stringify(answer1))

ans2 = convertToAdjList(AdjMatrix2);
console.log(ans2)
console.log(JSON.stringify(ans2) === JSON.stringify(answer2))
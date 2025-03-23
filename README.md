# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Runtime for converting to adj list is n^2 because the first for loop runs the length of the matrix and the 2nd for loop runs the width of the matrix. while this could not be a square n*m... (n*m is something i got from linear algebra $\mathbb{R}^{n*m}$ where n is the number or rows in the matrix and m is the number of columns in the matrix) Im going to assume that the matrix is square because a rectangular adj. matrix doesnt make since? so the runtime is like i said $n * n \in O(n^2)$ this functon only depends on the number of verticies. Your test code does make my code handle non square matricies but a non square matrix is just a square matrix where all the values that dont make it square are 0 and there is no connections.
Ex:
[
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
could be encompaced by the smaller (less memory) because all those other rows were zeros:
[
    [0, 1, 0, 0],
    [1, 0, 0, 1]
]
this means that for any matrix even if its a rectangle, the worst case is O(n^2). This is because the matrix's dimentions would be up to the longest side * 2 == n^2 items in the matrix making for a O(n^2) runtime.


Runtime for converting to adj matrix this one is def n^2 because reguardless of the input it needs to run over the sides the the matrix and the height of the matrix to initialize them all to zero. it would look something like this: n * (n + e) where e is the number of edges in the list and n is the number of nodes in the graph, is the runtime. Since the number of edges in this case cannot be bigger than the number of nodes, asymptoptically we can ignore the nodes to get just n * n $ \in O(n^2)$,
if e was bigger than the number of nodes that would mean the edges have direction and in this case they dont. this one also only depends on the verticies.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
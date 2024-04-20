/**
 * Finds a route through all nodes in a graph that minimizes the total distance, returning to the start.
 * This is a greedy algorithm similar to the nearest neighbor heuristic for the Traveling Salesman Problem.
 * @param {number[][]} graph - A 2D array representing the adjacency matrix of the graph.
 * @param {number} start - The starting node index.
 * @returns {number[]} An array representing the route taken.
 */
function findShortestRoute(graph, start) {
    /** @type {boolean[]} marked - Tracks whether a node has been visited. */
    let marked = new Array(graph.length).fill(false);
    // Mark the starting node as visited.
    marked[start] = true;

    /** @type {number[]} route - The route taken, starting and ending at the start node. */
    let route = [start];
    /** @type {number} node - The current node being visited. */
    let node = start;

    // Loop through each node in the graph.
    for(let index = 0; index < graph.length - 1; index++) {
        /** @type {number} shortestDistance - The shortest distance found so far. */
        let shortestDistance = Infinity;
        /** @type {number} next - The index of the next node to visit. */
        let next;

        // Find the nearest unvisited node.
        for(let j = 0; j < graph.length; j++) {
            if(!marked[j] && graph[node][j] < shortestDistance) {
                shortestDistance = graph[node][j];
                next = j;
            }
        }

        // Move to the next node and mark it as visited.
        node = next;
        marked[node] = true;
        route.push(node);
    }

    // Return to the starting node to complete the route.
    route.push(start);
    return route;
}

// Example graph represented as an adjacency matrix.
let graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

// Run the function and log the route found.
console.log(findShortestRoute(graph, 0));

/**
 * Implements Dijkstra's algorithm for finding the shortest paths from a source node to all other nodes in a graph.
 * @param {number[][]} graph - A 2D array representing the adjacency matrix of the graph.
 * @param {number} src - The source node index from which to calculate shortest paths.
 * @returns {Object} An object containing the shortest distances and paths from the source to each node.
 */
function dijkstra(graph, src) {
    /** @type {number[]} dist - The shortest distance from the source to each node. */
    let dist = [];
    
    /** @type {boolean[]} visited - Tracks whether a node has been visited. */
    let visited = [];
    
    /** @type {number} vertexCount - The number of vertices in the graph. */
    let vertexCount = graph.length;
    
    /** @type {number[][]} paths - Stores the shortest path to each node. */
    let paths = Array(vertexCount).fill(null)

    // Initialize distances to Infinity and visited to false for all nodes.
    for (let i = 0; i < vertexCount; i++) {
        dist[i] = Infinity;
        visited[i] = false;
    }

    // Distance from the source to itself is always 0.
    dist[src] = 0;
    // The path from the source to itself is just the source.
    paths[src] = [src];

    // Loop to find the shortest path to all nodes.
    for (let count = 0; count < vertexCount - 1; count++) {
        // Pick the minimum distance node from the set of nodes not yet processed.
        let u = minDistance(dist, visited);
        // Mark the picked node as processed.
        visited[u] = true;

        // Update dist value of the adjacent vertices of the picked node.
        for (let v = 0; v < vertexCount; v++) {
            // Update dist[v] only if it is not in visited, there is an edge from u to v,
            // and total weight of path from src to v through u is smaller than current value of dist[v].
            if (!visited[v] && graph[u][v] != 0 && dist[u] != Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                paths[v] = [...paths[u], v];
            }
        }
    }

    // Return the distances and paths.
    return { dist, paths };
}

/**
 * A helper function to find the vertex with minimum distance value, from the set of vertices not yet included in the shortest path tree.
 * @param {number[]} dist - The shortest distance from the source to each node.
 * @param {boolean[]} visited - Tracks whether a node has been visited.
 * @returns {number} The index of the node with the minimum distance.
 */
function minDistance(dist, visited) {
    /** @type {number} min - Initialize minimum value. */
    let min = Infinity;
    /** @type {number} minIndex - To store the index of the node with minimum distance. */
    let minIndex = -1;

    // Search for the nearest unvisited node.
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] == false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }

    return minIndex;
}

// Example graph represented as an adjacency matrix.
let graph = [
    [0, 2, 6, 0, 0, 0, 0],
    [2, 0, 0, 5, 0, 0, 0],
    [6, 0, 0, 8, 0, 0, 0],
    [0, 5, 8, 0, 10, 15, 0],
    [0, 0, 0, 10, 0, 0, 2],
    [0, 0, 0, 15, 0, 0, 6],
    [0, 0, 0, 0, 2, 6, 0]
];

// Run Dijkstra's algorithm on the graph from the source node 0.
let result = dijkstra(graph, 0);

// Log the shortest distances and paths from the source to each node.
console.log("Distances: ", result.dist);
console.log("Paths: ", result.paths);

// https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/
// This is example graph @Yahia
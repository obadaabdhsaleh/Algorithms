/**
 * Performs a breadth-first search on a graph from a starting node.
 * @param {Object} graph - An adjacency list representation of the graph.
 * @param {string} start - The starting node for the BFS.
 */
function bfs(graph, start) {
    /** @type {Object} markedNodes - Keeps track of nodes that have been visited. */
    let markedNodes = {};
    
    /** @type {Array} queue - The queue used for BFS to hold nodes to be explored. */
    let queue = [start];
    
    // Mark the starting node as visited.
    markedNodes[start] = true;
    
    // Continue exploring the graph while there are nodes in the queue.
    while (queue.length > 0) {
        // Dequeue the first node from the queue.
        let node = queue.shift();
        
        // Log the current node.
        console.log(node);
        
        // Get all connected nodes of the current node.
        let connectedNodes = graph[node];
        
        // Iterate through all connected nodes.
        for (let index = 0; index < connectedNodes.length; index++) {
            let connectedNode = connectedNodes[index];
            
            // If the connected node has not been visited, mark it and enqueue it.
            if (!markedNodes[connectedNode]) {
                queue.push(connectedNode);
                markedNodes[connectedNode] = true;
            }
        }
    }
}

// Example graph represented as an adjacency list.
let graph = {
    '0': ['1', '2'],
    '1': ['0', '3', '4'],
    '2': ['0', '1', '4'],
    '3': ['1', '4'],
    '4': ['2', '3'],
};

// Perform BFS on the graph starting from node '0'.
bfs(graph, '0');


// https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
// This is example graph @Yahia
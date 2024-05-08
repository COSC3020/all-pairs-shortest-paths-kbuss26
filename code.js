/*
    Keifer Buss 
    COSC-3020-01 
    Last modified May 06 2024
    Sources: None for this program
*/

function allPairsShortestPaths(graph) {
    let dist = [];
    let v = graph.length;

    // Base cases
    if (v === 1) return [[0]];
    if (v <= 0) return [];

    // Initializing the dist matrix
    for (var i = 0; i < v; i++) {
        dist[i] = []
        for (var j = 0; j < v; j++) {
            if (j === i) {
                dist[i].push(0);
            } else {
                dist[i].push(Infinity);
            }
        }
    }

    // Going through edges
    for (var i = 0; i < v; i++) {
        for (var j = 0; j < graph[i].length; j++) {
            // Case of edge pointing to the origin node
            if (dist[i][graph[i][j][0]] != 0) {
                dist[i][graph[i][j][0]] = graph[i][j][1]
            }
        }
    }

    // Minimizing distance
    for (var k = 0; k < v; k++) {
        for (var i = 0; i < v; i++) {
            for (var j = 0; j < v; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    return dist;
}
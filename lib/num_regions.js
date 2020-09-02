
function numRegions(graph) {
    let visited = new Set();
    let counter = 0;
    for (let node in graph) {
         
    if (_depthFirstRecur(node, graph, visited)){
        counter++;
        console.log('counter: ' +counter);
    }
}
    return counter;

}

function _depthFirstRecur(node, graph, visited) {
    
    if (visited.has(node)) return false;
    console.log(node);
    visited.add(node);
    graph[node].forEach(neighbor => {
        console.log('neighbor: ' + neighbor);
        console.log('graph: ' +graph);
        console.log('visited: ' +visited);
        _depthFirstRecur(neighbor, graph, visited);
       
    });
    return true;
}

module.exports = {
    numRegions
};
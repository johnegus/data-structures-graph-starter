
function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let startingNode = queue.shift()

        if (visited.has(startingNode)) continue;
        visited.add(startingNode);

        if (startingNode.value === targetVal) return startingNode;
        
        queue.push(...startingNode.neighbors)
        
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
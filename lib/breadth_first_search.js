class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let startingNode = queue.shift()

        if (visited.has(startingNode)) continue;
        visited.add(startingNode);

        if (startingNode.val === targetVal) return startingNode;
        
        queue.push(...startingNode.neighbors)
        
    }
    return null;
}
let array =[];
                let u = new GraphNode('u');
                let v = new GraphNode('v');
                let w = new GraphNode('w');
                u.neighbors = [v];
                v.neighbors = [u, w];

array.push(u);
array.push(v);
array.push(w);

console.log(breadthFirstSearch(array));

module.exports = {
    breadthFirstSearch
};
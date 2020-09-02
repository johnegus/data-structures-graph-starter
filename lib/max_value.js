
const { GraphNode } = require('../lib/graph_node');

function maxValue(node, visited=new Set()) {
    
    if(visited.has(node)) return -100000;

    visited.add(node);
    console.log(node);

    let recur = maxValue(node, visited);
    if (node.val > recur) return node.val;
    
   
    
}

let test = [];
let one = new GraphNode(1);
let two = new GraphNode(2);
let three = new GraphNode(3);
one.neighbors = [two];
two.neighbors = [one, three];
test.push(one);
test.push(two);
test.push(three);
console.log(maxValue(test));

module.exports = {
    maxValue
};
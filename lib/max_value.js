
// const { GraphNode } = require('../lib/graph_node');

function maxValue(node, visited=new Set()) {
    
    if(visited.has(node)) return -1000000;

    visited.add(node);
    // console.log(node);

    let otherMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited));
    return Math.max(node.val, ...otherMaxes)

//   node.neighbors.forEach(node=> {
//         if(node.val> maxValue(node, visited)){
//             return node.val;
//         }});
 
}

// let test = [];
// let one = new GraphNode(1);
// let two = new GraphNode(2);
// let three = new GraphNode(3);
// one.neighbors = [two];
// two.neighbors = [one, three];
// test.push(one);
// test.push(two);
// test.push(three);
// console.log(maxValue(test));

module.exports = {
    maxValue
};
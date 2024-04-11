function transformTree(tree) {
    if (!tree.length) return null;

    let root = { value: tree[0], left: null, right: null };
    let queue = [{ node: root, index: 0 }];

    while (queue.length) {
        let { node, index } = queue.shift();
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;

        if (leftIndex < tree.length && tree[leftIndex] !== null) {
            node.left = { value: tree[leftIndex], left: null, right: null };
            queue.push({ node: node.left, index: leftIndex });
        }

        if (rightIndex < tree.length && tree[rightIndex] !== null) {
            node.right = { value: tree[rightIndex], left: null, right: null };
            queue.push({ node: node.right, index: rightIndex });
        }
    }

    return root;
}

result = transformTree([3, 1, 0, 8, 12, null, 1])
console.log(result)
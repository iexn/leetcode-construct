function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createTreeNode(data) {
    if (data.length == 0) {
        return null;
    }

    let Tree = new TreeNode(data[0]);

    if (data.length == 1) {
        return Tree;
    }

    let current = [Tree];
    let n = data.length;
    let k = 1;
    
    while (k < n) {
        let next = [];

        for (let i = 0; i < current.length; i++) {
            if (k < n && data[k] != null) {
                current[i].left = new TreeNode(data[k]);
                next.push(current[i].left);
            }

            k += 1;

            if (k < n && data[k] != null) {
                current[i].right = new TreeNode(data[k]);
                next.push(current[i].right);
            }

            k += 1;
        }

        current = next;
    }

    return Tree;
}

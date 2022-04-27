function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createTreeNode(data) {
    if (data.length == 0) {
        return new TreeNode(null);
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
            if (k < n) current[i].left = new TreeNode(data[k++]);
            if (k < n) current[i].right = new TreeNode(data[k++]);

            next.push(current[i].left, current[i].right);
        }

        current = next;
    }

    // 校验有效性
    let next = [Tree];

    while (next.length) {
        let vil = [];

        for (let i = 0; i < next.length; i++) {
            if (next[i].left) {
                if (next[i].left.val == null) {
                    next[i].left = null;
                } else {
                    vil.push(next[i].left);
                }
            }

            if (next[i].right) {
                if (next[i].right.val == null) {
                    next[i].right = null;
                } else {
                    vil.push(next[i].right);
                }
            }
        }

        next = vil;
    }

    return Tree;
}

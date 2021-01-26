export function Toast() {
}

function slotSupport(VNode, children) {
    let slots = {
        default: []
    };

    children.forEach(item => {
        if (item.nodeName === 'template' && item.attributes && item.attributes._slot) {
            slots[item.attributes._slot] = item;
        } else {
            slots.default.push(item);
        }
    })
    const dfs = (node) => {
        if (node.attributes && node.attributes._slot) {
            if (slots[node.attributes._slot]) {
                node.children = slots[node.attributes._slot].children;
                delete node.attributes._slot;
            }
        } else if (Array.isArray(node.children) && node.children.length) {
            node.children.forEach(dfs);
        }
    }
    dfs(VNode);
    return VNode;
}


export function superNode(VNode) {
    this.props.children.length && (VNode = slotSupport(VNode, this.props.children));
    return VNode;
}
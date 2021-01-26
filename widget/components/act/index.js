export function Toast(msg, location = 'middle', duration = 1500) {
    return api.toast({
        msg, location, duration
    })
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
}

/**
 * 继承父组件的 class 、style
 * @param VNode
 * @param props
 * @returns {*}
 */
function extendsClassStyle(VNode, props) {
    props.class && (VNode.attributes.class += ' ' + props.class);
    props.style && (VNode.attributes.style = props.style);
}

function extendsEvent(VNode, props) {
    Object.entries(props)
        .filter(item => item[0].startsWith('on'))//筛选on开头的属性
        .map(item => [item[0].replace(/-(\w)/g, ($, $1) => $1.toUpperCase()), item[1]])//统一写成驼峰形式
        .forEach(([ev, fn]) => VNode.attributes[ev] = fn);//绑定到子组件上
}

export function superNode(VNode, props) {
    slotSupport(VNode, props.children)
    extendsClassStyle(VNode, props);
    // extendsEvent(VNode, props);
    console.log(VNode)
    return VNode;
}
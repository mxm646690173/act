/**
 * 快捷 toast
 * @param msg
 * @param location
 * @param duration
 * @returns {*}
 * @constructor
 */
export function Toast(msg, location = 'middle', duration = 1500) {
    return api.toast({
        msg, location, duration
    })
}

/**
 * 插槽支持
 * @param VNode
 * @param children
 */
export function slotSupport(VNode, children) {
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
export function extendsClassStyle(VNode, props) {
    props.class && (VNode.attributes.class += ' ' + props.class);
    props.style && (VNode.attributes.style = props.style);
    return VNode;
}

/**
 * 继承父组件的事件
 * @param VNode
 * @param props
 */
export function extendsEvent(VNode, props) {
    Object.entries(props)
        .filter(item => item[0].startsWith('on'))//筛选on开头的属性
        .map(item => [item[0].replace(/-(\w)/g, ($, $1) => $1.toUpperCase()), item[1]])//统一写成驼峰形式
        .forEach(([ev, fn]) => VNode.attributes[ev] = fn);//绑定到子组件上
}


/**
 * 超级节点
 * @param VNode
 * @param props
 * @returns {*}
 */
export function superNode(VNode, props) {
    slotSupport(VNode, props.children)
    extendsClassStyle(VNode, props);
    // extendsEvent(VNode, props);
    console.log('superNode', VNode)
    return VNode;
}

/**
 * 通用api.openWin打开页面
 * @param to
 * @param title 标题
 * @returns {*}
 */
export function linkTo(to, title) {
    let options = {};
    if (typeof to === 'string') {
        if (to.endsWith('.stml')) {
            options.name = title || to.split('/').pop().replace('.stml', '');
            options.url = to;
        } else {
            options.name = title || to;
            options.url = `../${to}/${to}.stml`;
        }
    } else {
        options = to;
    }
    console.log(['a-link:to', JSON.stringify(options)]);
    return api.openWin(options);
}


/**
 * 混合class类
 * @param cls
 * @param extra
 * @returns {string}
 */
export function mixedClass(cls, extra) {
    if (!extra) {
        return cls;
    } else {
        let classList = [cls];
        Object.entries(extra).forEach(([key, val]) => val && classList.push(key));
        return classList.join(' ');
    }
}
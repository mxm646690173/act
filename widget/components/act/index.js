import Toast from "./Toast";


export {Toast};

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

    // if (Object.keys(slots).length === 1 && slots.default.length === 0) {
    //     // 没有 slot 项目 直接返回 不要再去查找组件
    //     return VNode;
    // }

    const dfs = (node) => {
        if (node.attributes && node.attributes._slot) {
            if (slots[node.attributes._slot]) {
                node.children = slots[node.attributes._slot].children;
                node.attributes = slots[node.attributes._slot].attributes;
            }
            delete node.attributes._slot;
        } else if (Array.isArray(node.children) && node.children.length) {
            node.children.forEach(dfs);
        }
    }
    dfs(VNode);
    return VNode;
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

    if (!options.bgColor) options.bgColor = '#FFF';

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

/**
 * v-model 双向绑定模拟
 * @returns {{}}
 */
export function syncModel() {
    const $model = {};
    const {_host, props} = this;
    Object.entries(props).forEach(([k, v]) => {
        if (k.startsWith('$')) {
            const path = v.replace(/]/g, '').split(/[\.\[]/);
            const lastKey = path.pop();
            let data = _host.data;
            path.forEach(p => data = data[p]);
            $model[k.substr(1)] = value => {
                return value === undefined ? data[lastKey] : data[lastKey] = value;
            };
        }
    });
    this.$model = Object.assign($model, this._host.$model);
}

export function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
        ;
    }
    ;
    return fmt;
}

/**
 * 月份比较
 * @param date1
 * @param date2
 * @returns {number}
 */
export function compareMonth(date1, date2) {
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();

    if (year1 === year2) {
        return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
    }

    return year1 > year2 ? 1 : -1;
}

/**
 * 日期比较
 * @param day1
 * @param day2
 * @returns {number}
 */
export function compareDay(day1, day2) {
    // const compareMonthResult = compareMonth(day1, day2);
    //
    // if (compareMonthResult === 0) {
    //     const date1 = day1.getDate();
    //     const date2 = day2.getDate();
    //
    //     return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
    // }
    return (day1 - day2) / 86400000;
}

/**
 * 附件路径
 * @param name
 * @returns {string}
 */
export function asset(name) {
    return `../../components/act/asset/${name}`;
}
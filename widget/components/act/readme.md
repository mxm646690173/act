# ACT组件文档

# a-button 按钮

## 介绍

按钮用于触发一个操作，如提交表单。

## 引入

~~~js
import AButton from "../../components/act/a-button.stml";
~~~

## 代码示例

### 按钮类型

按钮支持  ` default ` 、 ` primary ` 、 ` success ` 、 ` warning ` 、 ` danger `  五种类型， 默认为  ` default ` 。

~~~html
<a-button type="primary">主要按钮</a-button>
<a-button type="success">成功按钮</a-button>
<a-button type="default">默认按钮</a-button>
<a-button type="warning">警告按钮</a-button>
<a-button type="danger">危险按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/3jBcDhNbeQ5yzp1.png)

### 朴素按钮

通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

~~~html 
<a-button plain type="primary">主要按钮</a-button>
<a-button plain type="success">成功按钮</a-button>
<a-button plain type="warning">警告按钮</a-button>
<a-button plain type="danger">危险按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/gmKMaFJH91oeQx6.png)

### 细边框

设置 hairline 属性可以展示 0.5px 的细边框。

~~~html 
 <a-button plain hairline type="primary">主要按钮</a-button>
 <a-button plain hairline type="success">成功按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/zNouIvMbkfTDrBm.png)

### 禁用状态

通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。

~~~html 
<a-button disabled type="primary">主要按钮</a-button>
<a-button disabled type="success">成功按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/u1W5ZvHn9Lw3OcF.png)

### 按钮形状

通过 square 设置方形按钮，通过 round 设置圆形按钮。

~~~html 
<a-button square type="primary">主要按钮</a-button>
<a-button round type="success">成功按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/SCZwVQ5gcrR7Led.png)

### 按钮图标

通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

~~~html 
<a-button icon="search" type="primary"/>
<a-button icon="add" type="success"/>
<a-button plain icon="https://img.yzcdn.cn/vant/user-active.png" type="primary"/>
~~~

![](https://i.loli.net/2021/02/24/UHgxlFsmfRKhuJC.png)

### 按钮尺寸

支持 large、normal、small、mini 四种尺寸，默认为 normal。

~~~html 
 <a-button type="primary" size="large">大号按钮</a-button>
 <a-button type="primary" size="normal">普通按钮</a-button>
 <a-button type="primary" size="small">小型按钮</a-button>
 <a-button type="primary" size="mini">迷你按钮</a-button>
~~~

![](https://i.loli.net/2021/02/24/d5CmNuKvs3oIjD6.png)

## API

### props 属性

|  参数   | 说明  | 类型  | 默认值  |
|  ----  | ----  |----  |----  |
| type  | 类型，可选值为 primary success warning danger |string|default|
| size  | 尺寸，可选值为 large small mini |string|normal|
icon    |左侧图标名称或图片链接|    string|    -
plain    |是否为朴素按钮    |boolean    |false
square    |是否为方形按钮    |boolean    |false
round    |是否为圆形按钮    |boolean    |false
disabled    |是否禁用按钮|    boolean    |false
hairline    |是否使用 0.5px 边框    |boolean    |false

### events 事件

继承通用事件








---

# a-badge 徽标

## 介绍

在右上角展示徽标数字或小红点。

## 引入

~~~js
import AButton from "../../components/act/a-badge.stml";
~~~

## 代码示例

### 基础用法

设置  ` content `  属性后， ` Badge `  会在子元素的右上角显示对应的徽标，也可以通过 dot 来显示小红点。

~~~html
<a-badge :content="5">
    <div class="child"/>
</a-badge>

<a-badge :content="10">
    <div class="child"/>
</a-badge>

<a-badge content="Hot">
    <div class="child"/>
</a-badge>

<a-badge dot>
    <div class="child"/>
</a-badge>
~~~

![](https://i.loli.net/2021/02/24/r6WsDdoB8eFhwYE.png)

### 最大值

设置  ` max `  属性后，当  ` content `  的数值超过最大值时，会自动显示为  ` max+ ` 。

~~~html
<a-badge :content="20" max="9">
    <div class="child"/>
</a-badge>

<a-badge :content="50" max="20">
    <div class="child"/>
</a-badge>
          
<a-badge :content="200" max="99">
    <div class="child"/>
</a-badge>
~~~

![](https://i.loli.net/2021/02/24/dPQNopJWnh4la2L.png)

### 自定义颜色

通过  ` color `  属性来设置徽标的颜色。

~~~html
<a-badge :content="5" color="#1989fa">
    <div class="child"/>
</a-badge>
          
<a-badge :content="10" color="#1989fa">
    <div class="child"/>
</a-badge>
          
<a-badge dot color="#1989fa">
    <div class="child"/>
</a-badge>
~~~

![](https://i.loli.net/2021/02/24/P6iMGXrTfgANnme.png)

### 独立展示

当  ` Badge `  没有子元素时，会作为一个独立的元素进行展示。

~~~html
<a-badge :content="20"/>

<a-badge :content="200" max="99"/>
~~~

![](https://i.loli.net/2021/02/24/hz9jMqmHtgXyWcf.png)

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | _number_ | string_ | - |
| color | 徽标背景颜色 | _string_ | `#ee0a24` |
| dot | 是否展示为小红点 | _boolean_ | `false` |
| max | 最大值，超过最大值会显示 `{max}+`，仅当  ` content `  为数字时有效 | _number / string_ | - |

# a-calendar 日历

## 介绍

日历组件用于选择日期或日期区间。

## 引入

```js
import ACalendar from "../../components/act/a-calendar.stml";
```

> 注意:该组件展示的时候为全屏形态，请将组件最好放置于根节点下。

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `confirm` 事件。

```html
<a-cell-group round>
    <a-cell is-link @click="open" title="选择单个日期" :value="value"/>
</a-cell-group>

<a-calendar style="height: 500px;" $show="show" @confirm="myConfirm"/>
```

```js
export default {
    name: "simple-calendar",
    data(){
        return {
            show:false,
            value:''
        }
    },
    methods: {
        open(){
            this.data.show = true;
        },
        myConfirm({detail}) {
          this.data.value = detail;
          Toast(`onConfirm: ${detail}`)
        }
    }
}
```

![](https://i.loli.net/2021/02/24/pFXyD2tmaWKBzrf.png)

### 双向绑定

演示了使用  ` $default-date `  来做双向绑定，自动接管数据变化绑定。

```html
<a-cell-group round>
    <a-cell is-link @click="open" title="双向绑定" :value="value"/>
</a-cell-group>

<a-calendar style="height: 500px;" $show="show" $default-date="value"/>
```

```js
export default {
    name: "simple-calendar",
    data(){
        return {
            show:false,
            value:''
        }
    },
    methods: {
        open(){
            this.data.show = true;
        }
    }
}
```

### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `confirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```html
<a-cell-group round>
    <a-cell is-link @click="open" title="选择多个日期" :value="value"/>
</a-cell-group>

<a-calendar style="height: 500px;" $show="show" @confirm="myConfirm" type="multiple"/>
```

```js
export default {
    name: "simple-calendar",
    data(){
        return {
            show:false,
            value:''
        }
    },
    methods: {
        open(){
            this.data.show = true;
        },
        myConfirm({detail}) {
            this.data.value = `选择了${detail.length}个日期`;
            Toast(`onConfirm: 选择了${detail.length}个日期`)
        }
    }
}
```

![](https://i.loli.net/2021/02/24/SPwAphYoy6BlOKD.png)

### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `confirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<a-cell-group round>
    <a-cell is-link @click="open" title="选择日期区间" :value="value"/>
</a-cell-group>

<a-calendar style="height: 500px;" $show="show" @confirm="myConfirm3" type="range"/>
```

```js
export default {
    name: "simple-calendar",
    data(){
        return {
            show:false,
            value:''
        }
    },
    methods: {
        open(){
            this.data.show = true;
        },
        myConfirm3({detail}) {
          this.data.value = `${detail[0]} - ${detail[1]}`;
          Toast(`onConfirm: ${detail[0]} - ${detail[1]}`)
        }
    }
}
```
![](https://i.loli.net/2021/02/24/k53j2dzBsXfmDSq.png)
### 快捷选择

将 `show-confirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `confirm` 事件。

```html
<a-calendar style="height: 500px;" $show="show" :show-confirm="false" $default-date="value"/>
```


### 自定义日期范围

通过 `min-date` 和 `max-date` 定义日历的范围。

```html
<a-calendar style="height: 500px;" $show="show" $default-date="value"
    :min-date="new Date('2009/12/15')"
    :max-date="new Date('2010/3/9')"/>
```


### 自定义按钮文字

通过 `confirm-text` 设置按钮文字，通过 `confirm-disabled-text` 设置按钮禁用时的文字。

```html
<a-calendar style="height: 500px;" 
    $show="show" 
    type="range" 
    $default-date="value" 
    confirm-text="完成"
    confirm-disabled-text="请选择结束时间"
/>
```
![](https://i.loli.net/2021/02/24/QyNDXabxgjSLkHc.png)
### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```html
    <a-calendar style="height: 500px;" $show="show" 
                :formatter="this.formatter"
                type="range" @confirm="myConfirm9"
                :min-date="new Date('2021/5/1')"
                :max-date="new Date('2021/6/25')"
    />
```


```js
export default {
    name: "simple-calendar",
    data(){
        return {
            show:true,
            value:''
        }
    },
    methods: {
        open(){
            this.data.show = true;
        },
        myConfirm9({detail}) {
            this.data.value = `${detail[0]} - ${detail[1]}`;
            Toast(`onConfirm: ${detail[0]} - ${detail[1]}`)
        },
        formatter(day) {
          const month = day.date.getMonth() + 1;
          const date = day.date.getDate();
    
          if (month === 5) {
            if (date === 1) {
              day.topInfo = '劳动节';
            } else if (date === 4) {
              day.topInfo = '青年节';
            } else if (date === 11) {
              day.text = '今天';
            }
          }
    
    
          if (day.type === 'start') {
            day.bottomInfo = '入住';
          } else if (day.type === 'end') {
            day.bottomInfo = '离店';
          }
    
          return day;
        }
    }
}
```
![](https://i.loli.net/2021/02/24/MjV7rTNJan3ybZF.png)


### 日期区间最大范围

选择日期区间时，可以通过 `max-range` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```html
<a-calendar style="height: 500px;" $show="show" @confirm="myConfirm10" type="range"
                :max-range="5"
```
![](https://i.loli.net/2021/02/24/prFHoimf67vQe4G.png)


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 选择类型:<br>`single` 表示选择单个日期，<br>`multiple` 表示选择多个日期，<br>`range` 表示选择日期区间 | _string_ | `single` |
| title | 日历标题 | _string_ | `日期选择` |
| min-date | 可选择的最小日期 | _Date_ | 当前日期 |
| max-date | 可选择的最大日期 | _Date_ | 当前日期的六个月后 |
| default-date | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | _Date / Date[] / null_ | 今天 |
| formatter | 日期格式化函数 | _(day: Day) => Day_ | - |
| show-confirm | 是否展示确认按钮 | _boolean_ | `true` |
| confirm-text | 确认按钮的文字 | _string_ | `确定` |
| confirm-disabled-text | 确认按钮处于禁用状态时的文字 | _string_ | `确定` |


### Range Props

当 Canlendar 的 `type` 为 `range` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-range | 日期区间最多可选天数 | _number / string_ | 无限制 |
| range-prompt | 范围选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |

### Multiple Props

当 Canlendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max-range | 日期最多可选天数 | _number / string_ | 无限制 |
| range-prompt | 选择超过最多可选天数时的提示文案 | _string_ | `选择天数不能超过 xx 天` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| date | 日期对应的 Date 对象 | _Date_ |
| type | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | 中间显示的文字 | _string_ |
| topInfo | 上方的提示信息 | _string_ |
| bottomInfo | 下方的提示信息 | _string_ |
| className | 额外类名 | _string_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 点击并选中任意日期时触发 | _value: Date / Date[]_ |
| confirm | 日期选择完成后触发，若 `show-confirm` 为 `true`，则点击确认按钮后触发 | _value: Date / Date[]_ |


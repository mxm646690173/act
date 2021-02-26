# ACT组件文档

# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

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

# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

### 引入

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

# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

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

# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

#### 引入

~~~js
import ACellGroup from "../../components/act/a-cell-group.stml";
import ACell from "../../components/act/a-cell.stml";
~~~

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<a-cell-group>
    <a-cell title="单元格" value="内容"/>
    <a-cell title="单元格" value="内容" label="描述信息"/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/mlUjEHgRY1NIMDA.png)

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<a-cell-group>
    <a-cell title="单元格" value="内容" size="large"/>
    <a-cell title="单元格" value="内容" size="large" label="描述信息"/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/VMbyBCuFwj4IUKW.png)

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<a-cell title="单元格" icon="map"/>
```

![](https://i.loli.net/2021/02/25/iTbnAsM9le6Yyj2.png)

### 快捷标题

子节点是纯文本的时候被理解成 ` title ` 。

```html
<a-cell>单元格</a-cell>
```

![](https://i.loli.net/2021/02/25/Ye1JjTtsPlVCzKg.png)

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<a-cell-group>
    <a-cell title="单元格" is-link/>
    <a-cell title="单元格" is-link value="内容"/>
    <a-cell title="单元格" is-link arrow-direction="down" value="内容"/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/DlBUyqm8VLATHub.png)

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<a-cell title="URL 跳转" is-link url="../simple-button/simple-button.stml"/>
<a-cell title="路由跳转" is-link to="simple-button"/>
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<a-cell-group title="分组1">
    <a-cell title="单元格" value="内容"/>
</a-cell-group>

<a-cell-group title="分组2">
    <a-cell title="单元格" value="内容"/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/ixQIaPjLnUurm1G.png)

### 分组圆角

通过  ` round `  属性让一个 `  cell-group ` 组变成圆角。

```html
<a-cell-group round>
    <a-cell title="单元格"/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/mdNnoBJKRjAU3yH.png)

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<a-cell-group>
    <a-cell value="内容" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template _slot="title">
            <text class="custom-title">自定义标题</text>
            <a-tag type="danger">标签</a-tag>
        </template>
    </a-cell>
    
    <a-cell title="相机扫码" icon="camera">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template _slot="right-icon">
            <a-icon name="scanning" class="search-icon"/>
        </template>
    </a-cell>
</a-cell-group>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

![](https://i.loli.net/2021/02/25/EZ1xTaScCDw8KIe.png)

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<a-cell center title="单元格" value="内容" label="描述信息"/>
```

![](https://i.loli.net/2021/02/25/SW6MDLlUAyRebHX.png)

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| title  | 分组标题       | _string_  | `-`    |
| round | 是否为圆角 | _boolean_ | `false` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number / string_ | - |
| value | 右侧内容 | _number / string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧图标名称或图片链接 | _string_ | - |
| url | 点击后跳转的链接stml路径地址 | _string_ | - |
| to | 点击后跳转的目标页面简写地址 | _string / object_ | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

### Cell Slots

| 名称       | 说明                          |
| ---------- | ----------------------------- |
| title      | 自定义左侧 title 的内容       |         |
| right-icon | 自定义右侧按钮，默认为`arrow` |

# Layout 布局

#### 介绍

Layout 提供了 `a-row` 和 `a-col` 两个组件来进行行列布局。

#### 引入

```js
import ARow from "../../components/act/a-row.stml";
import ACol from "../../components/act/a-col.stml";
```

## 代码演示

### 基础用法

Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。 此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```html
  <a-row>
    <a-col span="8">
      <text>span: 8</text>
    </a-col>
    <a-col span="8">
      <text>span: 8</text>
    </a-col>
    <a-col span="8">
      <text>span: 8</text>
    </a-col>
  </a-row>

  <a-row>
    <a-col span="4">
      <text>span: 4</text>
    </a-col>
    <a-col span="10" offset="4">
      <text>offset: 4, span: 10</text>
    </a-col>
  </a-row>

  <a-row>
    <a-col offset="12" span="12">
      <text>offset: 12, span: 12</text>
    </a-col>
  </a-row>
```

![](https://i.loli.net/2021/02/25/AbXJPtNvzIUVeMK.png)

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```html
<a-row gutter="20">
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
</a-row>
    
<a-row gutter="40">
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
    <a-col span="8">
      <view><text>span: 8</text></view>
    </a-col>
</a-row>
```

![](https://i.loli.net/2021/02/25/nTBHOR5z7ruLgAq.png)

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

```html
  <!-- 居中 -->
  <a-row justify="center">
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
  </a-row>


  <!-- 右对齐 -->
  <a-row justify="end">
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
  </a-row>

  <!-- 两端对齐 -->
  <a-row justify="space-between">
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
  </a-row>

  <!-- 每个元素的两侧间隔相等 -->
  <a-row justify="space-around">
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
    <a-col span="6"><text>span: 6</text></a-col>
  </a-row>
```

![](https://i.loli.net/2021/02/25/kI1JXc5BbmEDzGK.png)

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number / string_ | - |
| justify | 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number / string_ | -      |
| offset | 列元素偏移距离 | _number / string_ | -      |

# Empty 空状态

#### 介绍

空状态时的占位提示。

#### 引入

```js
import AEmpty from "../../components/act/a-empty.stml";
```

## 代码演示

### 基础用法

```html
  <a-empty description="描述文字"/>
```

![](https://i.loli.net/2021/02/25/3K6JDIw7PB8Akvu.png)

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
    <a-empty image="error" description="通用错误"/>
<!-- 网络错误 -->
    <a-empty image="network" description="网络错误"/>
<!-- 搜索提示 -->
    <a-empty image="search" description="搜索提示"/>
```

![](https://i.loli.net/2021/02/25/cV7apnWADFCoBNd.png)

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<a-empty class="custom-image"
    image="https://icon.yangyongan.com/?name=warning&size=64&scale=2&color=_ddd"
    description="描述文字"/>
```

![](https://i.loli.net/2021/02/25/8fJTcIuNmB1QVxk.png)

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<a-empty description="描述文字">
    <a-button round type="danger" class="bottom-button">按钮测试</a-button>
</a-empty>
```

![](https://i.loli.net/2021/02/25/EmoaektOl2pNFsA.png)

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string_ | `default` |
| image-size | 图片大小，默认单位为 `px` | _number / string_ | - |
| description | 图片下方的描述文字 | _string_ | - |

# Field 输入框

#### 介绍

表单中的输入框组件。

#### 引入

```js
import AField from "../../components/act/a-field.stml";
```

## 代码演示

### 基础用法

可以通过  ` $value `  双向绑定输入框的值，通过  ` placeholder `  设置占位提示文字。

```html    
<text class="simple-desc">
   双向绑定测试: {value}{value2}
</text>
<!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
  <a-cell-group>
    <a-field $value="value" label="姓氏" placeholder="请输入用户名"/>
    <a-field $value="value2" label="名字" placeholder="请输入用户名"/>
  </a-cell-group>
```

```js
export default {
  name: "simple-field",
  data() {
    return {
      value: '',
      value2: '阿萨德'
    }
  }
}
```

![](https://i.loli.net/2021/02/25/x8NXDqiK7kcPm9y.png)

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```html
  <a-cell-group>
    <!-- 输入任意文本 -->
    <a-field $value="state.default" label="文本" placeholder="输入文本"/>
    <!-- 输入整数 -->
    <a-field $value="state.number" type="number" label="输入整数" placeholder="输入整数"/>
    <!-- 带小数的数字 -->
    <a-field $value="state.decimal" type="decimal" label="带小数的数字" placeholder="带小数的数字"/>
    <!-- 输入电话 -->
    <a-field $value="state.tel" type="tel" label="输入电话" placeholder="输入电话"/>
    <!-- 输入email -->
    <a-field $value="state.email" type="email" label="输入email" placeholder="输入email"/>
    <!-- 输入网站url -->
    <a-field $value="state.url" type="url" label="输入网站url" placeholder="输入网站url"/>
    <!-- 输入密码 -->
    <a-field $value="state.password" type="password" label="输入密码" placeholder="输入密码"/>
  </a-cell-group>
```

### 自定义按钮 [APP端]

根据  ` confirm-type `  属性定义键盘右下角的按钮文案,默认是完成(done)。

```html
  <a-cell-group>
    <a-field $value="state.default" label="完成" placeholder="done"/>
    <a-field $value="state.default" label="发送" confirm-type="send" placeholder="send"/>
    <a-field $value="state.default" label="搜索" confirm-type="search" placeholder="search"/>
    <a-field $value="state.default" label="下一个" confirm-type="next" placeholder="next"/>
    <a-field $value="state.default" label="前往" confirm-type="go" placeholder="go"/>
  </a-cell-group>
```

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```html
<a-cell-group>
    <a-field label="文本" value="输入框只读" readonly/>
    <a-field label="文本" value="输入框已禁用" disabled/>
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/QShy9fRaECKxGgY.png)

### 显示图标

通过 `left-icon` 和 `right-icon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```html
<a-cell-group>
  <a-field
      $value="state.value1"
      label="文本"
      left-icon="link"
      right-icon="prompt"
      placeholder="显示图标"
  />
  <a-field
      $value="state.value2"
      clearable
      label="文本"
      left-icon="map"
      placeholder="显示清除图标"
  />
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/DOHeiX1KCjG5hLx.png)

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `error-message` 属性显示对应的错误提示。

```html
<a-cell-group>
  <a-field
      $value="username"
      error
      required
      label="用户名"
      placeholder="请输入用户名"
  />
  <a-field
      $value="phone"
      required
      label="手机号"
      placeholder="请输入手机号"
      error-message="手机号格式错误"
  />
</a-cell-group>
```

![](https://i.loli.net/2021/02/25/aUGoYgEcQnKVJtw.png)

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```html
  <a-field $value="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
    <template _slot="button" class="demo-button">
      <a-button size="small" type="primary">发送验证码</a-button>
    </template>
  </a-field>
```

![](https://i.loli.net/2021/02/25/RB9uVFaIjwdc2Wq.png)

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| $value | 当前输入的值 | _number / string_ | - |
| label | 输入框左侧文本 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number / string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法输入内容 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| autofocus | 是否自动聚焦  | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| error-message | 底部错误提示文案，为空时不展示 | _string_ | - |
| label-width | 左侧文本宽度，默认单位为 `px` | _number / string_ | `6.2em` |
| label-align | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| left-icon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| right-icon | 右侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |

### Events

| 事件               | 说明                 | 回调参数                       |
| ------------------ | -------------------- | ------------------------------ |
| input | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| focus              | 输入框获得焦点时触发 | _event: Event_                 |
| blur               | 输入框失去焦点时触发 | _event: Event_                 |
| clear              | 点击清除按钮时触发   | _event: MouseEvent_            |

### Slots

| 名称       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| button     | 自定义输入框尾部按钮                                       |

# Icon 图标

#### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

> 目前暂不支持自定义字体，故无法引入iconfont字体图标。
>
> 目前暂不支持svg渲染，故无法引入svg图片。
>
> 临时性的使用服务端渲染替代实现icon组件。
>
> 待底层更新后，该组件可以同步更新渲染模式，业务逻辑层不发生变化。

#### 引入

```js
import AIcon from "../../components/act/a-icon.stml";
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```html
     <a-icon name="good"/>
     <a-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>
```

![](https://i.loli.net/2021/02/25/SDwHWG6AQnRPZFf.png)

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<a-icon name="good" size="32"/>
<a-icon name="user" size="66"/>
```

![](https://i.loli.net/2021/02/25/OhfCklMesoWE1Db.png)

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<a-icon name="good" size="32" color="red"/>
<a-icon name="user" size="32" color="#3af"/>
<a-icon name="map" size="32" color="rgb(123,213,21)"/>
```

![](https://i.loli.net/2021/02/25/yhTNxWiMR8Ds927.png)

## 所有图标

目前所支持的图标列表请点击这里：https://icon.yangyongan.com/

支持的图标列表API接口：https://icon.yangyongan.com/api/

并且持续收集中。

![](https://i.loli.net/2021/02/25/PfxHkhGXue8IMA7.png)

# Link

### 介绍

这是一个抽象组件，为组件提供统一的跳转路由功能。

### 引入

~~~js
import ALink from "../../components/act/a-link.stml";
~~~

## 代码示例

### 基础用法

~~~html
<a-link to="simple-button">
    <view class="link">
        <text class="com-name">Button 按钮</text>
        <a-icon name="arrow-right"/>
    </view>
</a-link>
~~~

### 完整链接

~~~html
<a-link to="../../simple-button/simple-button.stml" title="按钮示例页面">
    <view class="link">
        <text class="com-name">Button 按钮</text>
        <a-icon name="arrow-right"/>
    </view>
</a-link>
~~~

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| to | 路由名称或者完整路径 | _string_ | - |
| title | 页面的名称 | _string_ | - |

# NavBar 导航栏

### 引入

```js
import ANavBar from "../../components/act/a-nav-bar.stml";
```

## 代码演示

### 基础用法

```html
  <a-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  />
```

```js
import {Toast} from "../../components/act";
export default {
  name: "simple-nav-bar",
  components: {AIcon, ANavBar},
  methods: {
    onClickLeft() {
      Toast('返回2');
    },
    onClickRight() {
      Toast('右侧');
    }
  }
}
```

### 使用插槽

通过插槽自定义导航栏两侧的内容。

```html
  <a-nav-bar title="标题" left-text="返回" left-arrow>
    <template _slot="right" class="demo-right">
      <a-icon name="search" size="18"/>
      <text>文本</text>
    </template>
  </a-nav-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | `''` |
| left-text | 左侧文案 | _string_ | `''` |
| right-text | 右侧文案 | _string_ | `''` |
| left-arrow | 是否显示左侧箭头 | _boolean_ | `false` |
### Slots

| 名称  | 说明               |
| ----- | ------------------ |
| left  | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Events

| 事件名      | 说明               | 回调参数            |
| ----------- | ------------------ | ------------------- |
| click-left  | 点击左侧按钮时触发 | _event: MouseEvent_ |
| click-right | 点击右侧按钮时触发 | _event: MouseEvent_ |
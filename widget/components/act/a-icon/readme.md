
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
import AIcon from "../../components/act/a-icon";
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
import ALink from "../../components/act/a-link";
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
<a-link to="../../simple-button/simple-button" title="按钮示例页面">
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

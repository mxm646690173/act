# Icon 图标

#### 介绍

基于后端服务渲染实现，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

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

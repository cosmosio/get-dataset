get dataset
=============

Get a DOM element's or an SVG Element's dataset. Works where .dataset isn't present such as in < IE11.

Installation
============

```bash
npm install get-dataset
```

How to use
==========

Require get-dataset:

```js
var getDataset = require("get-dataset");
```

Given this element:

```html
<div class="myDiv" data-prop="value1" data-composed-prop2="value2"></div>
```

To retrieve the dataset:

```js
getDataset(document.querySelector(".myDiv"));
```

returns:

```js
{
    prop: "value1",
    composedProp: "value2"
};
```

CHANGELOG
=========

#### 0.0.2

* Fix bug where properties of the returned object weren't camelcased. Issue #1.


LICENSE
=======

MIT

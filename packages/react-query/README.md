# @pezkuwi/react-query

WARNING: This is an internal package to [pezkuwichain/pezkuwi-apps](https://github.com/pezkuwichain/pezkuwi-apps) so is not intended (yet) for broad use. Since these are generic components, they will move to the [pezkuwichain/pezkuwi-ui](https://github.com/pezkuwichain/pezkuwi-ui) repo once deemed stable and usable.

For the existing sharable components usable in external React-based projects, take a look at the [pezkuwichain/pezkuwi-ui documentation](https://pezkuwi.js.org/ui/)

## Overview

A collection of RxJS enabled React components that operate with the [@pezkuwi/api-rx](https://github.com/pezkuwi-js/api) library. It automatically manages subscriptions on behalf of the developer, providing a number of unstyled components that can be used to construct UIs.

## Usage

Basic usage entails creating a `ContextProvider` and just using the components. For instance, to display the current node time,

```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Api, NodeTime } from '@pezkuwi/react-query';

...
ReactDOM.render(
  <Api>
    <NodeTime />
  </Api>,
  document.querySelector('#container')
);
...
```

All components are provided unstyled making no assumptions on the actual use, however they all support (optionally) the `label`, `className` and `style` attributes, that can be used to style to component.

```js
...
ReactDOM.render(
  <Api>
    <NodeTime className='rx-time' label='current node time:' />
  </Api>,
  document.querySelector('#container')
);
...
```

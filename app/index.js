import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();

render(<div>
<Provider store={store}>

</Provider></div>,document.getElementById('app'));

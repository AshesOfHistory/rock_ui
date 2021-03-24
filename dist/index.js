// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// library.add(fas)
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// serviceWorker.unregister();
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
export { default as Button } from './components/Button';
export { default as Menu } from './components/Menu';
export { default as AutoComplete } from './components/AutoComplete';
export { default as Icon } from './components/Icon';
export { default as Input } from './components/Input';
export { default as Progress } from './components/Progress';
export { default as Transition } from './components/Transition';
export { default as Upload } from './components/Upload';

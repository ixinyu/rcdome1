import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 组件中报这个错误将， <React.StrictMode> 去掉即可
// findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of DomWrapper which is inside StrictMode. Instead, add a ref directly to the element you want to reference
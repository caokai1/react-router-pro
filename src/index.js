/******* 
 * @Author: caokai 2217949080@qq.com
 * @Date: 2024-05-20 14:34:49
 * @LastEditors: caokai 2217949080@qq.com
 * @LastEditTime: 2024-05-20 15:22:32
 * @FilePath: /react-router-pro/src/index.js
 * @Description: 
 * @
 * @Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import browserRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

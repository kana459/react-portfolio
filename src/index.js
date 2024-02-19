//useEffect= 副作用を実行するためのフック（副作用=コンポーネントの描画に直接は関係ない処理)
//useEffectを使用するとpropsやstateが更新され、再描画が終わった後に処理が実行される。依存配列を指定することで特定のデータが変更したときにuseEffectが実行される

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//rootIDをもつDOM要素を指定。d
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


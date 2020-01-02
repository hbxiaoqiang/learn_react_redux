import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store/index'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
// 引入 react-redux 后可以直接用provider 引入store，里边所有的组件都能获取到store了,通过方法connect链接
ReactDOM.render(App, document.getElementById('root'));


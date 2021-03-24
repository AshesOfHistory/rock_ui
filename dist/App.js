var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from 'react';
import './styles/index.scss';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { Input } from './components/Input/input';
import Upload from './components/Upload/upload';
import AutoComplete from './components/AutoComplete';
import Icon from './components/Icon/Icon';
function App() {
    var _a = useState('123'), InputValue = _a[0], setInputValue = _a[1];
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=" + query)
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            var formatItems = items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
            return formatItems;
        });
    };
    return (React.createElement("div", { className: "App" },
        "test rock-ui",
        React.createElement(Menu, { defaultIndex: '2', mode: "horizontal", onSelect: function (index) { return console.log(index); }, defaultOpenSubMenus: ['2'] },
            React.createElement(MenuItem, null, " link"),
            React.createElement(MenuItem, { disabled: true }, " link2"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "dropdown 1"),
                React.createElement(MenuItem, null, "dropdown 2")),
            React.createElement(MenuItem, null, " link3")),
        React.createElement(Input, { value: InputValue, onChange: function (e) { setInputValue(e.target.value); } }),
        React.createElement(AutoComplete, { fetchSuggestions: handleFetch }),
        React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", onChange: function () { return console.log('changed'); }, onRemove: function () { return console.log('removed'); }, name: "fileName", multiple: true, drag: true },
            React.createElement(Icon, { icon: "upload", size: "5x", theme: "secondary" }),
            React.createElement("br", null),
            React.createElement("p", null, "Drag file over to upload")),
        React.createElement(Button, { className: 'custom', onClick: function (e) { e.preventDefault(); alert(111); } }, "default"),
        React.createElement(Button, { disabled: true }, "default disabled"),
        React.createElement(Button, { btnType: 'primary', size: 'lg' }, "primary large"),
        React.createElement(Button, { btnType: 'danger', size: 'sm' }, "danger small"),
        React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com" }, "link default"),
        React.createElement(Button, { disabled: true, btnType: 'link', href: "http://www.baidu.com" }, "link disabled")));
}
export default App;

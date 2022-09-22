import a from './a';
import b from './b.ts';
import _ from 'lodash'
import $ from 'jquery'

import './c.less'
import d from './d.module.less'

console.log(a)
console.log(_.range(10))
$('<h1>123</h1>').appendTo(document.body)

import React from 'react';
import ReactDOM from 'react-dom';
const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render((<h2>456</h2>), root, () => {
	console.log('render!')
})

console.log(b)
console.log(d.red)

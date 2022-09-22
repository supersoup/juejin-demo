import './style/a.css';
import './style/b.less';
import c from './style/c.module.css'
import h1val from './h1.ts';
import h2txt from './asset/h2.txt'

const root = document.getElementById('root')

root.innerHTML = `
<h1>${h1val}</h1>
<h2>${h2txt}</h2>
<div class="a ${c.c}"></div> 
<div class="b ${c.c}"></div> 
`

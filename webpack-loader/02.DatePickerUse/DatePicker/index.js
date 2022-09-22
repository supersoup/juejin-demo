define([
	'jquery',   // 引入第三方依赖的模块，需要配置 alias
	'./Picker', // 相对路径，引入和自己同目录的 Picker.js 文件
	'text!./index.ejs', // 将 index.ejs 作为字符串引入，供下方调用
	'css!./index.css',  // 将 index.css 作为 <style> 内容，自动插入 <head> 中
], function($, Picker, html) {
	return function init(options) {
		const picker = new Picker(html)
		$(document).on(options.type, options.className, function(event) {
			picker.show(event.target)
		})
		$(document).on('click', function() {
			picker.hide()
		})
	}
})

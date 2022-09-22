import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default {
	input: 'src/index.js',
	output: {
		file: 'dist-rollup/main.js',
		format: 'iife',
		globals: {
			jquery: 'jQuery',
			lodash: '_',
			react: 'React',
			'react-dom': 'ReactDOM',
		}
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
		}),
		// nodeResolve(),
		// commonjs(),
		typescript(),
		postcss({
			modules: true,
			autoModules: /\.module\.\S+$/,
			extract: true,
		}),
	],
	external:['lodash', 'jquery', 'react', 'react-dom']
}

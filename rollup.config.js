import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

import fs from 'fs';
import sass from 'node-sass';
import postcss from 'postcss';

import sveltePreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';

// CSS Settings
const css_global_in = './src/styles/global.scss'
const css_global_out = './static/global_bundle.css'

sass.render({
	file: css_global_in,
	outFile: css_global_out,
}, function (error, result) {
	if(!error) {
		postcss([
			require('autoprefixer'),
			require('cssnano')({preset: 'default'})
		])
		.process(result.css, {
			from: css_global_out,
			to: css_global_out
		}).then(result =>
			fs.writeFile(css_global_out, result.css, function (err) {
				if(err) console.log(err);
			})
		)
	} else console.log(err);
})

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
	},
	sass: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [
			require('autoprefixer'),
			require('cssnano')({preset: 'default'})
		],
  },
});

// Aliases
const aliases = alias({
	entries: [
		{ find: 'settings', replacement: './settings.js' }
	]
})

// Svelte/Sapper Settings
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			aliases,

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			aliases
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		onwarn,
	}
};

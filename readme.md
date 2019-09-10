# @cafee/staff

> a simple staff for vue

## How to use ?

```bash
# Install

npm i -s @cafee/staff
# or
yarn add @cafee/staff
```

```js
// Import Staff
import Staff from '@cafee/staff'

// Run Staff
new Staff({ /* Manifest */ })

	.then(

		({ Vue, Router, Vuex }, next) => {

		/* ======== Extention Code Here ======== */

		// Running
		next(

			// Instantiation
			new Vue({

				// Router
				router: new Router({
					mode: 'history',
					base: process.env.BASE_URL,
					routes: { /* Rtouer Configure */ }
				}),

				// Store
				store: new Vuex.Store({ /* Store Configure */ }),

				// Render
				render: (h) => h( /* App Vue */ )

			})

			// Element Mount
			.$mount('#app'),

			// Hook
			(vm) => console.log(`Staff Running .`, vm)

		)

	}

)
```

## Features

```bash
# @npm: global/window
# @des: Compatible in Node & Browser
Global

# @npm: mobile-detect
# @des: A loose port of Mobile-Detect to JavaScript.
Agent

# @npm: core-js
# @des: Reduction ECMA
Core

# @npm: rxjs
# @des: Reactive Extensions For JavaScript
# @add: https://rxjs.dev/
Rx

# @npm: vue
# @des: A Progressive Framework for Building Interface
Vue

# @npm: vue-bus
# @des: A Event-Bus for Vue.js
Bus

# @npm: vue-no-ssr
# @des: Bypass Server Renderer
NoSSR

# @npm: vue-router
# @des: The Official Router for Vue.js
Router

# @npm: vuex
# @des: Centralized State Management for Vue.js.
Vuex

# @npm: vue-rx
# @des: Integrate RxJS V6 into Vue.js.
VueRx

# @npm: vue-i18n
# @des: Internationalization Plugin for Vue.js
# @add: http://kazupon.github.io/vue-i18n/
I18n

# @npm: axios
# @des: Promise based HTTP client for Browser and Node.js
Axios

# @npm: qs
# @des: A querystring parsing and stringifying library with some added security.
Qs

# @npm: vue-apollo
# @des: Integrate GraphQL in your Vue.js apps!
# @add: https://vue-apollo.netlify.com/
Apollo

# @npm: graphql-tag
# @des: Helpful Parsing GraphQL Tags.
Gql

# @npm: importz
# @des: Easily Import Packages
Importz

# @npm: mockjs
# @des: A Simulation Data Generator
# @add: http://mockjs.com/
Mock
```

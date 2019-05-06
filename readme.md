# @cafee/staff

> a simple staff for vue

## How to use ?

```js
// install staff
npm i -s @cafee/staff

// import staff
import Staff from '@cafee/staff'

// run staff
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

module.exports = class Pie
{
	constructor ( Ressive, Proxy, Promise, Princess, Self = this )
	{
		Princess = new Promise(

			( resolve, reject ) => {

				new Ressive( Proxy )

					.next(

						({ Vue, Router, Vuex }) => {

							Vue.use( Router ), Vue.use( Vuex )

						},

						( Proxy ) => Self.Proxy = Proxy

					)

					.next(

						() => console.log( `vue staff is ready .` )

					)

				try
				{
					// Proxy Object 2 Project
					resolve( Proxy )
				}

				catch ( error )
				{
					reject( error )
				}

			}

		)

		// Finally Executer
		Princess.next(

			( V, Hook = () => {} ) => Hook( V )

		)

		// Export Promise
		return Princess

	}

}

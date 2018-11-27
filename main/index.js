// Project Structure
import Ressive from 'ressive'

// Package Import
import Importz from 'importz'

// Vue Core
import Vue from 'vue'

// Runtime Router
import Router from 'vue-router'

// Runtime Vuex
import Vuex from 'vuex'

// Main
import Pie from '../pie'

// Promise
import Promise from 'promise-super'

// Project Root
const Project = `.${process.cwd()}`


// Module Export
export default class Staff
{
	constructor (

		Configure

	)

	{
		return new Pie(

			Ressive,

			{
				Vue,

				Router,

				Vuex,

				Configure,

				Importz,

				Project
			},

			Promise

		)
	}
}

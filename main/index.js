// Project Structure
import Ressive from 'ressive'

// Vue Core
import Vue from 'vue'

// Runtime Router
import Router from 'vue-router'

// Runtime Vuex
import Vuex from 'vuex'

// Runtime I18n
import I18n from 'vue-i18n'

// Axios
import Axios from 'axios'

// Package Importz
import Importz from 'importz'

// Lodash
import _ from 'lodash'

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

				I18n,

				Axios,

				Importz,

				_,

				Project
			},

			Promise

		)
	}
}

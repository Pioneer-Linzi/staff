// Project Structure
import Ressive from 'ressive'

// Core JS
import Core from 'core-js'

// RxJS: Must Use Node Require
const Rx = require('rxjs')

// Vue Core
import Vue from 'vue'

// Vue No SSR
import NoSSR from 'vue-no-ssr'

// Runtime Router
import Router from 'vue-router'

// Runtime Vuex
import Vuex from 'vuex'

// Runtime Rx
import VueRx from 'vue-rx'

// Runtime I18n
import I18n from 'vue-i18n'

// Axios
import Axios from 'axios'

// Apollo
import Apollo from 'vue-apollo'

// GraphQL Tag
import Gql from 'graphql-tag'

// Agent
import Agent from 'mobile-detect'

// Package Importz
import Importz from 'importz'

// Mock JS
import Mock from 'mockjs'

// Lodash
import _ from 'lodash'

// Promise
import Promise from 'promise-super'

// Main
import Pie from '../pie'

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
				Rx,

				Core,

				Vue,

				Router,

				Vuex,

				NoSSR,

				VueRx,

				I18n,

				Axios,

				Apollo,

				Gql,

				Agent,

				Mock,

				Importz,

				_,

				Project
			},

			Promise

		)
	}
}

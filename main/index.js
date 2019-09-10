// Project Structure
import Ressive from 'ressive'

// Global
const Global = require('global/window')

// Agent
import Agent from 'mobile-detect'

// Core JS
import Core from 'core-js'

// RxJS: Must Use Node Require
const Rx = require('rxjs')

// Vue Core
import Vue from 'vue'

// Vue Bus
import Bus from 'vue-bus'

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

// QS
import Qs from 'qs'

// Apollo
import Apollo from 'vue-apollo'

// GraphQL Tag
import Gql from 'graphql-tag'

// Package Importz
import Importz from 'importz'

// Import Promise
import Imports from 'import-promise'

// Mock JS
import Mock from 'mockjs'

// Lodash
import _ from 'lodash'

// MD5
import MD5 from 'md5.js'

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
				Global,

				Agent,

				Rx,

				Core,

				Vue,

				Bus,

				Router,

				Vuex,

				NoSSR,

				VueRx,

				I18n,

				Axios,

				Qs,

				Apollo,

				Gql,

				Mock,

				Importz,

				Imports,

				MD5,

				_,

				Project
			},

			Promise

		)
	}
}

import { defineStore } from 'pinia'

export const useIndex = defineStore('index', {
	state: () => {
		return {
			id: 123,
		}
	},
	getters: {},
	actions: {},
})

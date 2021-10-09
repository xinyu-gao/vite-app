import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    counter: 0
  }),

  getters: {
    getCounter(state): number {
      return state.counter + 2
    }
  },

  actions: {
    reset() {
      this.counter = 0
    },
    plusOne() {
      this.counter += 1
    }
  }
})

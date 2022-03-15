import { defineStore } from 'pinia'

export const useStore = defineStore('sidebar', {
  state: () => {
    return {
      active: false,
    }
  },

  getters: {
    isActive: (state) => state.active,
  },

  actions: {
    toggle() {
      console.log('toggled')
      console.log(this.active)
      this.active = !this.active;
    },
  },
});

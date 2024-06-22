import { defineStore } from "pinia";

export const useSearchHistory = defineStore('searchHistory', {
    state: ()=> {
        return {
            users: []
        }
    },
    actions: {
        pushToHistory(username) {
            this.users.unshift(username)
        }
    }
})
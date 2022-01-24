import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export default new createPersistedState({
   path: [
     'task.list',
     'task.lastId'
   ],
   storage: {
     getItem: (key) => Cookies.get(key),
     setItem : (key, value) => {
        Cookies.set(key, value, { expires: 3, secure: true })
     },
     removeItem: (key) => Cookies.remove(key)
   }
})
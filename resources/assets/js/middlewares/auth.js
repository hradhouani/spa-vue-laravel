
import Store from '../store/store'
export default function auth(to, from, next) {

    if(!localStorage.getItem('token'))  return next({ name: 'login' });

    window.axios.get('user')
        .then(res=>Store.dispatch("setUserAction",res))
        .catch(() => { localStorage.clear();next({ name: 'login' })})
        .finally(()=> {return next();})

}

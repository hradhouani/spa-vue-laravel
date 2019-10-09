export default function log(to, from, next) {


    if(localStorage.getItem('token')) return next({ name: 'home' });
    return next();
}

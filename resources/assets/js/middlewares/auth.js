export default function log({ next, router }) {

    if(!localStorage.getItem('token'))  return router.push({ name: 'login' });

    window.axios.get('/api/user')
        .catch((error) => { console.error('error') });
    return next();
}

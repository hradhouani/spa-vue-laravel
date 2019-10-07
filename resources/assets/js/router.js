import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/ExampleComponent';
import AdminComponent from './components/admin/HomeComponent';
import LoginComponent from "./components/LoginComponent";
import authMiddleware from "./middlewares/auth";
import guestMiddleware from "./middlewares/guest";
import DashboardComponent from "./components/admin/DashboardCoponent";
import UsersComponent from "./components/admin/UsersComponent";

Vue.use(VueRouter);


const adminRoute=[
    {path: '/', component: DashboardComponent,  meta: {middleware: authMiddleware}, name: 'admin.home'},
    {path: 'users', component: UsersComponent,  meta: {middleware: authMiddleware}, name: 'admin.users'},

];
const routes = [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/login', component: LoginComponent, name: 'login' ,meta: {middleware: guestMiddleware}},
    {path: '/administration/', component: AdminComponent, name: 'admin' ,children:adminRoute}
];





const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history',

});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        // Run the default Vue Router `next()` callback first.
        context.next(...parameters);
        // Than run the subsequent Middleware with a new
        // `nextMiddleware()` callback.
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({...context, next: nextMiddleware});
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({...context, next: nextMiddleware});
    }

    return next();
});


export default router

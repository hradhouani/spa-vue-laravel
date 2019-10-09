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
    {path: '/', component: DashboardComponent, name: 'admin.home'},
    {path: 'users', component: UsersComponent, name: 'admin.users'},

];
const routes = [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/login', component: LoginComponent, name: 'login' ,beforeEnter: guestMiddleware},
    {path: '/administration/', component: AdminComponent ,beforeEnter: authMiddleware ,children:adminRoute}
];



const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',

});


export default router

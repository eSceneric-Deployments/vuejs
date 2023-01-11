import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import viewfriends from './components/ViewFriendsProp.vue'


const router = new createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('./components/AddFriend')
        },
        {
            path: '/view',
            name: 'view',
            component: () =>
                import ('./components/ViewFriends')
        },
        {
            path: '/view/:id',
            name: 'viewFriend',
            component: () =>
                import ('./components/FriendDetail')
        },
        {
            path: '/view-with-prop',
            name: 'viewProp',
            component: () =>
                import ('./components/ViewFriendsProp'),
            props: true
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () =>
                import ('./components/EditFriend')
        },
        {
            path: '/all-fields/',
            name: 'all-fields',
            component: () =>
                import ('./components/forms_practice/AllFields')
        },
        {
            path: '/view-fields-data/',
            name: 'view-fields-data',
            component: () =>
                import ('./components/forms_practice/ViewFieldsData')
        },
        {
            path: '/multi-step',
            name: 'multi-step',
            component: () =>
                import ('./components/multi_steps_form/MultiStepNew')
        },
        {
            path: '/view-multi-step',
            name: 'view-multi-step',
            component: () =>
                import ('./components/multi_steps_form/ViewMultiStep')
        },
        {
            path: '/add-course',
            name: 'add-course',
            component: () =>
                import ('./components/courses/AddCourse')
        },
        {
            path: '/view-courses',
            name: 'view-courses',
            component: () =>
                import ('./components/courses/ViewCourses')
        },
        {
            path: '/add-user',
            name: 'add-user',
            component: () =>
                import ('./components/users/AddUser')
        },
        {
            path: '/view-users',
            name: 'view-users',
            component: () =>
                import ('./components/users/ViewUsers')
        },
        {
            path: '/add-product',
            name: 'add-product',
            component: () =>
                import ('./components/products/AddProduct')
        },
        {
            path: '/view-products',
            name: 'view-products',
            component: () =>
                import ('./components/products/ViewProducts')
        },
        {
            path: '/add-item',
            name: 'add-item',
            component: () =>
                import ('./components/products/AddItem')
        },
        {
            path: '/view-items',
            name: 'view-items',
            component: () =>
                import ('./components/products/ViewItems')
        },
        {
            path: '/view-products-items',
            name: 'view-products-items',
            component: () =>
                import ('./components/products/ViewProductsItems')
        }
    ],
    linkActiveClass: 'active', //Change active class
});

// export default router
const app = createApp(App);
// app.component('friendList', viewfriends);
app.use(router);
app.mount('#app')
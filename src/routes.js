/* eslint-disable */

import Home from './components/Home.vue';
import RequestList from './components/request/RequestList.vue';
import RequestDetails from './components/request/RequestDetails.vue';

const Request = resolve => {
    require.ensure(['./components/request/Request.vue'], () => {
        resolve(require('./components/request/Request.vue'));
    }, 'request');
};

export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home,
        },
    },
    {
        path: '/request-list', components: {
        default: RequestList,
        },
    },    
    {
        path: '/request-details', components: {
        default: RequestDetails,
        },
     },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];
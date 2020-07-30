import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' //首页
import Organization from '../views/Organization.vue' //党组织
import RealEstate from '../views/RealEstate.vue' //物业服务
import Neighbor from '../views/Neighbor.vue' //左邻右舍
import NewsDetails from '../components/public/NewsDetails.vue' //社区动态详情
import Store from '../views/Store.vue' //商城
import About from '../views/About.vue' //个人

Vue.use(VueRouter)

const routes = [{ //首页
        path: '/',
        name: 'Home',
        component: Home
    },
    { //党组织
        path: '/Organization',
        name: 'Organization',
        component: Organization
    },
    { //商城
        path: '/Store',
        name: 'Store',
        component: Store
    },
    { //物业服务
        path: '/RealEstate',
        name: 'RealEstate',
        component: RealEstate
    },
    { //左邻右舍
        path: '/Neighbor',
        name: 'Neighbor',
        component: Neighbor
    },
    { //便民服务
        path: '/Convenient',
        name: 'Convenient',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Convenient.vue')
    },
    { //便民服务详情
        path: '/ConvenientDetail',
        name: 'ConvenientDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Convenient/ConvenientDetail.vue')
    },
    { //社区动态详情
        path: '/NewsDetails',
        name: 'NewsDetails',
        component: NewsDetails
    },
    { //新闻动态
        path: '/serpower',
        name: 'serpower',
        component: () =>
            import ('../views/serpower.vue'),
        meta: {
            showTabbar: true
        }
    },
    { //关于我
        path: '/About',
        name: 'About',
        component: About
    },
    { //业委会
        path: '/indComYh',
        name: 'indComYh',
        component: () =>
            import ('../views/IndustryCommittee/indComYh/indComYh.vue'),
        meta: {
            showTabbar: false
        }
    },
    { //组织架构
        path: '/organizationalstructure',
        name: 'organizationalstructure',
        component: () =>
            import ('../views/IndustryCommittee/organizationalstructure/organizationalstructure.vue'),
        meta: {
            showTabbar: false
        }
    },
    { //业委会-专家个人信息
        path: '/cintroduction',
        name: 'cintroduction',
        component: () =>
            import ('../views/IndustryCommittee/cintroduction/cintroduction.vue'),
        meta: {
            showTabbar: false
        }
    },
    { //投票事项
        path: '/votingmatters',
        name: 'votingmatters',
        component: () =>
            import ('../views/IndustryCommittee/votingmatters/votingmatters.vue'),
        meta: {
            showTabbar: false
        }
    },
    { //视频会议
        path: '/videoconferencing',
        name: 'videoconferencing',
        component: () =>
            import ('../views/IndustryCommittee/videoconferencing/videoconferencing.vue'),
        meta: {
            showTabbar: false
        }
    },
    { //个人中心-我的组织
        path: '/joinorga',
        name: 'joinorga',
        component: () =>
            import ('../views/IndustryCommittee/joinorga/joinorga.vue'),
        meta: {
            showTabbar: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import CorporateInformation from '../views/CorporateInformation.vue';
import Home from '../views/Home.vue';
import InvestorRelations from '../views/InvestorRelations.vue';
import Milestone from '../views/Milestone.vue';
import OurBusinesses from '../views/OurBusinesses.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '環球印館控股有限公司',
    },
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: '關於我們-環球印館控股有限公司',
    },
  },
  {
    path: '/milestone',
    name: 'Milestone',
    component: Milestone,
    meta: {
      title: '里程碑-環球印館控股有限公司',
    },
  },
  {
    path: '/corporate-information',
    name: 'CorporateInformation',
    component: CorporateInformation,
    meta: {
      title: '企業資訊-環球印館控股有限公司',
    },
  },
  {
    path: '/our-businesses',
    name: 'OurBusinesses',
    component: OurBusinesses,
    meta: {
      title: '集團成員-環球印館控股有限公司',
    },
  },
  {
    path: '/investor-relations/:data?',
    name: 'InvestorRelations',
    component: InvestorRelations,
    meta: {
      title: '投資者訊息-環球印館控股有限公司',
    },
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
    meta: {
      title: '聯絡我們-環球印館控股有限公司',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const noScrollRoutes = [];
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    if (noScrollRoutes.includes(to.name)) {
      return false;
    }
    return { top: 0, behavior: 'auto' };
  },
});

NProgress.configure({ ease: 'ease', speed: 500 });

router.beforeEach(async (to, from, next) => {
  if (to.path.startsWith('/api/')) {
    window.location.href = to.fullPath;
    return;
  }
  NProgress.start();
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;

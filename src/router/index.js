import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import CorporateInformation from '../views/CorporateInformation.vue';
// import Home from '../views/Home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import InvestorRelations from '../views/InvestorRelations.vue';
import Milestone from '../views/Milestone.vue';
import OurBusinesses from '../views/OurBusinesses.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AboutUs,
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/milestone',
    name: 'Milestone',
    component: Milestone,
  },
  {
    path: '/corporate-information',
    name: 'CorporateInformation',
    component: CorporateInformation,
  },
  {
    path: '/our-businesses',
    name: 'OurBusinesses',
    component: OurBusinesses,
  },
  {
    path: '/investor-relations/:data?',
    name: 'InvestorRelations',
    component: InvestorRelations,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
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
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;

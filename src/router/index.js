import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from '../i18n';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import CorporateInformation from '../views/CorporateInformation.vue';
import Home from '../views/Home.vue';
import InvestorRelations from '../views/InvestorRelations.vue';
import Milestone from '../views/Milestone.vue';
import OurBusinesses from '../views/OurBusinesses.vue';
import OurFocus from '../views/OurFocus.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      titleKey: 'title',
    },
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      titleKey: 'nav.aboutUs',
    },
  },
  {
    path: '/milestone',
    name: 'Milestone',
    component: Milestone,
    meta: {
      titleKey: 'nav.milestone',
    },
  },
  {
    path: '/corporate-information',
    name: 'CorporateInformation',
    component: CorporateInformation,
    meta: {
      titleKey: 'nav.corporateInformation',
    },
  },
  {
    path: '/our-focus',
    name: 'OurFocus',
    component: OurFocus,
    meta: {
      titleKey: 'nav.ourFocus',
    },
  },
  {
    path: '/our-businesses',
    name: 'OurBusinesses',
    component: OurBusinesses,
    meta: {
      titleKey: 'nav.ourBusinesses',
    },
  },
  {
    path: '/investor-relations/:data?',
    name: 'InvestorRelations',
    component: InvestorRelations,
    meta: {
      titleKey: 'nav.investorRelations',
    },
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
    meta: {
      titleKey: 'nav.contactUs',
    },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      titleKey: 'footer.privacy',
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

const updateTitle = (route) => {
  const t = i18n.global.t;
  const baseTitle = t('title');
  let finalTitle = baseTitle;

  if (route.meta.titleKey) {
    const pageTitle = t(route.meta.titleKey);
    if (route.name !== 'Home' && pageTitle !== baseTitle) {
      finalTitle = `${pageTitle} - ${baseTitle}`;
    } else {
      finalTitle = pageTitle;
    }
  }

  document.title = finalTitle;
};

NProgress.configure({ ease: 'ease', speed: 500 });

router.beforeEach(async (to, from, next) => {
  if (to.path.startsWith('/api/')) {
    window.location.href = to.fullPath;
    return;
  }
  NProgress.start();
  updateTitle(to);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

watch(
  () => i18n.global.locale.value,
  () => {
    updateTitle(router.currentRoute.value);
  },
);

router.afterEach(() => {
  NProgress.done();
});
export default router;

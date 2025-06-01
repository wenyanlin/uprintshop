import IconFileText from './IconFileText.vue';
import IconLanguages from './IconLanguages.vue';
import IconUseDark from './IconUseDark.vue';

const components = {
  IconLanguages,
  IconUseDark,
  IconFileText,
};

export default {
  install(app) {
    for (const key in components) {
      if (Object.hasOwn(components, key)) {
        app.component(key, components[key]);
      }
    }
  },
};

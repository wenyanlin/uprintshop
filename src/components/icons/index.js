import IconBuilding from './IconBuilding.vue';
import IconExperience from './IconExperience.vue';
import IconFileText from './IconFileText.vue';
import IconGroup from './IconGroup.vue';
import IconLanguages from './IconLanguages.vue';
import IconMapPinHouse from './IconMapPinHouse.vue';
import IconMedal from './IconMedal.vue';
import IconMilestone from './IconMilestone.vue';
import IconUseDark from './IconUseDark.vue';

const components = {
  IconLanguages,
  IconUseDark,
  IconFileText,
  IconMilestone,
  IconBuilding,
  IconGroup,
  IconExperience,
  IconMapPinHouse,
  IconMedal,
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

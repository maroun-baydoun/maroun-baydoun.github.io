import StackComponent from '../stack/stack.vue';

import Project from '../../models/project.js';

export default {
  name: 'project',
  components: {
    [StackComponent.name]: StackComponent,
  },
  props: {
    project: {
      type: Project,
      required: true,
    },
  },
};

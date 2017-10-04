import Project from '../../models/project.js';

export default {
  name: 'project',
  props: {
    project: {
      type: Project,
      required: true
    }
  },
}

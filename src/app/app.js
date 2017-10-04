import HeaderComponent from '../components/header/header.vue';
import FooterComponent from '../components/footer/footer.vue';
import ProjectComponent from '../components/project/project.vue';

import Project from '../models/project.js';

export default {
  name: 'app',
  components: {
    [HeaderComponent.name]: HeaderComponent,
    [FooterComponent.name]: FooterComponent,
    [ProjectComponent.name]: ProjectComponent
  },
  data: function() {
    return {
      projects: [
        new Project('new-hope', 'Esperanto Tokenizer', 'http://dev.maroun-baydoun.com/new-hope/', 'https://github.com/maroun-baydoun/new-hope'),
        new Project('Mediaq', 'Listen to media query updates in JavaScript', 'http://dev.maroun-baydoun.com/mediaq/', 'https://github.com/maroun-baydoun/mediaq')
      ]
    }
  }
}

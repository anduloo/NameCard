import { reactive } from 'vue';
import { useStyleStore } from '@/stores/styleStore';

class TemplateManager {
  constructor() {
    this.templates = reactive({});
  }

  async loadTemplates() {
    const templateModules = import.meta.glob('../config/templates/*.json');
    const templates = {};
    for (const path in templateModules) {
      const module = await templateModules[path]();
      const templateId = path.split('/').pop().replace('.json', '');
      templates[templateId] = module.default || module;
    }
    this.templates = templates;
    return this.templates;
  }

  getTemplates() {
    return this.templates;
  }

  getTemplate(id) {
    return this.templates[id];
  }

  applyTemplate(templateId) {
    const template = this.getTemplate(templateId);
    if (!template) {
      console.error(`Template with id "${templateId}" not found.`);
      return false;
    }
    
    const store = useStyleStore();
    
    store.setConfig(template.config);
    return true;
  }
}

const templateManager = new TemplateManager();

export default templateManager; 
// src/config/templates.js

// Use Vite's glob import to dynamically import all template JSON files
const modules = import.meta.glob('./templates/*.json', { eager: true });

const templates = {};

for (const path in modules) {
  // Extract the file name without extension to use as the key (e.g., 'business', 'modern')
  const key = path.split('/').pop().replace('.json', '');
  templates[key] = modules[path];
}

export { templates };

// You might need a default export or a different structure depending on how it was used before.
// Based on the old file, it seems 'templates' was the main export.
export default templates;

// 获取所有模板
export function getAllTemplates() {
  return Object.keys(templates).map(key => ({
    id: key,
    ...templates[key]
  }))
}

// 根据ID获取模板
export function getTemplateById(id) {
  return templates[id]
}

// 应用模板到配置
export function applyTemplate(templateId, store) {
  const template = getTemplateById(templateId)
  if (template && template.config) {
    // 应用全局配置
    if (template.config.global) {
      Object.assign(store.config.global, template.config.global)
    }
    
    // 应用姓名配置
    if (template.config.name) {
      Object.assign(store.config.name, template.config.name)
    }
    
    // 应用号码配置
    if (template.config.number) {
      Object.assign(store.config.number, template.config.number)
    }
    
    // 应用单位配置
    if (template.config.unit) {
      Object.assign(store.config.unit, template.config.unit)
    }
    
    return true
  }
  return false
} 
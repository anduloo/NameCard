import templatesData from './templates.json'

// 从JSON文件获取模板数据
const { templates } = templatesData

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

// 导出模板数据供其他组件使用
export { templates } 
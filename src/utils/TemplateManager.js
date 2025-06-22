import { reactive } from 'vue';
import { useStyleStore } from '@/stores/styleStore';

class TemplateManager {
  constructor() {
    this.templates = reactive({});
  }

  // 获取当前页面的基础路径
  getBasePath() {
    // 获取当前页面的路径
    const currentPath = window.location.pathname;
    
    // 如果是根路径，返回 './'
    if (currentPath === '/' || currentPath === '/index.html') {
      return './';
    }
    
    // 如果是子目录，计算相对路径
    const pathSegments = currentPath.split('/').filter(segment => segment);
    const relativePath = '../'.repeat(pathSegments.length - 1);
    return relativePath || './';
  }

  async loadTemplates() {
    const templates = {};
    
    try {
      console.log('🔄 开始加载模板文件...');
      
      // 获取基础路径
      const basePath = this.getBasePath();
      console.log('📍 检测到基础路径:', basePath);
      
      // 尝试从public/templates目录动态加载JSON文件
      const templateFiles = await this.discoverTemplateFiles(basePath);
      console.log('📁 发现的模板文件:', templateFiles);
      
      for (const fileName of templateFiles) {
        try {
          const templateUrl = `${basePath}templates/${fileName}`;
          console.log(`📥 正在加载: ${templateUrl}`);
          
          const fileResponse = await fetch(templateUrl);
          console.log(`📊 响应状态: ${fileResponse.status} ${fileResponse.statusText}`);
          
          if (fileResponse.ok) {
            const templateData = await fileResponse.json();
            const templateId = fileName.replace('.json', '');
            templates[templateId] = templateData;
            console.log(`✅ 成功加载模板: ${templateId}`);
          } else {
            console.error(`❌ 加载失败 ${fileName}: ${fileResponse.status} ${fileResponse.statusText}`);
          }
        } catch (error) {
          console.error(`❌ 加载模板 ${fileName} 时出错:`, error);
        }
      }
      
      console.log(`📋 总共加载了 ${Object.keys(templates).length} 个模板`);
      
    } catch (error) {
      console.error('❌ 从public目录加载模板失败:', error);
      console.log('🔄 尝试回退到src/config/templates...');
      
      // 如果从public目录加载失败，回退到原来的方式
      try {
        const templateModules = import.meta.glob('../config/templates/*.json');
        for (const path in templateModules) {
          const module = await templateModules[path]();
          const templateId = path.split('/').pop().replace('.json', '');
          templates[templateId] = module.default || module;
          console.log(`✅ 回退加载模板: ${templateId}`);
        }
      } catch (fallbackError) {
        console.error('❌ 回退加载也失败了:', fallbackError);
      }
    }
    
    this.templates = templates;
    return this.templates;
  }

  async discoverTemplateFiles(basePath) {
    // 直接使用预定义的文件列表，避免目录浏览的403错误
    console.log('📋 使用预定义的文件列表');
    return [
      'andy-special.json',
      'business.json',
      'chinese-traditional.json',
      'dark-elegant.json',
      'minimalist.json',
      'modern.json',
      'nature-inspired.json',
      'tech-blue.json',
      'test-template.json',
      'vibrant-skew.json',
      'vintage.json'
    ];
    
    // 注释掉目录索引检查，因为大多数服务器不允许目录浏览
    /*
    try {
      console.log('🔍 尝试自动发现模板文件...');
      const indexPath = `${basePath}templates/`;
      console.log('📂 尝试访问目录索引:', indexPath);
      
      const response = await fetch(indexPath);
      console.log('📊 目录索引响应:', response.status, response.statusText);
      
      if (response.ok) {
        const text = await response.text();
        console.log('📄 目录索引内容长度:', text.length);
        
        // 简单的HTML解析来提取JSON文件
        const matches = text.match(/href="([^"]*\.json)"/g);
        if (matches && matches.length > 0) {
          const files = matches.map(match => {
            const href = match.match(/href="([^"]*\.json)"/)[1];
            return href.split('/').pop();
          });
          console.log('🔍 自动发现的文件:', files);
          return files;
        }
      }
    } catch (error) {
      console.warn('⚠️ 无法自动发现模板文件:', error.message);
    }
    */
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
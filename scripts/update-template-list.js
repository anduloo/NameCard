#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.join(__dirname, '..', 'public', 'templates');
const templateManagerFile = path.join(__dirname, '..', 'src', 'utils', 'TemplateManager.js');

async function updateTemplateList() {
  try {
    console.log('🔍 扫描templates目录...');
    
    // 读取templates目录中的所有JSON文件
    const files = await fs.readdir(templatesDir);
    const jsonFiles = files.filter(file => file.endsWith('.json')).sort();
    
    console.log(`📋 发现 ${jsonFiles.length} 个模板文件:`);
    jsonFiles.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file}`);
    });
    
    // 读取TemplateManager.js文件
    let content = await fs.readFile(templateManagerFile, 'utf8');
    
    // 生成新的文件列表字符串
    const fileListString = jsonFiles.map(file => `      '${file}'`).join(',\n');
    
    // 替换文件列表
    const regex = /return \[\s*([\s\S]*?)\s*\];/;
    const replacement = `return [\n${fileListString}\n    ];`;
    
    const newContent = content.replace(regex, replacement);
    
    // 写回文件
    await fs.writeFile(templateManagerFile, newContent, 'utf8');
    
    console.log('\n✅ 已更新TemplateManager.js中的文件列表');
    console.log('📝 请重新构建项目: npm run build');
    
  } catch (error) {
    console.error('❌ 更新失败:', error.message);
  }
}

async function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'update':
      await updateTemplateList();
      break;
    default:
      console.log(`
🔄 模板列表更新工具

用法: node scripts/update-template-list.js update

功能:
  - 扫描 public/templates 目录
  - 自动更新 TemplateManager.js 中的文件列表
  - 确保所有模板文件都能被正确加载

示例:
  node scripts/update-template-list.js update
`);
      break;
  }
}

main().catch(console.error); 
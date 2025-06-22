#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesDir = path.join(__dirname, '..', 'public', 'templates');

async function listTemplates() {
  try {
    const files = await fs.readdir(templatesDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log('📋 当前模板列表:');
    console.log('================');
    
    for (const file of jsonFiles) {
      const filePath = path.join(templatesDir, file);
      const content = await fs.readJson(filePath);
      console.log(`📄 ${file}`);
      console.log(`   名称: ${content.name || '未命名'}`);
      console.log(`   描述: ${content.description || '无描述'}`);
      console.log('');
    }
  } catch (error) {
    console.error('❌ 读取模板目录失败:', error.message);
  }
}

async function validateTemplate(templatePath) {
  try {
    const content = await fs.readJson(templatePath);
    
    // 基本结构验证
    if (!content.name) {
      console.warn('⚠️  警告: 模板缺少name字段');
    }
    if (!content.description) {
      console.warn('⚠️  警告: 模板缺少description字段');
    }
    if (!content.config) {
      console.error('❌ 错误: 模板缺少config字段');
      return false;
    }
    
    console.log('✅ 模板格式验证通过');
    return true;
  } catch (error) {
    console.error('❌ JSON格式错误:', error.message);
    return false;
  }
}

async function validateAllTemplates() {
  try {
    const files = await fs.readdir(templatesDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log('🔍 验证所有模板...');
    console.log('================');
    
    let validCount = 0;
    for (const file of jsonFiles) {
      const filePath = path.join(templatesDir, file);
      console.log(`\n检查: ${file}`);
      const isValid = await validateTemplate(filePath);
      if (isValid) validCount++;
    }
    
    console.log(`\n📊 验证结果: ${validCount}/${jsonFiles.length} 个模板有效`);
  } catch (error) {
    console.error('❌ 验证失败:', error.message);
  }
}

async function createTemplate(templateName) {
  if (!templateName) {
    console.error('❌ 请提供模板名称');
    return;
  }
  
  const fileName = `${templateName}.json`;
  const filePath = path.join(templatesDir, fileName);
  
  if (await fs.pathExists(filePath)) {
    console.error('❌ 模板文件已存在');
    return;
  }
  
  const template = {
    name: templateName,
    description: "新模板描述",
    config: {
      global: {
        bgColor: "#ffffff",
        border: {
          color: "#000000",
          width: 1,
          style: ["none"]
        },
        borderRadius: 0,
        textAlign: "center"
      },
      name: {
        textColor: "#000000",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        fontFamily: "Arial, sans-serif",
        border: {
          color: "#000000",
          width: 0,
          style: ["none"]
        },
        borderRadius: 0,
        skewAngle: 0,
        length: 50
      },
      number: {
        textColor: "#000000",
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        fontFamily: "Arial, sans-serif",
        border: {
          color: "#000000",
          width: 0,
          style: ["none"]
        },
        borderRadius: 0,
        skewAngle: 0,
        length: 30
      },
      unit: {
        textColor: "#000000",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        fontFamily: "Arial, sans-serif",
        border: {
          color: "#000000",
          width: 0,
          style: ["none"]
        },
        borderRadius: 0,
        skewAngle: 0,
        length: 40
      }
    }
  };
  
  try {
    await fs.writeJson(filePath, template, { spaces: 2 });
    console.log(`✅ 模板创建成功: ${fileName}`);
  } catch (error) {
    console.error('❌ 创建模板失败:', error.message);
  }
}

function showHelp() {
  console.log(`
📚 模板管理工具

用法: node scripts/manage-templates.js [命令] [参数]

命令:
  list                   列出所有模板
  validate              验证所有模板格式
  create <模板名>        创建新模板
  help                  显示帮助信息

示例:
  node scripts/manage-templates.js list
  node scripts/manage-templates.js validate
  node scripts/manage-templates.js create my-template
`);
}

async function main() {
  const command = process.argv[2];
  const arg = process.argv[3];
  
  switch (command) {
    case 'list':
      await listTemplates();
      break;
    case 'validate':
      await validateAllTemplates();
      break;
    case 'create':
      await createTemplate(arg);
      break;
    case 'help':
    default:
      showHelp();
      break;
  }
}

main().catch(console.error); 
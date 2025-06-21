const fs = require('fs-extra');
const path = require('path');

const templatesFilePath = path.join(__dirname, 'src', 'config', 'templates.json');
const templatesDir = path.join(__dirname, 'src', 'config', 'templates');

async function splitTemplates() {
  try {
    console.log('Starting template refactoring...');
    
    // 1. Ensure the target directory exists
    await fs.ensureDir(templatesDir);
    console.log(`Directory ensured at: ${templatesDir}`);

    // 2. Read the source templates.json file
    console.log(`Reading from: ${templatesFilePath}`);
    const templatesData = await fs.readJson(templatesFilePath);
    const templates = templatesData.templates;
    console.log('Successfully read templates.json.');

    // 3. Iterate over templates and write a new file for each
    const keys = Object.keys(templates);
    console.log(`Found ${keys.length} templates to split.`);
    for (const key of keys) {
        const templateObject = templates[key];
        const newFilePath = path.join(templatesDir, `${key}.json`);
        await fs.writeJson(newFilePath, templateObject, { spaces: 2 });
        console.log(` -> Created template file: ${newFilePath}`);
    }

    // 4. Remove the old templates.json file
    await fs.remove(templatesFilePath);
    console.log(`Successfully removed old file: ${templatesFilePath}`);

    console.log('\nRefactoring complete! All templates have been split.');

  } catch (err) {
    console.error('An error occurred during the refactoring process:', err);
    process.exit(1); // Exit with an error code
  }
}

splitTemplates(); 
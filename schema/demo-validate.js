#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ajv = new Ajv();

// Load demo schema
const schemaPath = path.join(__dirname, 'db13-demo.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const validate = ajv.compile(schema);

// Get sample files
const samplesDir = path.join(__dirname, '..', 'samples');
const sampleFiles = [
  'en/sample_single.json',
  'en/sample_set.json', 
  'ko/sample_single.json',
  'ko/sample_set.json'
];

console.log('QuizAtlas Demo Schema Validation\n');

let allValid = true;

sampleFiles.forEach(file => {
  const filePath = path.join(samplesDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${file}: File not found`);
    allValid = false;
    return;
  }

  try {
    const sample = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const valid = validate(sample);
    
    if (valid) {
      console.log(`✅ ${file}: Valid`);
    } else {
      console.log(`❌ ${file}: Invalid`);
      validate.errors?.forEach(error => {
        console.log(`   ${error.instancePath}: ${error.message}`);
      });
      allValid = false;
    }
  } catch (error) {
    console.log(`❌ ${file}: JSON parse error - ${error.message}`);
    allValid = false;
  }
});

console.log(allValid ? '\n✅ All samples valid!' : '\n❌ Validation failed');
process.exit(allValid ? 0 : 1);
/**
 * QuizAtlas Demo Schema Validation Script
 * Demo-only validator for sample items
 * NOT FOR PRODUCTION USE
 */

import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// Define the demo schema using Zod
const OptionSchema = z.object({
  id: z.enum(['A', 'B', 'C', 'D', 'E']),
  text: z.string().min(1)
});

const MetadataSchema = z.object({
  difficulty: z.enum(['easy', 'medium', 'hard']),
  bloom: z.enum(['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create']),
  estimated_time_sec: z.number().int().min(10).max(600)
});

const PassageSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1)
});

const QuestionSchema = z.object({
  stem: z.string().min(1),
  options: z.array(OptionSchema).min(2).max(5),
  answer: z.enum(['A', 'B', 'C', 'D', 'E']),
  explanation: z.string().optional(),
  metadata: MetadataSchema
});

const SingleItemSchema = z.object({
  id: z.string().min(1),
  type: z.literal('single'),
  passage: PassageSchema.optional(),
  stem: z.string().min(1),
  options: z.array(OptionSchema).min(2).max(5),
  answer: z.enum(['A', 'B', 'C', 'D', 'E']),
  explanation: z.string().min(1),
  metadata: MetadataSchema
});

const SetItemSchema = z.object({
  id: z.string().min(1),
  type: z.literal('set'),
  passage: PassageSchema,
  questions: z.array(QuestionSchema).min(2).max(6),
  metadata: MetadataSchema
});

const ItemSchema = z.union([SingleItemSchema, SetItemSchema]);

// Main validation function
function validateDemoItem(filePath: string) {
  const fileName = path.basename(filePath);
  
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }

    // Read and parse JSON
    const rawData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(rawData);

    // Validate against schema
    const result = ItemSchema.safeParse(data);

    if (result.success) {
      console.log(`✅ ${fileName}: Valid demo item structure`);
      console.log(`   Type: ${result.data.type}`);
      console.log(`   ID: ${result.data.id}`);
      
      if (result.data.type === 'set' && 'questions' in result.data) {
        console.log(`   Questions: ${result.data.questions.length}`);
      }
      
      console.log(`   Difficulty: ${result.data.metadata.difficulty}`);
      console.log(`   Bloom level: ${result.data.metadata.bloom}`);
      console.log(`   Time estimate: ${result.data.metadata.estimated_time_sec}s`);
    } else {
      console.error(`❌ ${fileName}: Invalid demo item structure`);
      console.error('\nValidation errors:');
      result.error.errors.forEach((err, index) => {
        console.error(`   ${index + 1}. Path: ${err.path.join('.')}`);
        console.error(`      Error: ${err.message}`);
      });
      process.exit(1);
    }
  } catch (error) {
    console.error(`❌ ${fileName}: Failed to process file`);
    if (error instanceof SyntaxError) {
      console.error('   Invalid JSON format');
    } else if (error instanceof Error) {
      console.error(`   ${error.message}`);
    }
    process.exit(1);
  }
}

// Run validation
const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: npm run validate <file-path>');
  console.error('Example: npm run validate samples/en/sample_single.json');
  process.exit(1);
}

validateDemoItem(filePath);
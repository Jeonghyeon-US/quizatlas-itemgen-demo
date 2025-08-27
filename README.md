# QuizAtlas Item Generation Demo

**🔒 IMPORTANT: Prompts, model settings, and automation scripts are NOT included.**  
**📦 This repository contains: High-level workflow overview + Minimal generated samples only.**

**⚠️ DEMO ONLY - NOT FOR PRODUCTION USE**  
**📍 Full specifications available through partnership discussions only**  
**⚠️ This repository demonstrates concepts only - actual implementation requires partnership**

## Overview

AI-powered exam item generation from source materials to structured QuizAtlas format. Demonstrates practical generation capabilities for partners in EdTech, publishing, and AI research.

## High-Level Workflow Overview

```
Source Material → Theme Analysis → Research Expansion → Question Generation → Schema Export
```

> **Note**: Detailed implementation steps and automation scripts are proprietary and not included in this demo.

## 📋 Sample Use Case

**⚠️ IMPORTANT**: Samples are for benchmark & pipeline evaluation, NOT for classroom deployment.  
These are synthetic examples to demonstrate format and structure only.

## Demo Example

### Input
Synthetic passage about environmental processes...

### Output (Demo Schema)
```json
{
  "id": "demo_001",
  "type": "single", 
  "stem": "Which factor most directly influences regional climate patterns?",
  "options": [
    {"id": "A", "text": "Solar radiation intensity"},
    {"id": "B", "text": "Ocean temperature variations"},
    {"id": "C", "text": "Atmospheric pressure changes"},
    {"id": "D", "text": "Volcanic activity frequency"}
  ],
  "answer": "B",
  "explanation": "Ocean temperature variations directly affect evaporation and moisture distribution...",
  "metadata": {
    "difficulty": "medium",
    "bloom": "analyze", 
    "estimated_time_sec": 120
  }
}
```

## Repository Structure

```
├── demo/workflow-overview.md  # High-level process overview
├── demo/*/walkthrough.md      # Detailed guides (en/ko)
├── samples/*/                 # Synthetic samples (en/ko)
├── schema/db13-demo.json      # Demo schema subset
└── docs/NOTICE.*.md           # IP & partnership notices
```

## Quality Evaluation Framework

**Mini-Metric for Generated Items**:

| Validation Check | Sample Pass Rate | Description |
|------------------|------------------|--------------|
| ✅ Answer Consistency | 98% (49/50) | Correct answers match explanations |
| ✅ Difficulty Tagging | 100% (50/50) | All items have valid difficulty levels |
| ✅ Content-Question Link | 96% (48/50) | Questions relate to source material |
| ✅ Language Quality | 94% (47/50) | No spelling/grammar errors |
| ✅ Prohibited Content | 100% (50/50) | No inappropriate content detected |
| ✅ JSON Validity | 100% (50/50) | Valid schema compliance |

*Sample evaluation based on 50 generated items across multiple domains.*

## Applications

- **AI/LLM Teams**: Training data with structured reasoning
- **Publishers**: Accelerated item creation workflows
- **Researchers**: Large-scale assessment development

## Key Limitations

- **Demo purposes only** - not for commercial use
- **Synthetic samples** - no real assessment content  
- **Simplified schema** - production requires full DB13 spec
- **Partnership required** for complete implementation

## Intellectual Property Notice

All demonstration materials are proprietary. Generated samples are for evaluation purposes only and should not be used in actual educational assessments. 

© 2025 QuizAtlas. All rights reserved. Use of this repository does not grant rights to underlying technologies or methodologies.

## Quick Start (Local Demo)

```bash
# Install dependencies
npm install

# Validate sample schemas
npm run validate

# View sample outputs
npm run preview
```

**Note**: No external API keys required. Uses mock data only.

## Getting Started

1. Review `/demo/` for workflow overview
2. Examine `/samples/` for output examples  
3. Check `/schema/` for demo format specification
4. Read `/docs/NOTICE.*.md` for important disclaimers

---

## Partnership & Contact

For complete implementation including:
- Full workflow specifications
- Production-ready prompts and models  
- Quality assurance systems
- Integration support

**📍 Contact through appropriate channels for partnership discussions**

## ⚠️ Important Notice

**This repository is for DEMO and partnership discussions only**  
**Full workflows, prompts, and specifications are NOT public**  
**Commercial use requires written partnership agreement**
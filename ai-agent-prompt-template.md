# AI Agent Prompt Template

## Methodology Overview

This template is designed to create **zero-context prompts** that can be used with any AI agent to implement specific technical tasks. The structure ensures the AI has all necessary context, constraints, and success criteria to complete the work autonomously.

### Key Principles

1. **Role Definition**: Establish expertise and context immediately
2. **Current State Analysis**: Provide existing code/file references  
3. **Clear Requirements**: Specific, actionable tasks with constraints
4. **Expected Outcomes**: Concrete examples of desired results
5. **Acceptance Criteria**: Measurable success indicators

### When to Use This Template

- **Complex Implementation Tasks**: Multi-file changes with specific requirements
- **Cross-Agent Consistency**: Ensuring different AI agents produce similar quality work
- **Zero-Context Scenarios**: When you can't provide conversation history
- **Quality Assurance**: When you need specific validation criteria
- **Knowledge Transfer**: Documenting implementation approaches for future reference

---

## AI Agent Prompt Template

```markdown
### 🎯 **AI Agent Prompt**

```
You are an expert [DOMAIN/TECHNOLOGY] developer specializing in [SPECIFIC EXPERTISE AREA].

**CONTEXT**: [Brief project description and current state. What exists now and why this change is needed]

**CURRENT FILE(S)**: 
- `[/path/to/main/file.ext]` ([description of current role/content])
- `[/path/to/related/file.ext]` ([description if multiple files])

**TASK**: [Single, clear sentence describing the main objective]

**REQUIREMENTS**:
1. [Specific requirement 1]
2. [Specific requirement 2] 
3. [Specific requirement 3]
4. [Continue as needed...]

**[OPTIONAL SECTION - Domain-Specific Details]**:
[Any domain-specific context, definitions, or important details]
- **[Category 1]**: [Details]
- **[Category 2]**: [Details]

**CONSTRAINTS**:
- [Technical constraint 1 - e.g., don't modify existing functionality]
- [Performance constraint - e.g., keep function efficient]
- [Style constraint - e.g., follow existing code patterns]
- [Security constraint - e.g., maintain existing auth patterns]
- [Compatibility constraint - e.g., don't break existing API contracts]

**CODE REFERENCE**:
[Provide specific line numbers or code snippets for context]
```[language]
[Current relevant code snippet that shows existing patterns]
```

**EXPECTED OUTCOME**:
[Detailed description of what the end result should look like, including:]

[Code example or structure showing the desired result]
```[language]
// Example of expected code structure or output
[example code]
```

**ACCEPTANCE CRITERIA**:
- [ ] [Functional requirement 1]
- [ ] [Functional requirement 2]
- [ ] [Performance requirement]
- [ ] [Integration requirement]
- [ ] [Testing requirement]
- [ ] [Documentation requirement]

**FILES TO CREATE/MODIFY**:
- `[/path/to/file1.ext]` ([new/enhance existing])
- `[/path/to/file2.ext]` ([new/enhance existing])

**[OPTIONAL] TESTING REQUIREMENTS**:
- [Test scenario 1]
- [Test scenario 2]
- [Edge case testing]
```

---

## Usage Instructions

### 1. **Fill Out the Template Sections**

**Role Definition**: 
```
You are an expert [React/Next.js/PostgreSQL/Python] developer specializing in [UI/UX/database optimization/API design].
```

**Context Setup**:
- Briefly explain the project and current state
- Explain why this change is needed
- Reference specific existing files

**Requirements Definition**:
- Use numbered lists for clarity
- Be specific and actionable
- Include both functional and non-functional requirements

### 2. **Provide Concrete Examples**

Always include:
- **Code References**: Specific line numbers or existing patterns
- **Expected Outcomes**: Show exactly what you want the result to look like
- **Acceptance Criteria**: Measurable checkboxes for validation

### 3. **Use Appropriate Constraints**

Common constraint categories:
- **Technical**: Don't break existing functionality
- **Performance**: Maintain current response times
- **Security**: Follow existing auth patterns
- **Style**: Use existing code conventions
- **Compatibility**: Don't break existing API contracts

### 4. **Structure for Zero-Context Use**

The prompt should be completely self-contained:
- No references to "our previous discussion"
- All necessary context included in the prompt
- No assumptions about prior knowledge
- Clear file paths and references

## Example Usage Scenarios

### ✅ **Good Use Cases**
- Implementing a specific feature with clear requirements
- Enhancing existing functionality with measurable improvements
- Creating new components that integrate with existing systems
- Database schema changes with specific data requirements

### ❌ **Less Suitable Use Cases**
- Open-ended architectural decisions
- Exploratory research tasks
- Tasks requiring extensive back-and-forth discussion
- High-level strategic planning

## Template Variations

### **Quick Enhancement Template** (for small changes)
```
You are an expert [TECHNOLOGY] developer.

**TASK**: [Single clear objective]

**FILE**: `[/path/to/file]` - [current role]

**REQUIREMENTS**: 
1. [Requirement 1]
2. [Requirement 2]

**CONSTRAINTS**:
- [Main constraint]

**EXPECTED OUTCOME**:
[Brief description + code example]

**ACCEPTANCE CRITERIA**:
- [ ] [Main success indicator]
```

### **New Feature Template** (for larger implementations)
```
You are an expert [DOMAIN] developer specializing in [AREA].

**CONTEXT**: [Project background]

**TASK**: [Feature description]

**REQUIREMENTS**: [Detailed numbered list]

**ARCHITECTURE**: [How it should integrate]

**FILES TO CREATE**: [New files needed]

**ACCEPTANCE CRITERIA**: [Comprehensive checklist]
```

## Quality Checklist

Before using any prompt, verify:

- [ ] **Role is specific** (not just "you are a developer")
- [ ] **Context is complete** (AI understands current state)
- [ ] **Requirements are actionable** (not vague objectives)
- [ ] **Examples are concrete** (show exactly what you want)
- [ ] **Constraints are clear** (what NOT to do)
- [ ] **Success is measurable** (checkbox-able criteria)
- [ ] **Files are specified** (exact paths and purposes)

## Advanced Tips

### **Prompt Chaining**
For complex multi-step implementations:
1. Create separate prompts for each major component
2. Reference outputs from previous prompts
3. Include integration requirements between components

### **Context Preservation**
When working on related tasks:
1. Include references to previously created files
2. Maintain consistent naming conventions
3. Reference shared types or interfaces

### **Error Prevention**
Common prompt improvements:
1. Specify exact existing patterns to follow
2. Include error handling requirements
3. Mention edge cases to consider
4. Require backward compatibility

This template structure ensures consistent, high-quality AI agent interactions while maintaining the ability to work across different conversation contexts and AI systems.
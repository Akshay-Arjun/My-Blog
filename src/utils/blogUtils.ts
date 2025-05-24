import { BlogPost } from '../types';

// This would normally use dynamic imports in a real project
// For demo purposes, we'll create static blog posts with markdown content
export const getPosts = async (): Promise<BlogPost[]> => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      slug: 'secure-coding-practices',
      title: 'Essential Secure Coding Practices',
      date: '2023-09-15',
      readTime: 5,
      content: `
# Essential Secure Coding Practices

Security should be built into the development process from the start, not added as an afterthought. Here are some essential practices every developer should follow.

## 1. Input Validation

Never trust user input. Validate all input against a whitelist of allowed characters and formats.

\`\`\`javascript
if (command.startsWith("inject")) {
  setOutput([
    \`guest@akshayblog:~$ \${command}\`,
    "[!] Suspicious query detected:",
    \`> SELECT * FROM users WHERE username = '\${injectedValue}'\`,
    "🛡️  Injection blocked: parameterized queries in use."
  ]);
}
\`\`\`

## 2. Parameterized Queries

Always use parameterized queries or prepared statements to prevent SQL injection.

## 3. Output Encoding

Encode output data based on the context where it will be displayed to prevent XSS attacks.

## 4. Authentication & Authorization

Implement strong authentication and proper authorization checks for all sensitive operations.

## 5. HTTPS Everywhere

Use HTTPS for all connections to protect data in transit.

Remember, security is a continuous process, not a one-time task!
      `
    },
    {
      slug: 'understanding-zero-trust',
      title: 'Understanding Zero Trust Architecture',
      date: '2023-10-22',
      readTime: 7,
      content: `
# Understanding Zero Trust Architecture

## The End of "Trust but Verify"

Traditional security models operated on a "trust but verify" principle. Zero Trust flips this concept on its head with a "never trust, always verify" approach.

## Core Principles

1. **Verify explicitly** - Always authenticate and authorize based on all available data points  
2. **Use least privilege access** - Limit user access with Just-In-Time and Just-Enough-Access  
3. **Assume breach** - Minimize blast radius and segment access

## Implementation Strategies

### 1. Identity as the New Perimeter

\`\`\`
┌────────────────┐     ┌───────────────┐     ┌────────────┐
│                │     │               │     │            │
│  User Identity ├────►│ Policy Engine ├────►│ Resources  │
│                │     │               │     │            │
└────────────────┘     └───────────────┘     └────────────┘
\`\`\`

### 2. Micro-Segmentation

Divide security perimeters into small zones to maintain separate access for separate parts of the network.

### 3. Continuous Monitoring and Validation

Zero Trust is not a "set it and forget it" approach. Continuous monitoring is essential.

## Challenges

- Legacy system integration  
- Initial complexity  
- Cultural resistance  

Remember: Zero Trust is a journey, not a destination!
      `
    },
    {
      slug: 'first-post',
      title: 'Welcome to My Hacker Terminal Blog',
      date: '2023-08-01',
      readTime: 3,
      content: `
# Welcome to My Hacker Terminal Blog

Hello, world! This is the first post on my new terminal-themed blog. I'll be sharing thoughts on cybersecurity, programming, and technology.

## Why a Terminal Theme?

There's something nostalgic yet timeless about the command line interface. It represents:

- **Simplicity**: Focus on content, not flashy design  
- **Power**: The terminal is where real work happens  
- **History**: Honoring computing's roots

## What to Expect

- Technical deep dives  
- Security analysis  
- Coding tutorials  
- Random thoughts on tech

Stay tuned for more posts coming soon!

\`\`\`
$ echo "Thanks for reading!"
Thanks for reading!
\`\`\`
      `
    }
  ];
};

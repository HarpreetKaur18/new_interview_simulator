const questionBank = {
    "Software Developer": [
      "Explain the concept of REST APIs.",
      "What is a closure in JavaScript?",
      "How do you optimize a slow database query?",
      "Explain SOLID principles.",
      "Difference between SQL and NoSQL databases?",
      "How would you debug a crashing application?",
      "Explain how Git rebase works.",
      "What is the difference between TCP and UDP?",
      "Explain dependency injection.",
      "What are WebSockets and where would you use them?",
      "What is the use of JWT tokens?",
      "Difference between unit tests and integration tests?",
      "How would you secure a REST API?",
      "Explain MVC architecture.",
      "How does React’s Virtual DOM work?",
      "What is CORS and why does it occur?",
      "Difference between synchronous and asynchronous code?",
      "What is Docker and why use it?",
      "How would you prevent SQL Injection?",
      "Explain OAuth 2.0."
    ],
    "Construction Worker": [
      "Describe a time you followed strict safety protocols.",
      "What tools are you most experienced with?",
      "Explain how you interpret blueprints.",
      "How do you ensure quality in your work?",
      "Describe a situation where you had to solve an on-site problem.",
      "What safety certifications do you hold?",
      "How do you handle working in extreme weather?",
      "Describe your experience with heavy machinery.",
      "How do you maintain your tools and equipment?",
      "Explain how you would report hazards.",
      "What’s the first thing you do when arriving on a job site?",
      "How do you manage teamwork under pressure?",
      "How do you stay updated with construction regulations?",
      "Describe how you handled an accident or near miss.",
      "How do you deal with delays on construction sites?",
      "Explain how you manage material waste responsibly.",
      "How do you read elevation drawings?",
      "Describe PPE you use daily.",
      "What is your experience with scaffolding?",
      "How do you prioritize tasks when building schedules shift?"
    ],
    "Customer Service": [
      "How would you calm down an angry customer?",
      "Describe a time you went above and beyond for a client.",
      "How do you manage multiple customers at once?",
      "Describe your process for handling complaints.",
      "Explain a time you successfully de-escalated a situation.",
      "How do you ensure customer satisfaction?",
      "What CRM tools have you used before?",
      "How do you handle unreasonable customer demands?",
      "Describe your follow-up strategy with clients.",
      "What does good service mean to you?",
      "How do you handle product issues you can't immediately fix?",
      "Describe how you work with other departments (sales, tech).",
      "How do you prioritize tasks in a busy call center?",
      "Explain a time when you handled a language barrier.",
      "How would you upsell products during support calls?",
      "How do you document customer interactions?",
      "Explain how you turn negative feedback into learning.",
      "What are the KPIs for a customer support role?",
      "How do you maintain positivity during stressful shifts?",
      "Why is empathy important in customer service?"
    ],
    "Teacher": [
      "What is your teaching philosophy?",
      "How do you handle disruptive students?",
      "Describe a time you adapted a lesson for a struggling student.",
      "How do you integrate technology into the classroom?",
      "How do you measure student success?",
      "Explain a creative teaching method you have used.",
      "Describe how you support diverse learning styles.",
      "How do you maintain discipline respectfully?",
      "Describe an experience where you worked with parents.",
      "What would you do if a student refuses to participate?",
      "How do you use formative assessments?",
      "How do you handle academic dishonesty?",
      "How do you incorporate social-emotional learning?",
      "Describe a time you led extracurricular activities.",
      "How do you ensure inclusivity in your classroom?",
      "What are the keys to lesson planning?",
      "How do you maintain professional development?",
      "How do you adjust to new curricula?",
      "How would you handle bullying?",
      "What’s your approach to grading?"
    ],
    "Nurse": [
      "Describe a high-pressure situation and how you handled it.",
      "How do you prioritize patient care?",
      "Explain how you handle emotional situations with patients/families.",
      "How do you manage medication administration accurately?",
      "Describe a time you advocated for a patient.",
      "Explain the importance of patient confidentiality.",
      "How do you handle workplace conflicts with colleagues?",
      "How do you stay organized during busy shifts?",
      "How would you educate a patient about a new diagnosis?",
      "Explain how you perform patient assessments.",
      "What would you do if you caught a medication error?",
      "Describe a time you adapted care for cultural needs.",
      "How do you handle aggressive or combative patients?",
      "Explain your knowledge of infection control procedures.",
      "Describe how you handle shift handovers.",
      "How do you deal with death and grieving families?",
      "What is your approach to pain management?",
      "Explain teamwork importance in healthcare settings.",
      "How do you deal with ethical dilemmas?",
      "Why did you become a nurse?"
    ],
    "UX Designer": [
        "How do you approach user research?",
        "Describe your design process.",
        "How do you collaborate with developers?",
        "What tools do you use for prototyping?",
        "How do you test usability?",
        "Explain the importance of accessibility in UX.",
        "How do you handle conflicting feedback?",
        "Describe a time your design improved a product.",
        "What’s the difference between UX and UI?",
        "How do you present your work to stakeholders?",
        "Describe your favorite user journey you’ve designed.",
        "What is information architecture?",
        "How do you keep users engaged?",
        "What are some common UX mistakes?",
        "How do you measure success in UX?",
        "Describe a failed design and what you learned.",
        "How do you prioritize user needs?",
        "What are UX heuristics?",
        "How do you stay updated in UX trends?",
        "Describe an ideal onboarding experience."
      ],
      "Digital Marketer": [
        "How do you build a digital marketing strategy?",
        "Which KPIs do you track in campaigns?",
        "What’s your approach to SEO?",
        "How do you manage a content calendar?",
        "Describe your experience with email marketing.",
        "What’s your favorite ad platform and why?",
        "How do you do keyword research?",
        "How do you handle a drop in web traffic?",
        "What is A/B testing and why is it important?",
        "Describe a successful campaign you led.",
        "What’s your approach to lead generation?",
        "How do you stay updated on marketing trends?",
        "What CRM tools have you used?",
        "How do you build customer personas?",
        "What’s the role of analytics in marketing?",
        "How do you use social media for brand building?",
        "How do you measure ROI in marketing?",
        "What are retargeting ads?",
        "How do you optimize conversion funnels?",
        "What do you know about GA4?"
      ],
      "Project Manager": [
        "Describe your project lifecycle approach.",
        "How do you manage deadlines across teams?",
        "What tools do you use for tracking progress?",
        "How do you manage scope creep?",
        "How do you resolve team conflicts?",
        "What’s your risk management process?",
        "Describe a time you delivered a project under budget.",
        "How do you balance multiple projects at once?",
        "How do you prioritize features with stakeholders?",
        "What’s your experience with Agile or Scrum?",
        "How do you lead remote teams?",
        "How do you keep stakeholders informed?",
        "Describe your meeting structure.",
        "What’s your experience with JIRA?",
        "How do you gather requirements?",
        "How do you handle change requests?",
        "How do you onboard new team members?",
        "What’s your post-project review process?",
        "How do you ensure quality at each step?",
        "Describe a failed project and what you learned."
      ],
      "Mechanical Engineer": [
        "How do you troubleshoot mechanical systems?",
        "Describe your experience with CAD tools.",
        "How do you handle failure analysis?",
        "What is your approach to prototyping?",
        "Describe your thermal systems experience.",
        "How do you validate a mechanical design?",
        "Explain a time you reduced cost in a design.",
        "Describe a time you collaborated with electrical teams.",
        "How do you choose materials for a project?",
        "How do you ensure safety in your designs?",
        "What’s your experience with tolerance analysis?",
        "Describe a complex system you worked on.",
        "How do you handle test data?",
        "How do you manage documentation?",
        "What’s your experience with FEA?",
        "How do you debug noise/vibration issues?",
        "What’s your approach to continuous improvement?",
        "How do you communicate design decisions?",
        "How do you manage design iterations?",
        "What engineering principles guide your work?"
      ],
      "Graphic Designer": [
        "Describe your design style.",
        "What tools do you use for design work?",
        "How do you handle creative blocks?",
        "What is your process for client revisions?",
        "Describe a project where branding was key.",
        "How do you keep your work consistent?",
        "What is the role of color theory in design?",
        "Describe a time your design increased engagement.",
        "How do you stay updated with design trends?",
        "What makes a good logo?",
        "How do you balance creativity and deadlines?",
        "What’s your experience with typography?",
        "How do you gather inspiration for a new project?",
        "What’s the difference between raster and vector?",
        "Describe a challenging design feedback situation.",
        "What’s your experience with print media?",
        "How do you prep files for web vs print?",
        "Describe your design portfolio.",
        "What makes a strong visual hierarchy?",
        "How do you ensure accessibility in visual design?"
      ],
      "Data Scientist": [
        "What’s the difference between classification and regression?",
        "Explain the concept of overfitting.",
        "How do you handle missing data?",
        "Describe a machine learning project you worked on.",
        "How do you validate your models?",
        "What is cross-validation?",
        "Explain the bias-variance tradeoff.",
        "How do you deal with imbalanced datasets?",
        "What tools do you use for data wrangling?",
        "Describe your experience with Python or R.",
        "How do you present insights to non-technical stakeholders?",
        "What’s your experience with big data?",
        "How do you measure model performance?",
        "What’s your approach to feature engineering?",
        "Describe a data cleaning process.",
        "What’s your experience with SQL?",
        "How do you communicate uncertainty in data?",
        "What is A/B testing and how do you use it?",
        "What is the role of data visualization?",
        "Describe a time your model failed and what you learned."
      ],
      "HR Manager": [
        "How do you resolve workplace conflicts?",
        "Describe your onboarding process.",
        "How do you handle complaints of harassment?",
        "What’s your approach to employee retention?",
        "How do you keep employees engaged?",
        "Describe your performance review process.",
        "How do you manage benefits communication?",
        "What tools do you use for HRIS?",
        "Describe a time you led change management.",
        "What’s your approach to DEI initiatives?",
        "How do you manage internal promotions?",
        "What’s your role in recruitment?",
        "Describe how you handle layoffs professionally.",
        "How do you educate managers on HR best practices?",
        "What do you know about labor laws?",
        "Describe your employee exit process.",
        "How do you balance compliance with empathy?",
        "What’s your philosophy on company culture?",
        "How do you manage HR audits?",
        "What trends are shaping HR today?"
      ],
      "Sales Executive": [
        "How do you qualify a lead?",
        "What’s your sales pitch structure?",
        "How do you handle pricing objections?",
        "Describe a time you hit your quota under pressure.",
        "How do you track sales performance?",
        "What CRM tools do you use?",
        "How do you approach cold outreach?",
        "Describe your negotiation style.",
        "How do you build long-term client relationships?",
        "What’s your closing strategy?",
        "Describe your follow-up process.",
        "What is your favorite part of sales?",
        "How do you build trust with clients?",
        "What’s your process for forecasting?",
        "How do you overcome rejection?",
        "Describe a deal you lost and what you learned.",
        "What’s your approach to inbound vs outbound sales?",
        "How do you research a new client?",
        "How do you prioritize your sales pipeline?",
        "What motivates you in sales?"
      ],
      "Electrician": [
        "Describe your experience with wiring installations.",
        "How do you handle live circuits safely?",
        "What testing equipment do you use?",
        "How do you troubleshoot circuit faults?",
        "What safety protocols do you follow?",
        "How do you interpret wiring diagrams?",
        "Describe a time you worked under pressure.",
        "What certifications do you hold?",
        "How do you explain electrical issues to non-experts?",
        "How do you stay current on code regulations?",
        "What’s your approach to preventative maintenance?",
        "Describe how you install breaker panels.",
        "How do you work with contractors on site?",
        "What’s your experience with industrial wiring?",
        "How do you ensure quality assurance?",
        "How do you document work completed?",
        "What challenges have you faced in underground cabling?",
        "How do you plan for unexpected outages?",
        "How do you manage your tools and materials?",
        "Describe your process for testing continuity."
      ],
      "Content Writer": [
        "How do you research topics you’re unfamiliar with?",
        "What’s your writing process like?",
        "How do you balance tone and professionalism?",
        "How do you optimize for SEO?",
        "What’s your experience with long-form content?",
        "How do you work with editors?",
        "How do you handle revisions from clients?",
        "What tools do you use for writing and editing?",
        "Describe your experience with content calendars.",
        "How do you measure content success?",
        "What’s your approach to storytelling?",
        "How do you write for a brand voice?",
        "How do you handle writer’s block?",
        "Describe how you repurpose content across platforms.",
        "What’s the difference between copy and content?",
        "How do you write headlines that convert?",
        "What’s your approach to grammar and proofreading?",
        "How do you stay consistent with publishing schedules?",
        "What’s your favorite type of content to write?",
        "How do you stay current on industry trends?"
      ]    
  };
  
  export default questionBank;
  
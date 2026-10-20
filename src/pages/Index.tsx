import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, ExternalLink,
  Github, Linkedin, Mail, MapPin, Menu, Send, X,
} from "lucide-react";
import cybercrimeGraph1 from "@/assets/cybercrime-graph1.jpg";
import cybercrimeGraph2 from "@/assets/cybercrime-graph2.jpg";
import cybercrimeGraph3 from "@/assets/cybercrime-graph3.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import retailModelComparison from "@/assets/retail-model-comparison.png";
import retailWorkflow from "@/assets/retail-workflow.png";

const projects = [
  {
    slug: "finsight", number: "01", title: "FinSight AI",
    subtitle: "Financial research with evidence paths",
    date: "2026", category: "APPLIED AI · LLM SYSTEMS",
    summary: "A financial research assistant that routes questions to indexed SEC filing evidence, market-data tools, or both, then checks the answer against the evidence it collected.",
    repo: "https://github.com/Kushalraju098/FinSight_AI",
    demo: "https://finsight-backend-626144383400.northamerica-northeast2.run.app/docs",
    demoLabel: "API docs (deployment listed in repo)",
    tags: ["Python", "FastAPI", "LangGraph", "RAG", "Pinecone", "MCP", "Streamlit", "Docker", "Google Cloud Run"],
    proof: ["FastAPI /chat API", "RAG + MCP routing", "SEC filing corpus"],
    problem: "Financial research questions often mix reported historical facts with live market information. Using one source for both makes it easy to give a stale price or an unsupported filing claim.",
    contribution: "I built the request path and workflow that classifies a question, gathers filing and/or market evidence, synthesizes a response, and applies input and output checks before returning it.",
    approach: "The Streamlit interface calls a Pydantic-validated FastAPI endpoint. An input pipeline redacts selected PII and runs a prompt-injection classifier. LangGraph routes to retrieval, MCP tools, or both. The synthesis step uses the collected evidence; output checks sanitize and score grounding before the answer is returned.",
    results: "The repository includes a working application path, SEC filing samples and an evaluation dataset with an evaluator script. There is no published aggregate evaluation score, so I do not claim a measured answer-quality result.",
    limits: "Filing answers depend on what has already been indexed in Pinecone; the repo contains sample filings and an HTML loader, while a scheduled, continuously refreshed SEC ingestion service is not evidenced. Model providers, Pinecone credentials, and upstream market data are external dependencies. The Cloud Run API URL is documented in the repo, but its current availability was not confirmed during this review.",
    learning: "Keep evidence provenance visible across every route. A grounding check is a useful safeguard, but it cannot guarantee that retrieved evidence is complete or correct.",
    flow: ["Streamlit chat", "FastAPI /chat", "Input checks", "LangGraph router"],
    branchOne: "RAG: query analysis → embeddings → Pinecone filing retrieval",
    branchTwo: "MCP: stock price · historical prices · company news",
    flowEnd: "Evidence synthesis → output grounding checks → answer",
    implementation: [
      { level: "IMPLEMENTED", title: "Application workflow", detail: "FastAPI /chat, Pydantic request validation, LangGraph RAG/MCP routing, Pinecone retrieval, market-data MCP tools, input checks and output grounding evaluation are present in source." },
      { level: "PARTIAL", title: "SEC ingestion and evaluation", detail: "A filing HTML loader, ingestion notebook, sample filings and evaluation dataset/script are present. The runtime relies on a populated Pinecone index; no scheduled refresh or aggregate evaluation score is published." },
      { level: "DOCUMENTED, NOT LIVE-VERIFIED", title: "Cloud Run deployment", detail: "The README documents separate Cloud Run services and links the API docs. Current endpoint availability was not confirmed during this rebuild." },
      { level: "NEXT, NOT IMPLEMENTED", title: "Further verification", detail: "Automated filing refresh, a repeatable scored evaluation report and an independent live deployment check remain future work." },
    ],
  },
  {
    slug: "aisle-analytics", number: "02", title: "Aisle Analytics",
    subtitle: "AI-Powered Retail Analytics & Inventory Optimization",
    date: "JAN 2026", category: "MACHINE LEARNING · BI · AUTOMATION",
    summary: "An automated retail analytics workflow that turns Instacart order-product data into reorder predictions, inventory tiers and manager-ready reporting.",
    repo: "https://github.com/Kushalraju098/AI-Powered-Retail-Analytics-and-Inventory-Optimization-System-using-N8n",
    demo: "https://github.com/Kushalraju098/AI-Powered-Retail-Analytics-and-Inventory-Optimization-System-using-N8n/blob/main/PowerBI_report/Updated_Dashboard.pdf",
    demoLabel: "Power BI dashboard export",
    tags: ["Python", "Pandas", "XGBoost", "Flask", "n8n", "Google Colab", "Gemini", "Power BI"],
    proof: ["32M+ records", "0.790 AUC-ROC", "69% reorder recall"],
    problem: "The project targets a weekly retail reporting workflow described as taking three to four hours of manual spreadsheet work, with inventory decisions made reactively and without a reorder classifier.",
    contribution: "I assembled the cleaning, feature, model, inventory-scoring and reporting workflow, then connected the Colab pipeline to n8n through Flask/ngrok endpoints. The repository includes the notebook, exported n8n workflow, dashboard PDF and output charts.",
    approach: "An eight-step cleaning workflow handles missing values, duplicates, range checks and IQR-based outliers. The supplied resume reports modeling across 12.4M user-product pairs. A weighted priority score combines normalized demand, historical reorder rate and average predicted reorder probability, then assigns High, Medium or Low tiers. n8n coordinates the run, while Gemini drafts plain-English action bullets for an email report and Power BI presents the results.",
    results: "The project README and supplied resume report 32M+ order-product records processed in about 20 minutes, XGBoost AUC-ROC of 0.790 and reorder recall of 69%, compared with 15.9% recall for the logistic-regression baseline. These are reported project results; I did not rerun the full data pipeline for this portfolio rebuild.",
    limits: "The dataset is an Instacart benchmark, so predicted customer reorders are a proxy for store-level demand rather than a direct stockout forecast. The workflow depends on a live Colab session, an ngrok tunnel and user-configured Gmail/Gemini credentials; it is not presented as a continuously deployed retail service. The dashboard PDF is an export, not a live Power BI workspace.",
    learning: "A classifier is more useful to inventory planning when its output is combined with a transparent business score and surfaced with a clear action. The baseline's high accuracy hid its poor recall on the reorder class.",
    flow: ["Instacart CSVs", "Clean + validate", "Feature engineering", "XGBoost classifier"],
    branchOne: "Model output: reorder probabilities + evaluation metrics",
    branchTwo: "Inventory score: demand + reorder rate + predicted probability",
    flowEnd: "n8n → Power BI + Gemini action summary → email",
    image: retailModelComparison,
    imageAlt: "Project chart comparing logistic regression and XGBoost on accuracy, AUC-ROC and reorder recall.",
    workflowImage: retailWorkflow,
    workflowAlt: "Exported n8n workflow diagram for the retail analytics pipeline.",
  },
  {
    slug: "cybercrime", number: "03", title: "CyberCrime Trends Analysis in Canada",
    subtitle: "National and provincial trends, 2015–2024",
    date: "NOV 2025", category: "DATA ANALYTICS · DATA STORYTELLING",
    summary: "A descriptive analysis of Canadian cybercrime data across a decade, reshaped in R and presented through Power BI and embedded R visuals.",
    repo: "https://github.com/Kushalraju098/cybercrime-analysis-canada",
    demo: "https://github.com/Kushalraju098/cybercrime-analysis-canada",
    demoLabel: "Repository and project visuals",
    tags: ["R", "tidyverse", "ggplot2", "Power BI", "DAX", "Excel", "GitHub"],
    proof: ["Statistics Canada data", "2015–2024", "Descriptive analysis"],
    problem: "Cybercrime tables from different CSV sources use inconsistent layouts and formats. The work brings national totals, categories and provincial views into a consistent shape for trend analysis.",
    contribution: "I integrated and cleaned the supplied Statistics Canada datasets, reshaped the wide tables with tidyverse and pivot_longer, calculated year-over-year changes, and built a dashboard with DAX measures and R visuals.",
    approach: "The workflow standardizes fields and missing values, reshapes province and category data, then compares annual totals and year-over-year change. The dashboard pairs the time series with category and provincial views so readers can inspect changes by geography and type.",
    results: "The repository summary reports that total violations more than tripled over the period, with fraud a leading category and Ontario, British Columbia and Alberta accounting for the largest provincial contributions. These are descriptive findings from the project; no predictive model is claimed.",
    limits: "The findings depend on the source data's definitions and reporting practices. The project notes that a slight 2024 decline may reflect stabilization or changes in reporting; per-capita analysis and predictive modeling are listed as future enhancements, not completed work.",
    learning: "Clear source definitions and consistent year-to-year comparisons matter as much as chart choice when a dashboard is used to discuss public-safety trends.",
    flow: ["Statistics Canada CSVs", "R: clean + reshape", "Trend + YoY analysis", "Power BI + R visuals"],
    branchOne: "National totals and annual growth",
    branchTwo: "Cybercrime categories and provincial distribution",
    flowEnd: "Dashboard views → descriptive findings → resource discussion",
    images: [
      { src: cybercrimeGraph1, alt: "Canadian cybercrime totals and year-over-year percentage change from 2015 to 2024." },
      { src: cybercrimeGraph2, alt: "Trends across major cybercrime types." },
      { src: cybercrimeGraph3, alt: "Cybercrime incidents and share by province." },
    ],
  },
];

const skillGroups = [
  { title: "Programming & analytics", skills: ["Python", "SQL / MySQL", "R", "Pandas", "NumPy", "Statistics", "Data cleaning", "EDA", "Excel", "Power BI", "DAX", "Power Query", "tidyverse", "ggplot2", "IBM Cognos Analytics", "SAS Viya", "SPSS"], evidence: ["Python", "SQL / MySQL", "R", "Pandas", "Data cleaning", "EDA", "Excel", "Power BI", "DAX", "tidyverse", "ggplot2"] },
  { title: "Machine learning", skills: ["scikit-learn", "Regression", "Classification", "Decision Trees", "Random Forest", "XGBoost", "KNN", "Naive Bayes", "K-Means", "PCA", "Model evaluation", "Cross-validation"], evidence: ["XGBoost", "Classification", "Model evaluation"] },
  { title: "Deep learning & NLP", skills: ["TensorFlow", "Keras", "CNN", "RNN", "LSTM", "Text preprocessing", "TF-IDF", "Bag of Words", "Word2Vec", "Sentiment analysis", "NER", "NLTK", "spaCy", "Text clustering", "Sentence Transformers"], evidence: ["Sentence Transformers"] },
  { title: "Generative AI", skills: ["RAG", "Embeddings", "Vector retrieval", "LangChain", "LangGraph", "LlamaIndex", "Hugging Face", "AI agents", "Tool calling", "MCP", "Prompt engineering", "LLM evaluation", "Guardrails"], evidence: ["RAG", "Embeddings", "Vector retrieval", "LangChain", "LangGraph", "MCP", "Prompt engineering", "LLM evaluation", "Guardrails"] },
  { title: "Backend & integrations", skills: ["FastAPI", "Flask", "REST APIs", "Pydantic", "External API integration", "Request validation"], evidence: ["FastAPI", "Flask", "REST APIs", "Pydantic", "External API integration", "Request validation"] },
  { title: "Automation & software quality", skills: ["Selenium", "Pytest", "Robot Framework", "Jenkins", "Git", "GitHub", "Jira", "Agile / Scrum", "CI/CD"], evidence: ["Selenium", "Pytest", "Robot Framework", "Jenkins", "Git", "GitHub", "Jira", "Agile / Scrum", "CI/CD"] },
  { title: "Cloud & infrastructure", skills: ["Microsoft Azure", "Google Cloud Platform", "Docker", "Databricks", "Cloud Run", "Artifact Registry", "Secret Manager"], evidence: ["Google Cloud Platform", "Docker", "Cloud Run"] },
];

const experience = [
  {
    role: "Business & Data Analytics Intern", org: "United City Cartage Ltd.", place: "Mississauga, Ontario", date: "APR 2026 — JUN 2026",
    bullets: [
      "Built a Python PDF extraction pipeline for load-tender information using regex parsing and multi-pass address matching.",
      "Used RapidFuzz at a 95% threshold to map locations to ERP address IDs; collected Samsara fleet API data and identified duplicate truck records.",
      "Built Selenium automation that reduced a recurring task from about 30 minutes to under 10 minutes; created pivot-table summaries.",
      "Supported digitizing manual Excel processes in a web ERP, translated workflows into functional requirements, and performed functional testing and defect reporting.",
    ],
  },
  {
    role: "Quality Assurance Analyst", org: "Publicis Sapient", place: "Bangalore, India", date: "MAY 2022 — AUG 2023",
    bullets: [
      "Used SQL and Python to validate financial data supporting investment-portfolio dashboards and reporting.",
      "Developed Python and Robot Framework automation, with a reported 40% reduction in manual testing effort.",
      "Performed regression testing, documented defects in Jira, and collaborated with developers and business analysts in Agile delivery.",
    ],
  },
  {
    role: "Software Associate", org: "Promaestro Techsource Pvt Ltd", place: "Hyderabad, India", date: "JAN 2020 — MAY 2022",
    bullets: [
      "Automated test cases with Python and Pytest and validated user interfaces with Selenium WebDriver.",
      "Integrated test workflows into Jenkins CI/CD, with a reported 30% reduction in deployment time.",
    ],
  },
];

const education = [
  { qualification: "Postgraduate Diploma, Business Insights and Analytics", institution: "Humber Polytechnic", place: "Toronto, Ontario", dates: "2024–2026" },
  { qualification: "Bachelor of Technology, Computer Science", institution: "Reva University", place: "Bangalore, India", dates: "2016–2020" },
];

const certifications = [
  { title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate", code: "AI-103", provider: "Microsoft", badge: "associate", href: "https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/9d17e0e59b05f52e?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { title: "Microsoft Certified: Azure Data Fundamentals", code: "DP-900", provider: "Microsoft", badge: "fundamentals", href: "https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/6ef7e3420ba11230" },
  { title: "Microsoft Certified: Azure AI Fundamentals", code: "AI-900", provider: "Microsoft", badge: "fundamentals", href: "https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/b2426d4d0678c506" },
  { title: "Data Analyst in Power BI", code: "DATACAMP", provider: "DataCamp", href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/507b5349fb62a309d27ae8ad064c59b5cbb9cf35?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Email is too long."),
  subject: z.string().trim().min(1, "Please add a subject.").max(150, "Subject must be under 150 characters."),
  message: z.string().trim().min(1, "Please write a message.").max(2000, "Message must be under 2,000 characters."),
});

// EmailJS browser configuration uses a public client key; never place a private provider secret here.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_q53h2bd";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_r67ae8a";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "y_xSGZb4oiDgAI720";
const isEmailConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

function ProjectCaseStudy({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className="case-study" aria-labelledby={"case-title-" + project.slug}>
      <div className="case-heading">
        <div className="case-kicker"><span>{project.number} / CASE STUDY</span><span>{project.date}</span></div>
        <div className="case-title-row">
          <div><p className="eyebrow">{project.category}</p><h3 id={"case-title-" + project.slug}>{project.title}</h3><p className="case-subtitle">{project.subtitle}</p></div>
          <div className="case-links">
            <a href={project.repo} target="_blank" rel="noreferrer">Source <Github size={15} aria-hidden="true" /></a>
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel} <ExternalLink size={15} aria-hidden="true" /></a>}
          </div>
        </div>
        <p className="case-summary">{project.summary}</p>
        <div className="metric-row" aria-label="Project evidence">
          {project.proof.map((item) => <span key={item}><Check size={14} aria-hidden="true" />{item}</span>)}
        </div>
      </div>
      <div className="case-body">
        <div className="case-copy">
          <div className="case-section"><h4>Problem</h4><p>{project.problem}</p></div>
          <div className="case-section"><h4>My contribution</h4><p>{project.contribution}</p></div>
          <div className="case-section"><h4>Technical approach</h4><p>{project.approach}</p></div>
          <div className="case-section"><h4>Results</h4><p>{project.results}</p></div>
        </div>
        <aside className="case-aside">
          <div className="aside-block"><h4>Stack</h4><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <div className="aside-block"><h4>Limitations</h4><p>{project.limits}</p></div>
          <div className="aside-block"><h4>What I learned</h4><p>{project.learning}</p></div>
        </aside>
      </div>
      {project.implementation && <section className="implementation-block" aria-label="Implementation status"><div className="implementation-heading"><p className="eyebrow">IMPLEMENTATION STATUS</p><h4>What the repository supports</h4></div><div className="implementation-grid">{project.implementation.map((item) => <article className="implementation-item" key={item.title}><span>{item.level}</span><h5>{item.title}</h5><p>{item.detail}</p></article>)}</div></section>}
      <div className="workflow-block">
        <div className="workflow-heading"><div><p className="eyebrow">SYSTEM VIEW</p><h4>{index === 0 ? "Evidence-first research flow" : index === 1 ? "From order history to store action" : "From source tables to insight"}</h4></div><span>Based on repository implementation</span></div>
        <div className="flow-line">{project.flow.map((step, i) => <span className="flow-step" key={step}>{i > 0 && <ArrowRight size={15} aria-hidden="true" />}{step}</span>)}</div>
        <div className="flow-branches"><div><span className="branch-label">PATH A</span>{project.branchOne}</div><div><span className="branch-label">PATH B</span>{project.branchTwo}</div></div>
        <div className="flow-result"><ArrowDown size={15} aria-hidden="true" />{project.flowEnd}</div>
      </div>
      {project.image && <div className="project-visual"><img src={project.image} alt={project.imageAlt} loading="lazy" /><p>Model comparison figure included in the project repository.</p></div>}
      {project.workflowImage && <figure className="project-visual project-visual-small"><img src={project.workflowImage} alt={project.workflowAlt} loading="lazy" /><figcaption>n8n workflow export from the project repository. Provider credentials must be configured in an n8n instance.</figcaption></figure>}
      {project.images && <div className="cyber-visuals">{project.images.map((image) => <figure key={image.alt}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.alt}</figcaption></figure>)}</div>}
    </article>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [statusIsError, setStatusIsError] = useState(false);

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      setStatusIsError(true);
      setFormStatus(parsed.error.issues[0]?.message || "Please check the form fields.");
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatusIsError(true);
      setFormStatus("The contact form is not configured. Please email kushalraju098@gmail.com directly.");
      return;
    }
    setIsSending(true);
    setStatusIsError(false);
    setFormStatus("Sending your message…");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: parsed.data.name,
        from_email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
        to_name: "Kushal Pathapati",
      }, EMAILJS_PUBLIC_KEY);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus("Message sent. Thank you for reaching out.");
    } catch {
      setStatusIsError(true);
      setFormStatus("The message could not be sent. Please email kushalraju098@gmail.com directly.");
    } finally {
      setIsSending(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Kushal Pathapati, home"><span className="brand-mark">KP</span><span>Kushal Pathapati</span></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          <div className={menuOpen ? "nav-links is-open" : "nav-links"} id="primary-nav">
            {["Work", "About", "Skills", "Experience", "Education", "Certifications", "Contact"].map((item) => <a href={item === "Work" ? "#projects" : "#" + item.toLowerCase()} key={item} onClick={closeMenu}>{item}</a>)}
            <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="availability"><span className="availability-dot" /> TORONTO, CANADA <span className="availability-sep">·</span> OPEN TO OPPORTUNITIES</div>
              <p className="hero-overline">AI / ML ENGINEERING · DATA ANALYTICS</p>
              <h1 id="hero-title">Building with data.<br /><span>Solving with AI.</span></h1>
              <p className="hero-lede">I’m Kushal Pathapati. I turn data into useful analysis and build practical AI applications, with a quality-first foundation from software testing.</p>
              <div className="role-pills" aria-label="Target roles"><span>AI / ML Engineer</span><span>Data Analyst</span></div>
              <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowDown size={16} aria-hidden="true" /></a><a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={15} aria-hidden="true" /></a><a className="resume-link" href="#contact">Contact me <ArrowRight size={15} aria-hidden="true" /></a></div>
            </div>
            <figure className="hero-profile"><img src={profilePhoto} alt="Kushal Pathapati" fetchPriority="high" /><figcaption className="profile-caption"><span className="profile-location"><MapPin size={14} aria-hidden="true" /> Toronto, Ontario</span><span className="profile-note-label">FOCUS AREAS</span><span className="profile-focus">Applied AI <i>·</i> Machine learning <i>·</i> Data analytics</span></figcaption></figure>
          </div>
        </section>

        <section className="intro section-pad" id="about" aria-labelledby="about-title">
          <div className="section-heading"><div><p className="eyebrow">ABOUT</p><h2 id="about-title">A quality mindset, applied to <span>AI and data.</span></h2></div><div className="intro-copy"><p>My work sits between analytics, machine learning and practical AI. I bring experience validating financial data and automating tests, alongside project work in retail analytics, Canadian cybercrime trends and LLM applications.</p><p>I care about useful outcomes, sound data, and systems that make their reasoning and limits clear.</p></div></div>
        </section>

        <section className="skills section-pad" id="skills" aria-labelledby="skills-title">
          <div className="section-heading"><div><p className="eyebrow">TECHNICAL SKILLS</p><h2 id="skills-title">A broad toolkit, <span>clearly grouped.</span></h2></div><p>Blue tags appear in my projects or work; the remaining tags represent my broader toolkit and study.</p></div>
          <div className="skills-grid">{skillGroups.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-heading"><span className="skill-index">0{i + 1}</span><h3>{group.title}</h3></div><ul className="skill-tags" aria-label={group.title + " skills"}>{group.skills.map((skill) => <li className={group.evidence.includes(skill) ? "skill-tag is-evidenced" : "skill-tag"} key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="projects-title">
          <div className="section-heading projects-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2 id="projects-title">Evidence in <span>every project.</span></h2></div><p>Three projects across applied AI, predictive analytics and public data. Open a case study for the details.</p></div>
          <div className="project-cards">
            {projects.map((project) => <article className={`project-card project-${project.slug}`} key={project.slug}>
              <div className="project-art" aria-hidden="true">{project.slug === "finsight" ? <div className="mini-architecture"><span>QUESTION</span><i /><span>RAG <b>·</b> MCP</span><i /><span>EVIDENCE</span></div> : project.slug === "aisle-analytics" ? <img src={retailWorkflow} alt="" loading="lazy" /> : <img src={cybercrimeGraph1} alt="" loading="lazy" />}</div>
              <div className="project-card-content"><div className="project-card-top"><span>{project.category}</span><span>{project.date}</span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-summary">{project.summary}</p><div className="project-metrics">{project.proof.map((metric) => <span key={metric}>{metric}</span>)}</div><div className="project-card-links"><a href={`#case-study-${project.slug}`} onClick={() => { const detail = document.getElementById(`case-study-${project.slug}`); if (detail instanceof HTMLDetailsElement) detail.open = true; }}>Read case study <ArrowDown size={15} aria-hidden="true" /></a><a href={project.repo} target="_blank" rel="noreferrer" aria-label={project.title + " source code on GitHub"}>GitHub <ExternalLink size={14} aria-hidden="true" /></a></div></div>
            </article>)}
          </div>
          <div className="case-studies">{projects.map((project, index) => <details className="case-study-disclosure" id={`case-study-${project.slug}`} key={project.slug}><summary><span>{project.number}</span><strong>{project.title}</strong><span>Open case study</span><ChevronDown size={17} aria-hidden="true" /></summary><ProjectCaseStudy project={project} index={index} /></details>)}</div>
          <a className="more-github" href="https://github.com/Kushalraju098" target="_blank" rel="noreferrer">See all public repositories <ArrowUpRight size={16} aria-hidden="true" /></a>
        </section>

        <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><div><p className="eyebrow">EXPERIENCE</p><h2 id="experience-title">From software quality to <span>analytics.</span></h2></div><p>Professional experience across data validation, automation and business systems.</p></div>
          <div className="timeline">{experience.map((job) => <article className="job" key={job.org}><div className="job-date">{job.date}</div><div className="job-detail"><div className="job-title-row"><div><h3>{job.role}</h3><p>{job.org} <span>·</span> {job.place}</p></div></div><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="education section-pad" id="education" aria-labelledby="education-title">
          <div className="education-grid"><div><p className="eyebrow">EDUCATION</p><h2 id="education-title">Building a strong <span>foundation.</span></h2><div className="education-list">{education.map((item) => <article className="education-item" key={item.institution}><div><h3>{item.qualification}</h3><p>{item.institution} <span>·</span> {item.place}</p></div><span className="education-date">{item.dates}</span></article>)}</div><p className="education-note">Dates are listed as provided. No completion status is implied for the postgraduate diploma.</p></div></div>
        </section>

        <section className="certifications-section section-pad" id="certifications" aria-labelledby="certifications-title">
          <div className="section-heading"><div><p className="eyebrow">CERTIFICATIONS</p><h2 id="certifications-title">Credentials for <span>AI and data.</span></h2></div><p>Professional learning across Microsoft Azure AI, data fundamentals and Power BI.</p></div>
          <div className="credential-list">{certifications.map((cert) => <article className="credential" key={cert.code}><div className="credential-mark" aria-hidden="true">{cert.provider === "Microsoft" ? <img className="microsoft-cert-badge" src={`/microsoft-certified-${cert.badge}-badge.svg`} alt="" /> : <img className="datacamp-logomark" src="/datacamp-logomark.svg" alt="" />}</div><div className="credential-details"><span className="credential-provider">{cert.provider} <b>·</b> {cert.code}</span><strong>{cert.title}</strong></div><a className="credential-link" href={cert.href} target="_blank" rel="noreferrer" aria-label={"View credential: " + cert.title}><ExternalLink size={16} aria-hidden="true" /></a></article>)}</div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid"><div className="contact-copy"><p className="eyebrow">CONTACT</p><h2 id="contact-title">Let’s build something <span>useful.</span></h2><p>I’m open to AI/ML engineering and data opportunities, and conversations about practical AI, analytics and automation.</p><a className="contact-email" href="mailto:kushalraju098@gmail.com"><Mail size={16} aria-hidden="true" /> kushalraju098@gmail.com <ArrowUpRight size={15} aria-hidden="true" /></a><div className="social-links"><a href="https://github.com/Kushalraju098" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ExternalLink size={12} aria-hidden="true" /></a><a href="https://linkedin.com/in/kushalpathapati" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ExternalLink size={12} aria-hidden="true" /></a></div><p className="contact-location"><MapPin size={14} aria-hidden="true" /> Toronto, Ontario, Canada</p></div>
            <form className="contact-form" onSubmit={submitContact} noValidate>
              <div className="form-row"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required maxLength={100} /></div>
              <div className="form-row"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required maxLength={255} /></div>
              <div className="form-row"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} required maxLength={150} /></div>
              <div className="form-row"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={4} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} required maxLength={2000} /></div>
              <div className="form-submit-row"><button className="button button-dark" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send message"} <Send size={15} aria-hidden="true" /></button><p className={statusIsError ? "form-status is-error" : "form-status"} aria-live="polite" role="status">{formStatus}</p></div>
              <p className="form-note">The form uses the existing EmailJS integration. If delivery fails, use the email link.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">KP</span><span>Kushal Pathapati</span></a><span>AI / ML · DATA · ANALYTICS</span><a className="back-top" href="#home">Back to top <ChevronDown size={14} aria-hidden="true" /></a><span className="copyright">© {new Date().getFullYear()} Kushal Pathapati</span></footer>
    </div>
  );
}

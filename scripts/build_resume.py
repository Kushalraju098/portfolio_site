from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
INK = colors.HexColor("#17251f")
GREEN = colors.HexColor("#275a42")
ORANGE = colors.HexColor("#d56b45")
MUTED = colors.HexColor("#65716b")
LINE = colors.HexColor("#d8ddd6")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="Name", fontName="Helvetica-Bold", fontSize=24, leading=27,
    textColor=INK, spaceAfter=2, alignment=TA_LEFT,
))
styles.add(ParagraphStyle(
    name="Headline", fontName="Helvetica", fontSize=10, leading=14,
    textColor=GREEN, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="Contact", fontName="Helvetica", fontSize=8, leading=11,
    textColor=MUTED, alignment=TA_RIGHT,
))
styles.add(ParagraphStyle(
    name="Section", fontName="Helvetica-Bold", fontSize=10, leading=13,
    textColor=GREEN, spaceBefore=8, spaceAfter=5, uppercase=True,
))
styles.add(ParagraphStyle(
    name="Role", fontName="Helvetica-Bold", fontSize=9.2, leading=12,
    textColor=INK, spaceAfter=1,
))
styles.add(ParagraphStyle(
    name="Meta", fontName="Helvetica", fontSize=7.8, leading=10,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="BodySmall", fontName="Helvetica", fontSize=8.25, leading=11.2,
    textColor=INK, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="BulletSmall", fontName="Helvetica", fontSize=8.1, leading=10.7,
    textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Skill", fontName="Helvetica", fontSize=7.7, leading=10.4,
    textColor=INK, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="Project", fontName="Helvetica-Bold", fontSize=9, leading=11.5,
    textColor=INK, spaceAfter=2,
))
styles.add(ParagraphStyle(
    name="Footer", fontName="Helvetica", fontSize=7, leading=8,
    textColor=MUTED, alignment=TA_RIGHT,
))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.47 * inch, letter[0] - doc.rightMargin, 0.47 * inch)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.3 * inch, "Kushal Pathapati  |  Applied AI, analytics and software quality")
    canvas.drawRightString(letter[0] - doc.rightMargin, 0.3 * inch, "Page " + str(doc.page))
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUTPUT), pagesize=letter, leftMargin=0.68 * inch,
    rightMargin=0.68 * inch, topMargin=0.5 * inch, bottomMargin=0.63 * inch,
    title="Kushal Pathapati - Resume", author="Kushal Pathapati",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=footer)])

story = []
contact = Paragraph(
    '<link href="mailto:kushalraju098@gmail.com" color="#275a42">kushalraju098@gmail.com</link><br/>'
    '(647) 960-1929<br/>Toronto, Ontario<br/>'
    '<link href="https://linkedin.com/in/kushalpathapati" color="#275a42">LinkedIn / Kushal Pathapati</link><br/>'
    '<link href="https://github.com/Kushalraju098" color="#275a42">GitHub / Kushalraju098</link>',
    styles["Contact"],
)
head = Table([
    [Paragraph("KUSHAL PATHAPATI", styles["Name"]), contact],
    [Paragraph("APPLIED AI  |  LLM SYSTEMS  |  DATA ANALYTICS", styles["Headline"]), ""],
], colWidths=[4.55 * inch, 2.05 * inch])
head.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("ALIGN", (1, 0), (1, 0), "RIGHT"),
    ("SPAN", (0, 1), (1, 1)),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
]))
story.extend([head, Spacer(1, 4), Table([['']], colWidths=[6.6 * inch], rowHeights=[1], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), LINE)]))])

story.append(Paragraph("PROFILE", styles["Section"]))
story.append(Paragraph(
    "Software quality and business analytics professional with more than three years of experience across test automation, financial data validation and analytics. Builds Python data workflows, machine learning projects and LLM applications with attention to input validation, traceable evidence and reliable handoffs.",
    styles["BodySmall"],
))

story.append(Paragraph("EXPERIENCE", styles["Section"]))


def add_job(role, company, location, dates, bullets):
    title = Table([[Paragraph(role, styles["Role"]), Paragraph(dates, ParagraphStyle(
        name="date" + str(len(story)), parent=styles["Meta"], alignment=TA_RIGHT,
    ))]], colWidths=[4.9 * inch, 1.7 * inch])
    title.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(title)
    story.append(Paragraph(company + "  |  " + location, styles["Meta"]))
    for bullet in bullets:
        story.append(Paragraph("<font color='#d56b45'>•</font> " + bullet, styles["BulletSmall"]))
    story.append(Spacer(1, 3))


add_job("Business & Data Analytics Intern", "United City Cartage Ltd.", "Mississauga, Ontario", "APR 2026 - JUN 2026", [
    "Built a Python PDF extraction pipeline for load-tender information using regex parsing and multi-pass address matching.",
    "Used RapidFuzz at a 95% threshold to map locations to ERP address IDs; collected Samsara fleet API data and identified duplicate truck records.",
    "Built Selenium automation that reduced a recurring task from about 30 minutes to under 10 minutes; prepared pivot-table summaries.",
    "Supported digitizing manual Excel workflows in a web ERP, translated processes into functional requirements, and performed functional testing and defect reporting.",
])
add_job("Quality Assurance Analyst", "Publicis Sapient", "Bangalore, India", "MAY 2022 - AUG 2023", [
    "Used SQL and Python to validate financial data supporting investment-portfolio dashboards and reporting.",
    "Developed Python and Robot Framework automation, with a reported 40% reduction in manual testing effort.",
    "Performed regression testing, documented defects in Jira, and collaborated with developers and business analysts in an Agile environment.",
])
add_job("Software Associate", "Promaestro Techsource Pvt Ltd", "Hyderabad, India", "JAN 2020 - MAY 2022", [
    "Automated test cases with Python and Pytest and validated user interfaces with Selenium WebDriver.",
    "Integrated test workflows into Jenkins CI/CD, with a reported 30% reduction in deployment time.",
])

story.append(Paragraph("TECHNICAL SKILLS", styles["Section"]))
skill_lines = [
    ("Programming and analytics", "Python, SQL/MySQL, R, Pandas, NumPy, statistics, data cleaning, EDA, Excel, Power BI, DAX, Power Query, tidyverse, ggplot2, IBM Cognos Analytics, SAS Viya, SPSS"),
    ("Machine learning", "scikit-learn, regression, classification, Decision Trees, Random Forest, XGBoost, KNN, Naive Bayes, K-Means, PCA, model evaluation, cross-validation"),
    ("Deep learning and NLP", "TensorFlow, Keras, CNN, RNN, LSTM, text preprocessing, TF-IDF, Bag of Words, Word2Vec, sentiment analysis, NER, NLTK, spaCy, text clustering"),
    ("Generative AI", "RAG, embeddings, vector retrieval, LangChain, LangGraph, LlamaIndex, Hugging Face, AI agents, tool calling, MCP, prompt engineering, LLM evaluation, guardrails"),
    ("Backend, quality and delivery", "FastAPI, Flask, REST APIs, Pydantic, external API integration, request validation, Selenium, Pytest, Robot Framework, Jenkins, Git, GitHub, Jira, Agile/Scrum, CI/CD"),
    ("Cloud and infrastructure", "Microsoft Azure, Google Cloud Platform, Docker, Databricks, Cloud Run. Artifact Registry and Secret Manager are not listed as hands-on project evidence."),
]
for label, values in skill_lines:
    story.append(Paragraph("<b><font color='#275a42'>" + label + ":</font></b> " + values, styles["Skill"]))

story.append(PageBreak())
story.append(Paragraph("SELECTED PROJECTS", styles["Section"]))

def add_project(title, date, details):
    row = Table([[Paragraph(title, styles["Project"]), Paragraph(date, ParagraphStyle(
        name="projectdate" + str(len(story)), parent=styles["Meta"], alignment=TA_RIGHT,
    ))]], colWidths=[4.85 * inch, 1.75 * inch])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(row)
    for detail in details:
        story.append(Paragraph("<font color='#d56b45'>•</font> " + detail, styles["BulletSmall"]))
    story.append(Spacer(1, 5))


add_project("FinSight AI - Financial Research Assistant", "2026", [
    "Built a Streamlit and FastAPI application using LangGraph to route questions to SEC-filing RAG, MCP market tools or both. The stack includes Pinecone retrieval, Sentence Transformers embeddings, Groq synthesis, and input and output checks.",
    "Created an SEC HTML loader and a notebook ingestion path for chunking and embedding filing content; retrieval filters indexed evidence by company and filing year. MCP tools cover stock prices, price history and company news.",
    "Input checks combine selected PII redaction and a prompt-injection classifier; output checks evaluate claims against retrieved evidence. The repo includes an evaluation dataset and evaluator script, with no published aggregate score.",
    "Cloud Run deployment is described in the repository; current availability is not independently verified. Filing access depends on the indexed corpus and external provider configuration.",
])
add_project("Aisle Analytics - Retail Analytics & Inventory Optimization", "JAN 2026", [
    "Built a Python/Pandas workflow for 32M+ Instacart order-product records, including an eight-step cleaning process for missing values, duplicates, range checks and IQR-based outliers.",
    "The supplied resume reports an XGBoost reorder classifier across 12.4M user-product pairs. A weighted inventory score combines normalized demand (40%), historical reorder rate (30%) and average predicted reorder probability (30%) to create three stocking tiers.",
    "An n8n workflow export connects to Flask/ngrok endpoints for a Colab pipeline; outputs feed a Power BI dashboard and a Gemini-drafted email report. Live credentials and an active Colab session are required.",
    "Project README and supplied resume report 32M+ records processed in about 20 minutes, 0.790 AUC-ROC and 69% reorder recall versus 15.9% for the logistic-regression baseline. Metrics were not independently rerun for this resume.",
])
add_project("CyberCrime Trends Analysis in Canada", "NOV 2025", [
    "Integrated and cleaned Statistics Canada cybercrime data from 2015-2024, reshaped it with tidyverse, analyzed time series and year-over-year change, and built Power BI views with DAX and embedded R visuals.",
    "The project reports that total violations more than tripled during the period, fraud was a major and fast-growing category, and Ontario, British Columbia and Alberta were leading contributors. This is descriptive analysis, not predictive modeling.",
    "Population-adjusted analysis and forecasting are future enhancements rather than completed work; the findings depend on Statistics Canada definitions and reporting practices.",
])

story.append(Paragraph("EDUCATION", styles["Section"]))
story.append(Paragraph("<b>Postgraduate Diploma, Business Insights and Analytics</b>  |  Humber Polytechnic, Toronto, Ontario  |  2024-2026", styles["BodySmall"]))
story.append(Paragraph("<b>Bachelor of Technology, Computer Science</b>  |  Reva University, Bangalore, India  |  2016-2020", styles["BodySmall"]))
story.append(Paragraph("Dates are listed as provided; no completion status is implied for the postgraduate diploma.", styles["Meta"]))

story.append(Paragraph("CERTIFICATIONS", styles["Section"]))
story.append(Paragraph("Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)  |  Microsoft Certified: Azure Data Fundamentals (DP-900)  |  Microsoft Certified: Azure AI Fundamentals (AI-900)  |  DataCamp: Data Analyst in Power BI", styles["Skill"]))

doc.build(story)
print(OUTPUT)

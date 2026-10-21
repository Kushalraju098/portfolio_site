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
    [Paragraph("AI/ML ENGINEERING  |  DATA SCIENCE  |  LLM SYSTEMS", styles["Headline"]), ""],
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
    "AI and data professional with experience in software quality, financial-data validation and analytics. Builds Python data workflows and LLM applications with careful input validation, traceable evidence and reliable handoffs.",
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
    "Developed Python and Robot Framework automation, reducing manual testing effort by 40%.",
    "Performed regression testing, documented defects in Jira, and collaborated with developers and business analysts in an Agile environment.",
])
add_job("Software Associate", "Promaestro Techsource Pvt Ltd", "Hyderabad, India", "JAN 2020 - MAY 2022", [
    "Automated test cases with Python and Pytest and validated user interfaces with Selenium WebDriver.",
    "Integrated test workflows into Jenkins CI/CD, reducing deployment time by 30%.",
])

story.append(Paragraph("TECHNICAL SKILLS", styles["Section"]))
skill_lines = [
    ("Programming and analytics", "Python, SQL, Pandas, NumPy, R, Excel, Power BI, DAX"),
    ("Machine learning", "scikit-learn, XGBoost, regression, classification, model evaluation"),
    ("Deep learning and NLP", "TensorFlow, neural networks, transformers, NLP, text preprocessing"),
    ("Generative AI", "RAG, embeddings, LangChain, LangGraph, AI agents, MCP, LLM evaluation"),
    ("Backend and integrations", "FastAPI, Flask, REST APIs, Pydantic"),
    ("Automation and quality", "Selenium"),
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
    "I included seven QA cases and evaluation code for faithfulness, relevance and correctness. The compact set checks regressions; filing coverage and external model, vector-store and market-data credentials shape answer quality. Cloud Run may respond more slowly after idle periods.",
])
add_project("Aisle Analytics - Retail Analytics & Inventory Optimization", "JAN 2026", [
    "Built a Python/Pandas workflow for 32M+ Instacart order-product records, including an eight-step cleaning process for missing values, duplicates, range checks and IQR-based outliers.",
    "Trained an XGBoost reorder classifier across 12.4M user-product pairs. A weighted inventory score combines normalized demand (40%), historical reorder rate (30%) and predicted reorder probability (30%) to create three stocking tiers.",
    "An n8n workflow export connects to Flask/ngrok endpoints for a Colab pipeline; outputs feed a Power BI dashboard and a Gemini-drafted email report. The on-demand workflow needs an active Colab session and configured credentials.",
    "Processed 32M+ records in about 20 minutes. The model benchmark is 0.790 AUC-ROC and 69% reorder recall, compared with 15.9% recall for the logistic-regression baseline.",
])
add_project("CyberCrime Trends Analysis in Canada", "NOV 2025", [
    "Integrated and cleaned Statistics Canada cybercrime data from 2015-2024, reshaped it with tidyverse, analyzed time series and year-over-year change, and built Power BI views with DAX and embedded R visuals.",
    "The analysis found roughly 300% growth in total violations from 2015-2024, led by fraud, with Ontario, British Columbia and Alberta among the leading provincial contributors. This is descriptive analysis, not predictive modeling.",
    "The analysis follows Statistics Canada definitions and reporting practices; population-adjusted rates would support stronger provincial comparisons. Forecasting was outside the project scope.",
])

story.append(Paragraph("EDUCATION", styles["Section"]))
story.append(Paragraph("<b>Postgraduate Diploma, Business Insights and Analytics</b>  |  Humber Polytechnic, Toronto, Ontario  |  Completed 2026", styles["BodySmall"]))
story.append(Paragraph("<b>Bachelor of Technology, Computer Science</b>  |  Reva University, Bangalore, India  |  2016-2020", styles["BodySmall"]))

story.append(Paragraph("CERTIFICATIONS", styles["Section"]))
story.append(Paragraph('<link href="https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/9d17e0e59b05f52e?ref=https%3A%2F%2Fwww.linkedin.com%2F" color="#275a42"><b>Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)</b></link>', styles["Skill"]))
story.append(Paragraph("Microsoft Certified: Azure Data Fundamentals (DP-900)  |  Microsoft Certified: Azure AI Fundamentals (AI-900)", styles["Skill"]))
story.append(Paragraph('<link href="https://www.datacamp.com/completed/statement-of-accomplishment/track/507b5349fb62a309d27ae8ad064c59b5cbb9cf35?utm_medium=organic_social&amp;utm_campaign=sharewidget&amp;utm_content=soa" color="#275a42">DataCamp: Data Analyst in Power BI</link>', styles["Skill"]))

doc.build(story)
print(OUTPUT)

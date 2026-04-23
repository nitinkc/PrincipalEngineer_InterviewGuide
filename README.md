# Principal Engineer Interview Prep

A comprehensive MkDocs-powered knowledge base for preparing for Principal Software Engineer, Software Architect, and Engineering Manager roles. Topics cover architecture, technical leadership, team dynamics, and systems thinking at scale.

## 📚 Topics Covered

| Section | Description |
|---|---|
| 01 · Roles & Responsibilities | Software Architect, Principal Engineer, and Engineering Manager deep dives |
| 02 · Architecture Diagramming | C4 Model, UML for Architects, ArchiMate |
| 03 · Architect Thinking | Architect Personalities, The 4Cs of Architecture |
| 04 · Team Effectiveness | Diffusion of Responsibility, Team Topologies |
| 05 · Negotiation & Stakeholders | Influencing without authority, stakeholder management |
| 06 · Engineering at Scale | Scaling systems and engineering organizations |
| 07 · Technical Leadership | Leading technical vision and strategy |
| 08 · Interview Scenarios | Common interview questions and scenario walkthroughs |

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- pip

### Setup

```bash
# 1. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Serve the docs locally
mkdocs serve
```

Open your browser at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Build Static Site

```bash
mkdocs build
```

Output will be in the `site/` directory.

## 🛠️ Tech Stack

- **[MkDocs](https://www.mkdocs.org/)** — static site generator for documentation
- **[mkdocs-material](https://squidfunk.github.io/mkdocs-material/)** — Material Design theme
- **[pymdown-extensions](https://facelessuser.github.io/pymdown-extensions/)** — enhanced Markdown features (admonitions, tabs, superfences, etc.)
- **[Mermaid.js](https://mermaid.js.org/)** — diagram rendering in Markdown
- **[MathJax](https://www.mathjax.org/)** — mathematical notation rendering

## 📁 Project Structure

```
principal-engineer-prep/
├── docs/                   # Markdown source files
│   ├── index.md            # Home page
│   ├── 01-*.md             # Roles & Responsibilities
│   ├── 02-*.md             # Architecture Diagramming
│   ├── 03-*.md             # Architect Thinking
│   ├── 04-*.md             # Team Effectiveness
│   ├── 05-*.md             # Negotiation & Stakeholders
│   ├── 06-*.md             # Engineering at Scale
│   ├── 07-*.md             # Technical Leadership
│   ├── 08-*.md             # Interview Scenarios
│   └── js/                 # Custom JavaScript (Mermaid, MathJax init)
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

## ✏️ Contributing / Adding Content

1. Add a new `.md` file under `docs/`.
2. Register it in the `nav` section of `mkdocs.yml`.
3. Run `mkdocs serve` to preview your changes.


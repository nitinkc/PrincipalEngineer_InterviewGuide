# Principal Engineer — Interview Guide

A source-reviewed, active-recall **MkDocs Material** knowledge base for **Principal Software Engineer**, **Software Architect**, and **Engineering Manager** interview preparation.

Live site: **[https://nitinkc.github.io/PrincipalEngineer_InterviewGuide/](https://nitinkc.github.io/PrincipalEngineer_InterviewGuide/)**

> **Content review:** 15 November 2026. Standards and fast-moving guidance are checked against primary sources linked in the relevant chapters. Company levels, team sizes, time allocations, performance numbers, and technology examples are illustrative—not universal benchmarks.

---

## Architecture & Knowledge Pillars

| Section | Pillar | Key Frameworks & Mental Models |
|:---|:---|:---|
| **01** | **Roles & Foundations** | Principal Engineer (`01.02`) vs. Software Architect (`01.01`) vs. Engineering Manager (`01.03`), ADRs, SEI Quality Attribute Scenarios, 4+1 Views, Fitness Functions |
| **02** | **Architecture Diagramming** | C4 Model (`02.01`), High-Leverage UML (`02.02` — Sequence, State Machine, DDD Class, Activity), ArchiMate 3.2 Core & Enterprise Views (`02.03`) |
| **03** | **Architect Thinking** | Richards & Ford's First & Second Laws, a self-assessment lens for architect styles (`03.01`), this guide's 4Cs Decision Funnel & Weighted Trade-Off Matrices (`03.02`) |
| **04** | **Team Effectiveness** | Conway's Law & Inverse Conway Manoeuvre, Psychological Safety, Diffusion of Responsibility & Named Coordination (`04.01`), Team Topologies (`04.02`), current five-metric DORA model + SPACE |
| **05** | **Negotiation & Stakeholders** | Fisher & Ury Principled Negotiation, 3-Option Trade-Off Menus, Stakeholder Power × Interest Grid, Tech Debt ROI & FinOps Unit Economics, Canonical RFC Template |
| **06** | **Engineering at Scale** | CAP & PACELC without ACID conflation, 8 Fallacies, Multi-Tier Caching, Sharding & Resharding, Cell-Based Architecture, Production AI/LLM Security & Evals, Expand-and-Contract |
| **07** | **Technical Leadership** | Will Larson's 4 Staff+ Archetypes, Rumelt's Strategy Kernel, Technical Vision Template, Fowler's Tech Debt Quadrant & Register, Sponsorship, Blameless Post-Mortems, Technology Radar |
| **08** | **Interview Playbook** | 5-Step Principal System Design Loop, Decision-Driven Estimation, End-to-End Walkthroughs, `STAR-L` Behavioral Rubric, Architecture Critique Checklist |

---

## Learnability Features

- **Study Metadata & Reading Time:** Level, estimated reading time, and track alignment at the top of every page.
- **`TL;DR` Executive Abstracts (`!!! abstract`):** A concise synthesis before the details.
- **Senior vs. Principal Calibration (`=== "Tabs"`):** Side-by-side comparisons of local and organizational framing.
- **Active Recall Prompts (`??? question`):** Collapsible interview questions with hidden answer rubrics.
- **Plugin-Rendered Mermaid Diagrams:** `mkdocs-mermaid2-plugin` uses its Material-compatible custom fence; no project-maintained JavaScript is required.
- **Interactive Knowledge Checks:** `mkdocs_quiz` powers home-page quizzes; chapter prompts remain lightweight native recall exercises.
- **Topic Discovery & Images:** Material's tags plugin provides a topic index, and `mkdocs-glightbox` enables zoomable images.
- **Verified Source Links:** Time-sensitive standards and current practices link to primary documentation rather than unsupported version or benchmark claims.

---

## Local Development

### Prerequisites

- [uv](https://docs.astral.sh/uv/)
- Python 3.11.5 or newer; Python 3.13 is recommended and used in CI

### Quick Start

```bash
# 1. Create an isolated environment
uv venv --python 3.13

# 2. Install the reviewed dependency versions
uv pip install --python .venv/bin/python -r requirements.txt

# 3. Preview locally with live reload
uv run --no-project mkdocs serve
```

Open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser. Instant navigation is intentionally disabled during live reload.

### Validation

```bash
uv pip check --python .venv/bin/python
uv run --no-project mkdocs build --clean --strict
```

Direct dependencies are pinned in `requirements.txt` so local and CI builds resolve the same reviewed versions. Update them deliberately, then rerun both checks.

## MkDocs Material Lifecycle

Material for MkDocs 9.8.1 requires Python 3.11+ and is in maintenance mode. Upstream will provide critical fixes and security updates through **5 May 2027**. This project intentionally remains on MkDocs for now; evaluate **[Zensical](https://zensical.org/docs/compatibility/mkdocs/migration/)** separately and compare plugin compatibility, rendered diagrams, quizzes, search, and styling before any migration.

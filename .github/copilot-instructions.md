# GitHub Copilot Instructions

## Project Overview

This is a **Principal Software Engineer Interview Preparation Knowledge Base** built with **MkDocs Material**. Content is structured for **active recall, progressive disclosure, and principal-level decision-making** across architecture, systems thinking, organizational topology, and technical leadership.

## Tech Stack

- **MkDocs 1.6.1** with **Material for MkDocs 9.8.1**; direct dependencies are pinned in `requirements.txt`
- **PyMdown Extensions 12.3** for interactive learning elements (admonitions, details, tabs, task lists, grid cards, superfences)
- **`mkdocs-mermaid2-plugin`** with `mermaid2.fence_mermaid_custom`, required for its Material-compatible Superfences integration
- **`mkdocs_quiz`** for interactive checks; use native `??? question` blocks for open-ended recall
- **Material tags plugin** for topic discovery and **`mkdocs-glightbox`** for zoomable images
- **Python 3.11.5+** (3.13 recommended) and **uv** for local preview and static builds

## Local Development

```bash
uv venv --python 3.13
uv pip install --python .venv/bin/python -r requirements.txt
uv run --no-project mkdocs serve                 # Live reload at http://127.0.0.1:8000
uv run --no-project mkdocs build --clean --strict # Validate build with zero broken links or warnings
uv pip check --python .venv/bin/python            # Verify dependency consistency
```

## File Naming & Navigation Architecture

- All documentation lives under `docs/` as `.md` files.
- **Naming convention:**
  - Top-level pillar pages: `<NN>-<slug>.md` (e.g., `01-roles-responsibilities.md`)
  - Deep-dive sub-pages: `<NN>.<MM>-<slug>.md` (e.g., `01.01-software-architect.md`)
- **`mkdocs.yml` Navigation Rules (`navigation.indexes` enabled):**
  - A section with an overview page repeats the section title on its first child, for example `- "02 · Architecture Diagramming":` containing `- "02 · Architecture Diagramming": 02-architecture-diagramming.md`. This makes the tab/section itself clickable.
- Every new `.md` file **must** be registered in `mkdocs.yml` under `nav`.
- Add a small, consistent set of topic tags in the page's YAML front matter; use existing tag names where possible so the generated `tags.md` index stays useful.
- Always verify internal links with `mkdocs build --strict`.

## Pedagogical & Learnability Standards (Required for All Pages)

Every documentation page is designed for **rapid scanning, deep comprehension, and active interview rehearsal**. Follow these structural rules:

### 1. Standardized Page Header Metadata
Start every content page (after the `# NN · Title` heading) with a metadata callout block:
```markdown
> **Level:** Conceptual / Practitioner / Advanced · **Reading Time:** ~X mins · **Track:** [Role Alignment / Systems & Architecture / Org & Leadership / Interview Mastery]
> **Prerequisites:** [Link to prior section]
```

### 2. TL;DR / Executive Summary (`!!! abstract`)
Immediately after the intro paragraph, include a concise 3–4 bullet synthesis:
```markdown
!!! abstract "TL;DR — The 30-Second Mental Model"
    - **Core idea 1:** ...
    - **Core idea 2:** ...
    - **Interview signal:** What separates a Principal answer from a Senior answer on this topic.
```

### 3. Progressive Disclosure & Active Recall (`??? question`)
End major sections or pages with **collapsible self-test interview prompts** so learners must formulate their own answer before expanding the rubric:
```markdown
??? question "Active Recall: Prompt Question?"
    **Strong Principal Signal:**
    - Point 1 (Context & constraints first)
    - Point 2 (Trade-off matrix)
    **Common Senior Trap:** Jumping straight to technology X without sizing organizational or operational cost.
```

### 4. Side-by-Side Comparisons (`=== "Tab"`)
When contrasting roles, architectures, or Senior vs. Principal responses, use `pymdownx.tabbed`:
```markdown
=== "Senior Engineer Framing"
    Focuses on component implementation...
=== "Principal Engineer Framing"
    Focuses on system-wide invariants, Conway's Law, and 3-year cost of change...
```

### 5. Grid Cards for Navigation & Mental Models
Use Material grid cards (`<div class="grid cards" markdown>`) for hub pages, learning tracks, and multi-pillar overviews.

### 6. Diagrams & Notation
- Default to **Mermaid** (` ```mermaid `) for all diagrams (flowcharts, sequence, state, class, quadrant); rendering is provided by `mkdocs-mermaid2-plugin`.
- Do **not** add Mermaid or MathJax to `extra_javascript`. Keep math formulas readable as inline code/text so the site requires no custom JavaScript.
- Do **not** hardcode dark/light text colors that break in `slate` (dark) mode; use readable fills with explicit `color:#fff` or `color:#000`.
- Use `<br/>` instead of literal `\n` inside quoted Mermaid node labels when multi-line rendering is needed across Mermaid v10/v11.

### 7. Single Source of Truth (Avoid Duplication)
- Overview pages (`NN-*.md`) introduce the mental model, comparison matrix, and decision tree, then link to deep-dive pages (`NN.MM-*.md`).
- Do **not** copy-paste full templates (e.g., ADR or RFC markdown templates) across multiple files; define the canonical template in its primary home and link to it.

## Source Quality & Currency

- Link time-sensitive claims to current primary sources (DORA, OMG, The Open Group, IETF, NIST, OWASP, OpenTelemetry, official vendor documentation).
- Distinguish official standards/frameworks from this guide's teaching heuristics (4Cs, STAR-L, working-style reflection).
- Do not invent universal benchmarks for team size, DORA performance, database throughput, latency, availability topology, technology adoption, or management time allocation.
- Keep examples explicitly illustrative and prefer measured baselines, assumptions, ranges, and reversal triggers.
- Reverify versions and regulatory mappings before changing them; Material for MkDocs is in maintenance mode through 5 May 2027.

## Copilot Behaviour Guidelines

- Maintain **concise, high-signal prose**: prefer tables, decision matrices, checklists (`- [ ]`), and diagrams over walls of text.
- Preserve hierarchical headings (`#` for page title, `##` for major sections, `###` for sub-sections).
- Never add unused dependencies (like Bootstrap themes) or project-maintained JavaScript when a maintained MkDocs plugin or built-in Material feature provides the behavior. `navigation.instant` is intentionally disabled for reliable live reload; keep the mermaid2 Material-compatible custom fence.
- Always run `uv pip check --python .venv/bin/python` and `uv run --no-project mkdocs build --clean --strict` after modifying Markdown files, dependencies, or `mkdocs.yml`.

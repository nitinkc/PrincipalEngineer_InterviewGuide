# GitHub Copilot Instructions

## Project Overview

This is a **MkDocs documentation site** for Principal Software Engineer interview preparation. Content is written in **Markdown** and rendered using MkDocs with the Material theme and pymdown-extensions.

## Tech Stack

- **MkDocs** with the `mkdocs` and `mkdocs-material` themes
- **pymdown-extensions** for advanced Markdown (admonitions, superfences, tabs, etc.)
- **Mermaid.js** for architecture and flow diagrams
- **MathJax** for mathematical notation
- **Python 3** for the build toolchain

## Local Development

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve   # preview at http://127.0.0.1:8000
mkdocs build   # build static site to site/
```

## Content Guidelines

- All documentation lives under `docs/` as `.md` files.
- File naming convention: `<section-number>[-subsection]-<slug>.md` (e.g., `01.01-software-architect.md`).
- Every new page must be registered in the `nav` section of `mkdocs.yml`.
- Use **admonition blocks** for tips, warnings, and notes:
  ```markdown
  !!! tip "Title"
      Content here.
  ```
- Use **tabbed content** for comparing alternatives:
  ```markdown
  === "Option A"
      Content A
  === "Option B"
      Content B
  ```
- Use **Mermaid fences** for diagrams:
  ````markdown
  ```mermaid
  graph TD
      A --> B
  ```
  ````
- Prefer **definition lists**, **tables**, and **code blocks** with language tags for clarity.
- Keep headings hierarchical: `#` for page title, `##` for major sections, `###` for sub-sections.

## Navigation

Navigation is defined in `mkdocs.yml` under the `nav` key. Group related pages under a parent section using nested lists. Always add an `Overview` entry pointing to the top-level section file.

## Copilot Behaviour

- When generating new documentation pages, follow the file naming convention and include a top-level `#` heading.
- When adding diagrams, default to **Mermaid** unless the user specifies otherwise.
- When suggesting Python code, target **Python 3.8+**.
- Do **not** modify `mkdocs.yml` theme settings or `extra_javascript`/`extra_css` entries without explicit instruction.
- Keep generated Markdown clean, well-structured, and free of trailing whitespace.


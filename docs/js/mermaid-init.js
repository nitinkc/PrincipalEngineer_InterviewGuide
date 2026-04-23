(function () {
  // ── 1. Patch Bootstrap scrollspy querySelector crash ─────────────────────
  // Heading IDs that start with a digit are valid HTML but invalid CSS selectors.
  // Bootstrap's scrollspy calls querySelector('#06-…') which throws. We wrap it.
  var _origQS = Element.prototype.querySelector;
  Element.prototype.querySelector = function (sel) {
    try { return _origQS.call(this, sel); } catch (e) { return null; }
  };
  var _origDocQS = Document.prototype.querySelector;
  Document.prototype.querySelector = function (sel) {
    try { return _origDocQS.call(this, sel); } catch (e) { return null; }
  };

  // ── 2. Convert <pre><code class="language-mermaid"> → <div class="mermaid"> ─
  function convertMermaidBlocks() {
    // pymdownx.superfences renders mermaid as <code class="language-mermaid">
    // inside a <pre>. We must unwrap it so Mermaid can process it.
    document.querySelectorAll('pre code.language-mermaid').forEach(function (code) {
      var pre = code.parentElement;
      var div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = code.textContent;
      pre.parentElement.replaceChild(div, pre);
    });

    // Also handle bare <div class="mermaid"> already in DOM (future-proof).
  }

  // ── 3. Initialise Mermaid ────────────────────────────────────────────────
  function initMermaid() {
    if (typeof mermaid === 'undefined') {
      // CDN not yet loaded – retry after a short delay.
      setTimeout(initMermaid, 150);
      return;
    }
    convertMermaidBlocks();
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose'
    });
    mermaid.run({ querySelector: '.mermaid' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();

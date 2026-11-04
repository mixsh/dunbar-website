/**
 * <site-header> — reusable page header Web Component.
 *
 * Attributes:
 *   title  — the text shown in the <h1>
 *
 * Examples:
 *   <site-header></site-header>
 *   <site-header title="dunbar"></site-header>
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || document.title;

    this.innerHTML = `
      <header class="container" role="banner">
          <h1><a href="/">${title}</a></h1>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);

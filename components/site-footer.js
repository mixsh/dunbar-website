/**
 * <site-footer> — reusable page footer Web Component.
 *
 * Renders the standard site footer with a dynamically set copyright year.
 * No attributes required.
 *
 * Example:
 *   <site-footer></site-footer>
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="container" role="contentinfo">
        <small>dunbar | 2026</small>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);

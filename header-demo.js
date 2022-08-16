import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class HeaderDemo extends LitElement {
  static styles = css`
  :host {
    display: block;
  }
  
  .header {
    background: #121f3d;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    min-height: 3rem;
    position: relative;
  }

  .header div {
    padding: 0.5rem;
  }
  
  
  `;

  render() {
    return html`<div class="header">
    <div>
      <slot name="branding"></slot>
    </div>
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>`;
  }
}

customElements.define('header-demo', HeaderDemo);

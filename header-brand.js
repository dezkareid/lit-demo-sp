import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class HeaderBrand extends LitElement {

  static properties = {
    loadingStrategy: { type: String },
    href: { type: String },
    isotipeURL: { type: String },
    isotipeAlt: { type: String },
    logotipeURL: { type: String },
    logotipeAlt: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  
    figure {
      margin: 0;
    }
    
    .Link {
      align-items: center;
      display: flex;
      padding-left: 0.7rem;
    }
    
    .Logotipe {
      margin-left: 0.25rem;
    }
    
    .Image {
      height: 1.6rem;
    }  
  `;

  constructor() {
    super();
    this.loadingStrategy = 'lazy';
    this.href = '/';
    this.isotipeURL = '';
    this.isotipeAlt = '';
    this.logotipeURL = '';
    this.logotipeAlt = '';
  }

  render() {
    return html`<a href="${this.href}" class="Link">
      <figure part="isotipe-container">
        <slot name="isotipe">
          <img class="Image" loading="${this.loadingStrategy}" src="${this.isotipeURL}" alt="${this.isotipeAlt}">
        </slot>
      </figure>
      <figure part="logotipe-container" class="Logotipe">
        <slot name="logotipe">
          <img class="Image" loading="${this.loadingStrategy}" src="${this.logotipeURL}" alt="${this.logotipeAlt}">
        </slot>
      </figure>
    </a>`;
  }
}

customElements.define('header-brand', HeaderBrand);
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("boxel-button-default")
export class Button extends LitElement {
  render() {
    return html`
      <button part="button">
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    button {
      background-color: var(--button-bg);
      color: var(--button-color);
      padding: var(--button-padding);
      border-radius: var(--button-border-radius);
      font-size: var(--button-font-size);
      font-weight: var(--button-font-weight);
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: var(--button-hover-bg);
    }
    button:focus {
      background-color: var(--button-active-bg);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "boxel-button-default": Button;
  }
}

import { Component } from "../core/uniqueHan";
import aboutStore from '../store/about'
import about from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    });
  }
  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          uniqueHan
        </a>
      </div>
    `
  }
}
import { Component } from "../core/uniqueHan";

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = `
      <h1>
        Sorry..<br>
        Page Not Found.
      </h1>
    `
  }
}
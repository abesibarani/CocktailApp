class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 150px;
        text-decoration: none;
        text-align: center;
        font-family: 'MontSerrat', 'Quicksand', sans-serif;
        color: white

        }
        .app-bar{
            top: 50%;
            width: 100%;
            color: rgb(243, 239, 239);
            position: absolute;
            transform: translateY(-50%);
        }
        
        .app-bar h1{
            font-size: 50px;
            margin-top: 80px;
        }
        </style>
        `;
  }
}
customElements.define("app-bar", AppBar);

export class AppState {
  el: string;
  data: string[];
  template: (data: string[]) => string;
  // constructor
  constructor(options: any) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  }
  // methods
  // render UI
  render() {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  }

  //  update state
  setState(obj: object) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  }

  // immutable copy the state
  getState() {
    return JSON.parse(JSON.stringify(this.data));
  }
}

class Subject {
  constructor() {
    this.observers = new Set();
    this.proxy = new Proxy(this, {
      set: (target, property, value) => {
        const result = Reflect.set(target, property, value);
        this.notifyObservers(property);
        return result;
      }
    });
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(property) {
    for (let observer of this.observers) {
      observer.update(property);
    }
  }

  get proxyObject() {
    return this.proxy;
  }
}

class Observer {
  update(property) {
    console.log(`Property ${property} has been updated`);
  }
}

export default class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const subject = new Subject();
    this.state = subject.proxyObject;
    subject.addObserver(new Observer());
  }

  render() {
    this.innerHTML = `<h1>${this.state.title}</h1>
                      <p>${this.state.content}</p>`;
  }

  connectedCallback() {
    this.render();
  }
}


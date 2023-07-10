class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(event) {
    this.observers.forEach(observer => observer.notify(event));
  }
}

class Observer {
  constructor(id) {
    this.id = id;
  }
  notify(event) {
    console.log(`#${this.id} 받은 이벤트: ${event}`);
  }
}

const observable = new Observable();
const observer1 = new Observer(123);
const observer2 = new Observer(456);

observable.addObserver(observer1);
observable.addObserver(observer2);

observable.notifyObservers('ㅇㅇ');


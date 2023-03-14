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
  notify(event) {
    console.log(`받은 이벤트: ${event}`);
  }
}

const observable = new Observable();
const observer1 = new Observer();
const observer2 = new Observer();

observable.addObserver(observer1);
observable.addObserver(observer2);

observable.notifyObservers('ㅇㅇ');


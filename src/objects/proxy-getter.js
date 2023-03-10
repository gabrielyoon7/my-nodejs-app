const state = new Proxy({ foo: 'bar' }, {
  get(target, prop, receiver) {
    return "world";
  }
});
console.log(state.foo);
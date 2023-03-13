const state = new Proxy({ foo: 'init value' }, {
  set: (obj, prop, value) => {
    obj[prop] = value;
    console.log('나 바뀜!')
    return true;
  },
});

state.foo = 'new value';
// console.log(state.foo); // logs "new value"

/**
 * @param {integer} init
 * @return  { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = function (init) {
  let object = new Object();
  let initCopy = init;

  object.increment = function () {
    return ++init;
  };
  object.decrement = function () {
    return --init;
  };

  object.reset = function () {
    init = initCopy;
    return init;
  };
  return object;
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

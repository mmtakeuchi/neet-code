var MyQueue = function () {
  this.queue = [];
  this.stack = [];
};

MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  while (this.stack.length) {
    this.queue.push(this.stack.pop());
  }

  let lastItem = this.queue.pop();

  while (this.queue.length) {
    this.stack.push(this.queue.pop());
  }

  return lastItem;
};

MyQueue.prototype.peek = function () {
  while (this.stack.length !== 0) {
    this.queue.push(this.stack.pop());
  }

  let lastItem = this.queue.pop();
  this.queue.push(lastItem);

  while (this.queue.length) {
    this.stack.push(this.queue.pop());
  }

  return lastItem;
};

MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

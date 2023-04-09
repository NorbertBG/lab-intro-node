class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b) {
      return a - b});
    this.length++;
  }

  get(pos) {
     if (!this.items[pos]) throw new Error ('OutOfBounds');
     return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error('EmptySortedList');
    return Math.max.apply(Math, this.items);
  }

  min() {
    if (!this.items.length) throw new Error('EmptySortedList');
    return Math.min.apply(Math, this.items);
  }

  sum() {
    let total = this.items.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0)
    return total;
  }

  avg() {
    let total = 0;
    if (!this.items.length) throw new Error('EmptySortedList');
    else {
      this.items.forEach((item) => {
        total += item;
      });
      return total / this.items.length
    }
  }
}
module.exports = SortedList;

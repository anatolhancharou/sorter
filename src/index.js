class Sorter {
  constructor() {
    // your implementation
    this.elements = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.elements.push(element);

  }

  at(index) {
    // your implementation
    return this.elements[index];
  }

  get length() {
    // your implementation
    return this.elements.length;
  }

  toArray() {
    // your implementation
    return this.elements;
  }

  sort(indices) {
    // your implementation
    indices.sort(function(a, b) { return a - b; });
    var arr = [];
    var i;
    
    for (i = 0; i < indices.length; i++) {
      arr.push(this.elements[indices[i]]);
    }
    
    arr.sort(this.compareFunction);
    
    for (var i = 0; i < indices.length; i++) {
      this.elements[indices[i]] = arr[i];
    }
  
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
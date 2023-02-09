module.exports = function (arr) {  
   class MySet {
    constructor(arr) {
      this.__data = [];

      for (var i of arr) {
        if (!this.has(i)) {
          this.__data.push(i);
        }
      }
    }

    get size() {
      return this.__data.length;
    }

    has(val) {
      // return this.__data.indexOf(val) >= 0;
      for (var i of this.__data) {
        if (Object.is(i, val)) {
          return true
        }
      }
      return false
    }

    add(val) {
      if (!this.has(val)) {
        this.__data.push(val);
      }

      return this;
    }

    delete(val) {
      if (this.has(val)) {
        // var index = this.__data.indexOf(val);
        // this.__data.splice(index, 1);
        
        this.__data = this.__data.filter( 
          function(i) {
            return !Object.is(i, val);
          }
        );
        
        return true;
      }

      return false;
    }

    clear() {
      this.__data = [];
      return this;
    }

  }

  return new MySet(arr);
}  

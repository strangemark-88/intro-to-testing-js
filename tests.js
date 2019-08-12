// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

describe('sum', function () {
   it('should be a defined function.', function () {
       expect(typeof sum).toBe('function');
   });
   it('should return number 4 when passed the numbers 2 and 2', function () {
      expect(sum(2, 2)).toBe(4);
   });
   it('should return number 4 when passed the numbers 2 and 2', function () {
       expect(sum(2, 3)).toBe(5);
   });
    it('should return false when passed two strings', function () {
        expect(sum("black", "sheep")).toBe(false);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return a string Hello Jane when called with Jane.', function () {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return a string Hello Alen when called with Alex.', function () {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return a string Hello Pat when called with Pat.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

describe('hello World', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return Hello World if true', function() {
        expect(helloWorld(true)).toBe("Hello, World!");
    });
    it('should return Hello World if true', function() {
        expect(helloWorld(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('returns true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('returns false when passed "5"', function() {
        expect(isFive("5")).toBe(false);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('returns true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when passed 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when passed "banana', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when passed 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('returns false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('return false when called with a boolean input like isEven(true)', function() {
        expect(isEven(true)).toBe(false);
    });
    it('return false when called with a boolean input like isEven(false)', function() {
        expect(isEven(false)).toBe(false);
    });
    it('returns false when called without an argument like isEven()', function() {
       expect(isEven(undefined)).toBe(false) ;
    });
});


//      returns false when called without an argument like isEven()
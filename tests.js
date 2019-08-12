// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

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


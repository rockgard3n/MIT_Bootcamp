var utils  = require('course-utilities');
var Greet = utils.load('./greet.js', 'Greet');
var name = utils.load('./greet.js', 'name');

describe('Greet Test', () => {

    test('Basic Greeting', () => {
        expect(Greet('Elizabeth')).toBe('Hello, Elizabeth');
    });

    test('Null test', () => {
        expect(Greet(null)).toBe('Hello there!');
    });

    test('Shouting', () => {
        expect(Greet(JOSE)).toBe('HELLO JOSE!');    
    });

    test('Multiple Names', () => {
        expect(Greet(['Jose','Pep'])).toBe('Hello, Jose, Pep'); 
    });

    test('Lots of Names', () => {
        expect(Greet(['Jose','Pep','Paul','Dwayne'])).toBe('Hello, Jose, Pep, Paul, Dwayne');
    });
});


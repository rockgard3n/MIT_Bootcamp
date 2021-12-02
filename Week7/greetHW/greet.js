const { isString, upperCase } = require("lodash");
var name = 'Elizabeth'
function Greet(name) {
    if (isString(name)) {
        if (name === upperCase(name)) {
            return '`HELLO ${upperCase(name)}`'
        } else {
            return '`Hello, ${name}`'
        }



    };

}
const { isString, upperCase } = require("lodash");
var name = 'Elizabeth'
function Greet(name) {
    if (isString(name)) {
        if (name === upperCase(name)) {
            return `HELLO ${upperCase(name)}`;
        } else {
            return `Hello, ${name}`;
        };


    } else {
        var listName = name[0];
        for (var i = 1; i < name.length; i++) {
            listName += ", " + name[i];
        };
        return `Hello, ${listName}`;
    };

}
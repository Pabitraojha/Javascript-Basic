// ES6- ECMA SCRIPT 6 new features included to javascript
/*  1. let and const:-
        Block scoped variables better than var.
        let age = 20;
        age = 21; // allowed
        const pi = 3.14;
        pi = 3.15 ❌ not allowed

    2. Arrow Functions =>
        Shorter function syntax + lexical this
        // Normal function
        function add(a, b) {
        return a + b;
        }
        // Arrow function
        const add = (a, b) => a + b;

    3. Template Literals

        Use backticks ` instead of quotes
        let name = "Pabitra";
        let msg = `Hello ${name}, welcome!`;
        ✅ Supports multi-line strings

    4. Default Parameters
        Set default values for function arguments

        function greet(name = "Guest") {
            return `Hello ${name}`;
            }

    5. Destructuring

        Extract values from arrays or objects easily
        
        Array Destructuring :-
        const arr = [10, 20];
        const [a, b] = arr;

        Object Destructuring:-
        const user = { name: "Raj", age: 22 };
        const { name, age } = user;

    6. Spread Operator ...

        Expands elements

        const arr1 = [1, 2];
        const arr2 = [...arr1, 3, 4];
    
        Used for:
        Copy arrays
        Merge objects

        const obj = { a: 1, b: 2 };
            const copy = { ...obj };

    7. Rest Parameters

        Collect remaining arguments into an array

        function sum(...numbers) {
              return numbers.reduce((a, b) => a + b);
            }

    8. Enhanced Object Literals

        Shorthand syntax

        let name = "Amit";
        let age = 23;

        const user = { name, age };

    9. Classes

        Cleaner syntax for object-oriented programming

        class Person {
            constructor(name) {
            this.name = name;
            }

         greet() {
        return `Hi ${this.name}`;
            }
        }

    10. Modules (import / export)

        Split code into files

        // export
        export const add = (a, b) => a + b;

        // import
        import { add } from "./math.js";

    11. Promises

        Handle async operations

        const promise = new Promise((resolve, reject) => {
        resolve("Success");
        });

        promise.then(result => console.log(result));

    12. for...of Loop

        Loop over iterable objects

        for (let value of [1, 2, 3]) {
              console.log(value);
            }

    13. Map and Set
        Map (key-value)
        const map = new Map();
        map.set("a", 1);

        Set (unique values)
        const set = new Set([1, 2, 2, 3]);

    14. Symbol

        Creates unique identifiers

        const id = Symbol("id");

    15. this behavior improvement

        Arrow functions don’t bind their own this

        function Timer() {
        this.seconds = 0;
        setInterval(() => this.seconds++, 1000);
        }
*/

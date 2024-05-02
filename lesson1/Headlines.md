# Lecture 1

## Variables

learn how to declare variables ? and what the differinces
between these methods ?

### var vs let vs const

#### var

- `var` declarations are function-scoped or globally scoped.
- They can be re-declared and updated within their scope.
- They can be hoisted to the top of their scope.

#### let

- `let` declarations are block-scoped.
- They cannot be re-declared within the same scope.
- They can be updated within their scope.
- They are not hoisted to the top of their scope.

#### const

- `const` declarations are block-scoped.
- They cannot be re-declared or reassigned within the same scope.
- However, if the value is an object or array, properties or elements of that object or array can be mutated.

### Primitive vs Non-Primitive Values

- **primitive types**: string, number, bigint, boolean, undefined, and null.
- **Non-primitive** values include **objects, arrays, functions**, and other objects derived from Object

- #### Mutability

  Primitive values are immutable, meaning their values cannot be changed.
  Non-primitive values are mutable, meaning their values can be changed.

- #### Storage

  Primitive values are stored directly in memory.
  Non-primitive values are stored as references in memory, and variables hold references to their locations.

- #### Equality

  Primitive values are compared by value, meaning two values are equal if they have the same value.
  Non-primitive values are compared by reference, meaning two variables are equal only if they reference the same object in memory.

## Functions

### Declaring Functions in js

- #### Function Declaration

```
  function greet() {
    console.log("Hello!");
}
```

- #### Function Expression

```
const greet = function() {
    console.log("Hello!");
};
```

- #### Arrow Function Expression

```
const greet = () => {
    console.log("Hello!");
};


```

### Arrays

- Declare Array

- Modify Array

- Copeing Array

- Array Destructuring

- Array Spread Operator

- Looping Through Array

- Array Methods

### Objects

- Declaring Objects

- Assigning Object to Object

- Modifying  Objects

- Copeing Object

- Spread Operator

- Object Destructuring

- Object keys , values , entries , assign

- Looping through an object

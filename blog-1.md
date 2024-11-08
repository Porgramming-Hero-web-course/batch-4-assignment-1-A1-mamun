# The significance of union and intersection types in Typescript.

TypeScript is a superset of JavaScript that introduces static typing to improve code quality and maintainability. One of the most powerful features of TypeScript is the ability to use **union types** and **intersection types**, which allow for greater flexibility and precision when working with types. In this post, we’ll explore what these types are and how they can be used in TypeScript.

## Union Types (`|`)

A **union type** allows a variable to hold values of multiple types. You can define a variable that can be of one type or another, providing more flexibility in your code.

### Syntax:

```typescript
type Type = Type1 | Type2;
```

### Example : Function Argument with Multiple Types

Here’s a simple example where a function accepts either a string or a number as an argument:

```typescript
function printId(id: string | number) {
  console.log(id);
}

printId("abc"); // Works fine, prints "abc"
printId(123); // Works fine, prints 123
```

## Intersection Types (`&`)

An **intersection type** combines multiple types into one. The `&` symbol is used to indicate that a variable or parameter must satisfy all of the provided types. This is useful when you want a value to have the properties or behaviors of multiple types at the same time.

### Syntax:

```typescript
type Type = Type1 & Type2;
```

### Example : Combining Multiple Interfaces

Let's say you have two interfaces, `Person` and `Contact`, and you want to create a new type that has all properties from both interfaces. You can use an intersection type to combine them.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Person & Contact;

const employee: Employee = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123-456-7890",
};

console.log(employee); // Logs the combined object
```

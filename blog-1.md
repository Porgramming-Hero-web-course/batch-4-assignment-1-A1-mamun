# The significance of union and intersection types in Typescript.

A superset of JavaScript called TypeScript adds static typing to enhance the readability and quality of code. The use of **union types** and **intersection types**, which provide more flexibility and accuracy when working with types, is one of TypeScript's most potent features. We'll look at these types and their TypeScript applications in this blog.

## Union Types (`|`)

A variable that has a **union type** can store values of different types. Your code will have greater flexibility if you define a variable that can be of any type.

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

printId("abc"); // prints "abc"
printId(123); // prints 123
```

## Intersection Types (`&`)

Several types are combined into one via a **intersection type**. To specify that a variable or parameter must fulfill each of the above types, use the `&` symbol. When you want a value to simultaneously possess the traits or behaviors of several types, this is helpful.

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

# Understanding Union and Intersection Types in TypeScript

TypeScript is a superset of JavaScript that introduces static typing to improve code quality and maintainability. One of the most powerful features of TypeScript is the ability to use **union types** and **intersection types**, which allow for greater flexibility and precision when working with types. In this post, we’ll explore what these types are and how they can be used in TypeScript.

## Union Types (`|`)

A **union type** allows a variable to hold values of multiple types. You can define a variable that can be of one type or another, providing more flexibility in your code.

### Syntax:

```typescript
type Type = Type1 | Type2;
```

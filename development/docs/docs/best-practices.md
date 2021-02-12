---
title: Best practices
---

# General

## Avoid magic numbers

**🕐 When**

You want to provide some number value to a function.

**🚨 Don't**

```ts
// What we want a timeout of exactly 172800000 milliseconds?
setTimeout(createDatabaseSnapshot, 172800000);
```

**✅ Do**

```ts
const TWO_DAYS_IN_MILLISECONDS = 2 * 24 * 60 * 60 * 1000; //172800000;

setTimeout(myFunc, TWO_DAYS_IN_MILLISECONDS);
```

**🧐 Why?**

- It allows us to think about the knowledge the number represents rather than worrying about the number itself.
- Magic numbers become incredibly confusing when the same number is used for different purposes in one code section.
- It is easier to alter the value of the number, as it is not duplicated. Changing the value of a magic number is error-prone because the same value is often used several times in different places within a program.
- It encourages and facilitates documentation. The single place where the named variable is declared makes a good place to document what the value means and why it has the value it does.

**🧠 Think about it**

Not every number passed to the function is a magic number. Below you can find a few cases when passing a number directly to the function isn't a mistake:
1. Function explains the number: In `getUserById(3)`, we know that `3` is a user id.
2. Number doesn't have any meaning beyond its value. In `padding(12)` we know that the number is just a padding value we want for a particular element and doesn't mean anything more. There's no reason for creating additional variables like `PADDING_12`, `PADDING_ALL_SIDES`, or `BUTTON_PADDING`.

**📄 Read more**

- [Avoiding Magic Numbers](https://www.pluralsight.com/tech-blog/avoiding-magic-numbers/)
- [When is two a magic number?](https://www.codereadability.com/is-two-a-magic-number-in-programming/)


# React

## Use function's default parameters instead of the `defaultProps` property.

**🕐 When**

You want to define default values for the optional component props.

**🚨 Don't**

```tsx
type UserInfoProps = {
  name?: string;
  email?: string;
}

const UserInfo = (props: UserInfoProps) => {/* ... */}
```

**✅ Do**

```tsx
type UserInfoProps = {
  name?: string;
  email?: string;
}

const UserInfo = ({ name = 'unknown', email = '' }: UserInfoProps) => {/* ... */}
```

**🧐 Why?**

- `defaultProps` will eventually be deprecated as said in [this tweet](https://twitter.com/dan_abramov/status/1133878326358171650).
- If we have `defaultProps`, we iterate over them and check if we already have a value in the props object. In case we don't have a value we assign it the default. This happens every time we call `createElement` and makes component creation time longer.

**🧠 Think about it**

When using default parameters, they are assigned on every function call (every component rerender). Therefore, in a case when some of our props are objects, we must remember not to declaring them inline.

```tsx
type GreetProps = { user?: User };

// 🚨 It will create a new object instance on every rerender
const BadGreet = ({user = { name: 'unknown', email: '' }}: GreetProps) => {/* ... */}

const defaultUser: GreetProps['user'] = { name: 'unknown', email: '' };

// ✅ Now the object reference won't change
const GoodGreet = ({user = defaultUser}: GreetProps) => {/* ... */}
```

**📄 Read more**

- [React defaultProps is dying, who's the contender?](https://medium.com/@matanbobi/react-defaultprops-is-dying-whos-the-contender-443c19d9e7f1)
- [Twitter discussion on this topic](https://twitter.com/hswolff/status/1133759319571345408)

# TypeScript

## Use type literals instead of enums

**🕐 When**

You want to express that some type could be one of a few predefined values.

**🚨 Don't**

```ts
enum Answer {
  No,
  Maybe,
  Yes,
}

function submitAnswer(answer: Answer) {}
```

```ts
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

function setThemeColor(color: Color) {}
```

**✅ Do**

```ts
type Answer = 0 | 1 | 2;

function submitAnswer(answer: Answer) {}
```

```ts
type Color = 'RED' | 'GREEN' | 'BLUE';

function setThemeColor(color: Color) {}
```

**🧐 Why?**

- Enums compiled output generates unnecessary boilerplate.
- Enums need to be imported in every file where you want to use them.
- Unions can be easily extended when enums cannot.
- Regular numeric enums aren't type-safe. You can pass any number in places when you expect their types.
- You wouldn't need to write the default case in the switch statement if you used all union's values in its cases. Additionally, you will be warned if you have no default case and didn't handle all union values in other cases.

**📄 Read more**

- [Tidy TypeScript: Prefer union types over enums](https://fettblog.eu/tidy-typescript-avoid-enums)
- [Should You Use Enums or Union Types in Typescript?](https://blog.bam.tech/developer-news/should-you-use-enums-or-union-types-in-typescript)

## Prefer type aliases over interfaces

**🕐 When**

You want to define a new type.

**🚨 Don't**

```ts
interface UserCardProps {
  fullName: string;
  age: number;
}
```

```ts
interface FindUserById {
  (id: number): User
}
```

**✅ Do**

```ts
type UserCardProps = {
  fullName: string;
  age: number;
}
```

```ts
type FindUserById = (id: number) => User;
```

**🧐 Why?**

- As interfaces allow for declaration merging, they can cause troubles in two ways. Firstly we can extend an interface that already exists in the global scope, leading to many unpredictable errors. Secondly, there is a risk we will define two interfaces with the same name that will merge into one without our knowledge.
- Type aliases are more composable as they create both unions (`|`) and merged types (`&`).
- Type aliases prevent us from their redeclaration, so they are more stable across the codebase.

**🧠 Think about it**

There are at least two situations when interfaces with their declaration merging possibilities are a more suitable solution than type aliases:
1. We're adding types to a public API's definition when authoring a library or 3rd party ambient type definitions. In such a case, it's beneficial to allow the library user to extend our types via declaration merging if some definitions are missing.
2. Type extending is something we need for our type to maintain its purpose. An excellent example of this is [emotion's `Theme` type](https://emotion.sh/docs/typescript#define-a-theme), which should be customizable for each project using the library.

**📄 Read more**

- [Tidy TypeScript: Prefer type aliases over interfaces](https://fettblog.eu/tidy-typescript-prefer-type-aliases)
- [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [TypeScript Types or Interfaces for React component props](https://dev.to/reyronald/typescript-types-or-interfaces-for-react-component-props-1408)
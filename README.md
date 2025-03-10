# Thinking in react components

## How to split a component

![How to split a component](<how to split a component.png>)

## When to creat new components

![When to creat new components](when-to-create-a-new-components.png)

## General components guideline

![ General components guideline](general-components-guideline.png)

## Different Size and Reusability

![ Different Size and Reusability](differentSize-and-Reusability.png)

## What is component Composition

![what is composition](what-is-composition.png)

# Effect and Data Fetching

## Component lifecycle

![alt text](component-lifeCycle.png)

## Event handler vs effect

![alt text](eventHandler-vs-effect.png)

## Dependency array

![alt text](dependency-array.png)

## useEffects synchronize mechanism

![alt text](use-effect-synchronize-mechanism.png)

## Synchronization and lifeCycle

![alt text](synchronization-and-lifeCycle.png)

## When Effect are executed

![alt text](when-are-effect-executed.png)

## Effect synchronization

```js
useEffect(function () {
  console.log("initial render");
}, []);

useEffect(function () {
  console.log("after every render");
});

useEffect(
  function () {
    console.log("syncrhonized with query (prop/state)");
  },
  [query]
);
``;
```

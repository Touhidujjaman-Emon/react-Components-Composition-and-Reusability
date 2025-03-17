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

## useEffect CleanUp function

![alt text](use-Effect-clean-up-fn.png)

### CleanUp data fetching with **Abort controler**

```js
useEffect(
  function () {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Error fetching movies");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);

        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 2) {
      setMovies([]);
      setError("");

      return;
    }
    fetchData();

    return function () {
      controller.abort();
    };
  },
  [query]
);
```

# Hooks

![alt text](react-hooks.png)

## All built in hooks

![alt text](all-buitIn-hooks.png)

## Rules of react hooks

![alt text](rules-of-react-hooks.png)

### Hooks relay on call order

![alt text](hooks-relay-callorder.png)
![alt text](hooks-relay-correctOrder.png)

## Define-Update-state SUMMARY

![alt text](define-update-state-summary.png)

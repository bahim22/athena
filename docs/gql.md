
# Notes for GraphQL

## Introspection

```graphql
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}

query {
  __type(name: "Repository") {
    name
    kind
    description
    fields {
      name
    }
  }
}
```

## JS console methods

```js
console.log(object)
console.assert(expression,object)
console.clear()
console.count(label)
console.dir
console.error(object)
console.group(label)
console.groupEnd()
console.trace(object)
console.warn
console.info
```

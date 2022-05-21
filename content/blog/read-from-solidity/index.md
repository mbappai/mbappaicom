---
title: How to read a public variable in solidity from frontend.
date: "2022-05-19T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

Solidity creates a getter function for all public variables in your contract after it compiles. So the most efficient way of reading public variables from your front-end is as follows

```jsx
let result = await Contract.methods.publicVariable.call()
console.log(result)
```
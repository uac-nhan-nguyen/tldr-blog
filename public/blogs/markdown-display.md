# Markdown Display

Display markdown content using svelte + showdownjs.

This page tests some of the basic features

<br>
[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/uac-nhan-nguyen/tldr-blog/tree/main/src/components/markdown)



## How it works

- Use [showdownjs](https://github.com/showdownjs/showdown) to convert `.md` to `html`
- Use [svelte-prism](https://www.npmjs.com/package/svelte-prism) to parse code snippets

## Tables

| Feature                    | Status |
|----------------------------|--------|
| Use prism for code snippet | Done   |
| Display table              | Done   |


## Lists

- Unordered/Bullet lists
  - 2 spaces indent needs `disableForced4SpacesIndentedSublists=true` for showdownjs
- Item
- Item

1. Ordered lists should work
     1. Nested item for order list must have 4 indent spaces
2. Second item

## Reference

Wiki style reference is apply when reference text is number [1]

[1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet


## Code snippets 

> Theme was inspired from [AWS blogs](https://aws.amazon.com/blogs/developer/why-and-how-you-should-use-aws-sdk-for-javascript-v3-on-node-js-18/)

### Examples

```html
<!-- Using theme  -->
<head>
  <link rel='stylesheet' href='/styles/prism-coy-without-shadows.css'>
</head>
```

Long overflow

```css
.md-pre {
  background: linear-gradient(180deg,rgb(241 245 249),rgb(241 245 249) 50%,white 0,white);
  background-size: 3em 3em;
  background-attachment: local;
}
```

Short + json enabled
```json
{
  "name": "Nhan Nguyen"
}
```

```
How it display when no lang specified
```

Long overflow-y


```
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
More than 30 lines
```
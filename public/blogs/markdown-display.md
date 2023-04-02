# Markdown Display

Display markdown content using svelte.

## How it works

- Use [showdownjs](https://github.com/showdownjs/showdown) to convert `.md` to `html`
- Use [svelte-prism](https://www.npmjs.com/package/svelte-prism) to parse code snippets

## Tables

| Feature                    | Status |
|----------------------------|--------|
| Use prism for code snippet | Done   |
| Display table              | Done   |

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
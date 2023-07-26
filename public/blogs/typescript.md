# Typescript

## global.d.ts

- add `export {};` to make external module

```typescript
/// src/app/(main)/layout.tsx 
export {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bx-loading': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
```

## Add carbon design system web component
```tsx
/// src/app/(main)/layout.tsx 
import Script from "next/script";

export default function MainLayout() {

  return (
    <>
      <Script type="module" src="https://1.www.s81c.com/common/carbon/web-components/tag/latest/loading.min.js"/>
    </>
  );
}

```

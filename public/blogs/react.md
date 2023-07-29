# React 

## Avoid export default X

For readability, avoid `const ButtonX =` and `export default ButtonX` because it's hard to know right
away that ButtonX is the exported component

Instead:

```tsx
// ButtonX.tsx
export const ButtonX = () => {
  return <button>Hit me</button>
}

// View.tsx
import {ButtonX} from '@/components/ButtonX.tsx'
```

Or

```tsx
// ButtonX.tsx
export default function ButtonX () {
  return <button>Hit me</button>
}

// View.tsx
import ButtonX from '@/components/ButtonX.tsx'
```

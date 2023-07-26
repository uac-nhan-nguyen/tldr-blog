# Frontend Nextjs

## Filter out console warning

`InitApp.tsx`
```tsx
'use client'

export const InitApp = () => {
  useEffect(() => {
    /// other init
  }, []);
  return <>
  </>;
};

// Ignore 
const _error = console.error;
console.error = (...e) => {
  if (!(e.toString().startsWith('Warning: '))){
    _error(...e)
  }
}
```

`layout.tsx`
```tsx
export default function Layout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <InitApp/>
      {children}
    </div>
  )
}

```

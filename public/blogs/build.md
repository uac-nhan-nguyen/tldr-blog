# Build

## About size

- add `svelte-prism` increase gzip size by 11kb (from ~52kb to ~63kb)
- add support for `json` and `json5` for prism increase gzip size by 2kb

## About build

- Adding `@tabler/icons-svelte` makes build 18s slower on M1Pro (2s to 20s)
because vite has to transformed 4000+ icons. Should Add each icons as `.svelte`
file instead
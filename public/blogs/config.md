# Config

## Source code config

### tailwind auto-completion

If tailwind auto completion not working on JetBrains Webstorm:

1. Delete `tailwind.config.js` file
2. Run `npx tailwindcss init`

If it still does not work. 

### tsconfig.json

```json5
{
  // ...
  "compilerOptions": {
    // ...

    /** Map import paths */
    "paths": {
      "utils/*": [
        "./src/utils/*"
      ],
    }
  },
}
```

### vite.config.ts

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
  ],
  resolve: {
    /** Map import paths */
    alias : [
      {find: 'utils', replacement: path.resolve(__dirname, 'src/utils')},
      {find: 'components', replacement: path.resolve(__dirname, 'src/components')},
    ]
  }
})

```

### Install mac

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ssh-keygen
defaults write -g ApplePressAndHoldEnabled -bool false
```
# Dev Cheatsheet

Try to have all on one page

## Useful links

- [List Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)
- [List Tabler Icons](https://tabler-icons.io)
- [Postman generate random data](https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md)
- [Shields with icons](https://raw.githubusercontent.com/progfay/shields-with-icon/master/README.md)
- [AWS SDK v2 Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [Generate Favicon](https://realfavicongenerator.net)

## Frontend Svelte

### Recursive in #svelte

Also,

- export TS module in `.svelte` file
- `#if` directive
- `#each` directive

```svelte
<script context='module' lang="ts">
  export type NodeType = {
    name: string;
    children?: NodeType[];
  };
</script>

<script lang='ts'>
  export let level = 0;
  export let node: NodeType;
</script>

<div style="pad-left: {level*4}px;">{name}</div>
{#if node.children}
  {#each node.children as child}
    {svelte:self node={child} level={level + 1}}
  {/each}
{/if}
```

### Stores for sharing variable

[https://svelte.dev/tutorial/writable-stores](https://svelte.dev/tutorial/writable-stores)

Also,

- get value from `writable` by prefixing $ (i.e. `$counter`

```js
import {writable} from 'svelte/store'

export const counter = writable(0);
export const increment = () => counter.update(prev => prev + 1)
```

```svelte
<!-- In components -->
<script>
  import { counter, increment } from './counter'
</script>

<span>{$counter}</span>
<button on:click={increment}>+1</button>
```

### Import SVG

> 1. change `.svg` to `.svelte
> 2. add `<script>` tag

example `IconLock.svelte`

```svelte
<script lang="ts">
  export let size = 24;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock" width="{size}" height="{size}"
     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
     stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
  <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
</svg>
```

## Frontend html

### html + tailwind

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-800 text-white">
<div class="grid justify-center">Hello</div>
</body>
</html>
```

### html + tailwind + prism

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/styles/prism-coy-without-shadows.css"/>

  <style>
      code[class*="language-"], pre[class*="language-"] {
          font-size: 12px;
          white-space: pre-wrap;
          word-break: break-word;
      }
  </style>
</head>
<body class="bg-slate-800 text-white">
<div class="px-8 py-8">
<pre class="language-js overflow-auto">
    <code class="">{{code}}</code>
</pre>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js" integrity="sha512-9khQRAUBYEJDCDVP2yw3LRUQvjJ0Pjx0EShmaQjcHa6AXiOv6qHQu9lCAIR8O+/D8FtaCoJ2c0Tf9Xo7hYH01Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-SkmBfuA2hqjzEVpmnMt/LINrjop3GKWqsuLSSB3e7iBmYK7JuWw4ldmmxwD9mdm2IRTTi0OxSAfEGvgEi0i2Kw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
```

## Backend Dart

### Simple server with route + static + auth + homePage

```dart
import 'dart:io';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_plus/shelf_plus.dart';

void main() async {
  final app = Router().plus;
  app.use(logRequests());
  app.get('/', homePageHandler);

  final authApp = Router().plus;
  authApp.use(logRequests());
  authApp.use(apiAuthorizer());
  authApp.post('/user', addUserHandler);

  final staticHandler = createStaticHandler('public');

  final handler = Cascade().add(app).add(authApp).add(staticHandler).handler;

  final server = await shelf_io.serve(handler, InternetAddress.anyIPv4, int.parse(Platform.environment['PORT'] ?? "8080"));

  // Enable content compression
  server.autoCompress = true;

  final url = 'http://${server.address.host}:${server.port}';
  print('Serving at ${url}');
}

Middleware apiAuthorizer() {
  return (innerHandler) {
    return (request) {
      if (request.headers['api-key'] != API_KEY) {
        return Response(401);
      }
      return innerHandler(request);
    };
  };
}

Future<Response> home(Request request) async {
  const html = '''
<!DOCTYPE HTML>
<html lang="en">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-800 text-white">
<h1 class="text-bold text-3xl ml-[12px] mt-[12px]">This is home page</h1>
</body>
</html>
  ''';
  return Response(200, body: html, headers: {'content-type': 'text/html'});
}

```

## Testing

### Postman snippets

#### using chaijs

Postman uses [chaijs](https://www.chaijs.com).

```js
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response payload is correct", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData.jobId).to.be.a('string')
  pm.expect(jsonData.items).to.be.an('array')
});
```

#### using ajv

[ajv](https://ajv.js.org) is also available. [Whatever works](https://www.youtube.com/watch?v=7VeTEP3xoXo)

In Collection pre-request script,
declare to attach to global sandbox
object [stackoverflow](https://stackoverflow.com/questions/45673961/how-to-write-global-functions-in-postman)

```js
const Ajv = require('ajv')
ajv = new Ajv({logger: console})
```

in Request tests script

```js
pm.test("Response payload is correct", function () {
  var jsonData = pm.response.json();
  const schema = {
    type: 'object',
    required: ['accessToken'],
    properties: {
      accessToken: {type: 'string'}
    }
  };

  const valid = ajv.validate(schema, jsonData)
  if (!valid) pm.expect.fail(JSON.stringify(ajv.errors))
});
```

#### random variables

```js
const name = pm.variables.replaceIn('{{$randomFullName}}')

// set it in global
random = (variable) => pm.variables.replaceIn(`{{${variable}}}`)

// and use
const quickName = random('$randomFullName')
```

[List variables /blogs/stuff](/blogs/stuff)

Link: [https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md](https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md)

## Git commands

### git clone using ssh key
```sh
cd some-folder
ssh-agent bash

# Enter new bash
ssh-add ~/.ssh/somekey
git clone some-repo
```

### git config local with ssh key
```sh
git config --local core.sshCommand "/usr/bin/ssh -i /home/me/.ssh/somekey"
```

### git commands

```sh
git checkout -b feature/TICKET-123
```

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

## Others

### dayjs

```js
// use [] to format with escape
const format = 'd [days] HH:mm:ss'
```

### squoosh-cli
```sh
squoosh-cli --mozjpeg {} * -d out
```

### Install mac

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ssh-keygen
defaults write -g ApplePressAndHoldEnabled -bool false
```
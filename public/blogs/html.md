
# Frontend html

## html + tailwind

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

## html + tailwind + prism

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
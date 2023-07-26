# Postman snippets

## using chaijs

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

## using ajv

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

## random variables

```js
const name = pm.variables.replaceIn('{{$randomFullName}}')

// set it in global
random = (variable) => pm.variables.replaceIn(`{{${variable}}}`)

// and use
const quickName = random('$randomFullName')
```

[List variables /blogs/stuff](/blogs/stuff)

Link: [https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md](https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md)
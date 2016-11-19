# express-graphiql

This package is a standalone lightweight middleware/route for express. It serves 
the [graphql-toolbox](https://github.com/OlegIlyenko/graphql-toolbox) version of the 
[graphiql](https://github.com/graphql/graphiql) interface for exploring 
[graphql](https://github.com/graphql/graphql-js) APIs.

Installation:

```bash
npm i -S express-graphiql
```

Usage:

```js
import express from 'express'
import graphiql from 'express-graphiql'
import graphql from 'express-graphql'

const app = express()

app.use('/api', graphql({ schema: MyGraphQLSchema }))

// You can use any of the 2 versions
app.use('/explore', graphiql({ endpoint: '/api' }))
app.get('/explore-get-only', graphiql({ enpoint: '/api' }))

app.listen(3000, () => { /* we are live */ })
```


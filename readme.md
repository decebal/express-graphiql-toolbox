# express-graphiql-toolbox

This package is a standalone lightweight middleware (or route) for express, statically serving a GraphiQL client. It uses 
the [graphql-toolbox](https://github.com/OlegIlyenko/graphql-toolbox) version of the 
[graphiql](https://github.com/graphql/graphiql) interface, to enable headers, tabs and more 
(features that people generally want, but will most likely never make it to the official GraphiQL implementation)

### What you get
A live version of the graphql-toolbox version of GraphiQL:
http://toolbox.sangria-graphql.org/graphiql

### Installation:

```bash
npm i -S express-graphiql
```

### Usage:

```js
import express from 'express'
import graphiql from 'express-graphiql-toolbox'
import graphql from 'express-graphql'

const app = express()

app.use('/api', graphql({ schema: MyGraphQLSchema }))

// You can use any of the 2 versions
app.use('/explore', graphiql({ endpoint: '/api' }))
app.get('/explore-get-only', graphiql({ enpoint: '/api' }))

app.listen(3000, () => { /* we are live */ })
```
### Big thanks 
to @OlegIlyenko for creating the enhanced version of the GraphiQL library, 
and @tlvenn for helping it getting published on a CDN (and saving me a lots of trouble)!

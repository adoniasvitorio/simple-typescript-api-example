import express from 'express'

import { User } from './routes'

const app = express()

app.get('/', (request, response) => {
    return response.json(User)
})

app.listen(3333)
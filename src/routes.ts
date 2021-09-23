import {Request, Response} from 'express'

import createUser from './services/CreateUser'

export function User(request : Request, response: Response) {
    const user = createUser({
        name: 'Adonias Vitorio',
        email: 'adonias.vitorio@gmail.com',
        password: 'password'
    })
    return response.json({message:'Hello worls'})
}
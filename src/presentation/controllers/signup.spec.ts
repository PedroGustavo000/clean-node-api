
import { SignUpController } from './signup'

describe('SignUp Controler', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                // name: 'any_name',
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const  httpResonse = sut.handle(httpRequest)
        expect(httpResonse.statusCode).toBe(400)
        expect(httpResonse.body).toEqual(new Error('Missing param: name'))
    })
})
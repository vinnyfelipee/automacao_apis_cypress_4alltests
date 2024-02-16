/// <reference types="cypress"  />

describe('POST Reqres', () => {

    it('Validar CREATE retornando 200', () => {
        
        const dados = {
            "name": "morpheus",
            "job": "leader"
        }
        
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: dados,
            failOnStatusCode: false
        }).then  ((response)  => {
                expect(response.status).to.eq(201)
        })  
    })  

    
    it('Validar CREATE sem enviar o body retornando 400', () => {
      // retornou 201, encontrado 1 bug  
        const dados = {
            "name": "morpheus",
            "job": "leader"
        }
         
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false
        }).then  ((response)  => {
                expect(response.status).to.eq(400)
        })  
    })  

    it('Validar REGISTER - SUCCESSSFUL retornando 200', () => {
        
        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then  ((response)  => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
            expect(retorno.token).to.eq('QpwL5tke4Pnpja7X4')
        })  
    }) 
})
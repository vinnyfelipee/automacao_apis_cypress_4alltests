/// <reference types="cypress"  />

describe('GET Reqres', () => {

    it('Validar LIST USERS retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then  ((response)  => {
                expect(response.status).to.eq(200)
        })  
    })    

    
    it('Validar body retornado no LIST USERS', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then  ((response)  => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })  
    })  

    it('Validar SINGLE USER retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then  ((response)  => {
                expect(response.status).to.eq(200)
        })  
    })    

    
    it('Validar body retornado no SINGLE USER', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then  ((response)  => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })  
    })
    
    it('Validar SINGLE USER NOT FOUND retornando 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then  ((response)  => {
            expect(response.status).to.eq(404)
    })  
    }) 
})
/// <reference types="cypress" />

describe('PATCH reqres', () => {

    it('Validar PATCH UPDATE retornando 200', () => {
        const dados = {
            "name": "morpheus",
            "job": "zion resident"
        };

        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("morpheus");
            expect(response.body.job).to.eq("zion resident");
        });
    });

});

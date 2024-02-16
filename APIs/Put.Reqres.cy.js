/// <reference types="cypress" />

describe('PUT Reqres', () => {

    it('Validar PUT UPDATE retornando 200', () => {
        const dados = {
            "name": "morpheus",
            "job": "zion resident"
        };

        cy.request({
            method: 'PUT',
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

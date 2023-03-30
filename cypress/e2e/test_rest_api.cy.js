import massas from "../fixtures/post_model.json"

describe('Acesso ao FakeRESTApi', () => {

    it("Testando FAKE rest GET Activities", function () {
        cy.request('/api/v1/Activities')
    })

    it("Testando FAKE rest GET Activities v2", function () {
        cy.request({
            method: 'GET',
            url: '/api/v1/Activities'
        })
    })

    it("Testando FAKE rest POST Activities", function () {
        cy.request({
            method: 'POST',
            url: '/api/v1/Activities',
            body: {
                "id": 31,
                "title": "string",
                "dueDate": "2023-03-21T19:46:49.742Z",
                "completed": true
            }
        })
    })

    it("Testando FAKE rest POST Activities v2 ", function () {
        cy.fixture('post_model').then(_body => {
            cy.request({
                method: 'POST',
                url: '/api/v1/Activities',
                body: _body
            }).then(resp => {
                expect(resp.status).to.equal(200)
            })
        })
    })

    it("Testando FAKE rest POST Activities v3", function () {
        cy.request({
            method: 'POST',
            url: '/api/v1/Activities',
            body: massas
        }).as('test_post')
        cy.get('@test_post').then(({ status, body }) => {
            expect(status).to.equal(200)
            expect(body.id).to.equal(0)
        })
    })

    it("Testando FAKE rest GET Activities v2", function () {
        cy.request({
            method: 'GET',
            url: '/api/v1/Activities'
        })
    })

    it("Testando FAKE rest GET Activities passando ID v1", function () {
        cy.request({
            method: 'GET',
            url: '/api/v1/Activities/2'
        })
    })

    describe('Reqs Fake REST API Autores', () => {

        it("GET", function () {
            cy.request({
                method: 'GET',
                url: '/api/v1/Authors'
            })
        })

        it("POST", function () {
            cy.request({
                method: 'POST',
                url: '/api/v1/Authors',
                body: {
                    "id": 700,
                    "idBook": 1000,
                    "firstName": 'Murilo',
                    "lastName": 'Augusto'
                }
            })
        })

        it("GET", function () {
            cy.request({
                method: 'GET',
                url: '/api/v1/Authors/10'
            }).then(resp => {
                expect(resp.status).to.equal(200)
            })
        })

        // it.only("GET", function () {
        //     cy.request({
        //         method: 'GET',
        //         url: '/api/v1/Authors/100000'
        //     }).then(resp => {
        //         expect(resp.status).to.equal(404)
        //     })
        // })
    })
})
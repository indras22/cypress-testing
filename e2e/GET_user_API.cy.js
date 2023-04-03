describe('GET API User test',()=>{

it('get users',()=>{
    cy.request({

             method : 'GET',
             url : 'https://gorest.co.in/public-api/users/',
             headers : {

                'authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
             }

    }).then((res)=>{

        expect(res.status).to.eq(200)
        expect(res.body.meta.pagination.limit).to.eq(10)
    })
})

it('get users by id test',()=>{
    cy.request({

             method : 'GET',
             url : 'https://gorest.co.in/public-api/users/652220',
             headers : {

                'authorization' : "Bearer 90b129ea7c5525a7d1dbf44bceb344300161d5e0deb91ad4fa2bb67eceb2eaab"
             }

    }).then((res)=>{

        expect(res.status).to.eq(200)
        expect(res.body.data.name).to.eq('Bala Somayaji')
        expect(res.body.data.email).to.eq('bala_somayaji@predovic.io')
        expect(res.body.data.gender).to.eq('female')

    })
})


})
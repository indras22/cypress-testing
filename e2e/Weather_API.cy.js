describe(' Weather Information',()=>{


    it('get Weather Info for cities',()=>{
       
         //1.Request: GET Locations
        cy.request({
             
            method : 'GET',

            url: 'https://www.metaweather.com/api/location/search/?query=san'


              }).then((resp)=>{

                const city=resp.body[0].title
                return city

              })
                 .then((city)=>{
                  //2.Request: 2nd request for the first location/city
                    cy.request({

                        method : 'GET',

                        url: 'https://www.metaweather.com/api/location/search/?query='+city

                    }).then((resp)=>{

                        expect(resp.status).to.eq(200)
                        expect(resp.body[0]).to.have.property('title', city)
                    })
                 })


    })



})
describe(' Weather Information',()=>{


    it('get Weather Info for cities',()=>{
       
         //1.Request: GET Locations with city name starting "San"
        cy.request({
             
            method : 'GET',

            url: 'https://www.metaweather.com/api/location/search/?query=San'


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


    
    it('get Weather Info for all the cities',()=>{
       
      //1.Request: GET Locations with city name starting "San"
     cy.request({
          
         method : 'GET',

         url: 'https://www.metaweather.com/api/location/search/?query=san'


           }).then((resp)=>{

             const location=resp.body
             return location

           })
              .then((location)=>{

                for(let i=0; i<location.length; i++){
               //2.Request: 2nd request for the first location/city
                 cy.request({

                     method : 'GET',

                     url: 'https://www.metaweather.com/api/location/search/?query='+location[i].title

                 }).then((resp)=>{

                     expect(resp.status).to.eq(200)
                     expect(resp.body[0]).to.have.property('title', location[i].title)
                 })
                }
              })


 })



})
const request = require('request');

module.exports = function(app,db){
    app.get('/test_cardProduct',(req,res)=>{
        console.log('cardproduct creation api ready');
        res.send('It works!!!');
    });

    app.post('/createCardProduct', (req,res) => {

        var options = {
            url: 'https://shared-sandbox-api.marqeta.com/v3/cardproducts',
            body : JSON.stringify({ 
                "start_date": "2017-01-01", 
                "name": "Example Card Product", 
                "config": { 
                    "fulfillment": { 
                      "payment_instrument":"VIRTUAL_PAN" 
                     }, 
                    "poi": { 
                      "ecommerce": true 
                    }, 
                    "card_life_cycle": { 
                      "activate_upon_issue": true 
                    } 
                  } 
                }),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Basic dXNlcjI0NzkxNTE4ODY5MTcyOjdiOTM1YTBkLWFjYzItNDY3OC1hMDQ4LTNhM2IwODExZTNhNw=='
                }
            
          };
          
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
            //   var info = JSON.parse(body);
            //   console.log(info.stargazers_count + " Stars");
            //   console.log(info.forks_count + " Forks");
            console.log(' card product success!!');
            }
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            console.log('token: ' + JSON.parse(body).token);

          }
          
          request.post(options, callback);

    });
    


};
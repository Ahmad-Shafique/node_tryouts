const request = require('request');


module.exports = function(app,db){
    app.get('/testcArd',(req,res) => {
        console.log('card works!!!');
        res.send('it works !!!');
    });

    app.post('/createCard',(req,res)=>{
        var options = {
            url: 'https://shared-sandbox-api.marqeta.com/v3/cards?show_cvv_number=true&show_pan=true',
            body : JSON.stringify({
                "user_token" : req.body["user_token"],
                "card_product_token" : "653af163-0f6b-458f-a93a-e249aee35fb4"
                }),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Basic dXNlcjI0NzkxNTE4ODY5MTcyOjdiOTM1YTBkLWFjYzItNDY3OC1hMDQ4LTNhM2IwODExZTNhNw=='
                }
            
          };
          console.log(JSON.stringify(options));
          console.log("\n\n\n")
          
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
            console.log('Card creation success!!');
            }
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.send(JSON.parse(body).token);
          }
          
          request.post(options, callback);
    });
};
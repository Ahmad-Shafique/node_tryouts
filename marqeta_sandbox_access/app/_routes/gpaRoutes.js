const request = require('request');


module.exports = function(app,db){
    app.get('/testGPA',(req,res) => {
        console.log('GPA works!!!');
        res.send('it works !!!');
    });

    app.post('/createGPAOrder',(req,res)=>{
        var options = {
            url: 'https://shared-sandbox-api.marqeta.com/v3/gpaorders',
            body : JSON.stringify({
                "user_token" : req.body["user_token"],
                "amount" : req.body["amount"],
                "currency_code": "USD", 
                "funding_source_token" : "9b17a359-31da-45f3-88c7-4e3e4ff189b7",

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
            console.log('GPAOrder creation success!!');
            }
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.send(JSON.parse(body).token);
          }
          
          request.post(options, callback);
    });
};
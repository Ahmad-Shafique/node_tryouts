const request = require('request');


module.exports = function(app,db){
    app.get('/testFundingSource',(req,res) => {
        console.log('funding source works!!!');
        res.send('it works !!!');
    });

    app.post('/createFundingSource',(req,res)=>{
        var options = {
            url: 'https://shared-sandbox-api.marqeta.com/v3/fundingsources/program',
            body : JSON.stringify({ 
                "name":"Program Funding Source"
                }),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Basic dXNlcjI0NzkxNTE4ODY5MTcyOjdiOTM1YTBkLWFjYzItNDY3OC1hMDQ4LTNhM2IwODExZTNhNw=='
                }
            
          };
          
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
            console.log(' card product success!!');
            }
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.send(JSON.parse(body).token);
          }
          
          request.post(options, callback);
    });
};
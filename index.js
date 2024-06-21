
const express = require('express');
const app = express();
const cors = require('cors');
const { default: TwitterApi } =  require('twitter-api-v2');

/* elsa cuenta */
const CONSUMER_KEY = "a73giFH2nGK5zsHLK0yZtGBJN"
const CONSUMER_SECRET = "Wibnvpe420TMnAYZnlRIKMDsCR5RDgV0RgxNxZOy8oylSJvwzN"
const oauth_token = "1528519399036145668-Z30yHssf6crIX98Rii9o8L9QpaTSi6"
const oauth_token_secret = "ZwEtcChBvcOOSf7c0gMAdXjYTeidgjuL1hppQh04HMxin"
/* victor cuenta */


    app.use(cors())
    app.get('/', async (req, res) => {
        const client = new TwitterApi({
          appKey: CONSUMER_KEY,
          appSecret: CONSUMER_SECRET,
          accessToken: oauth_token,
          accessSecret: oauth_token_secret,
        });
      
        //const result = await client.v2.get('users/me');/* , { query: 'nodeJS', max_results: 100 } */
        //console.log(result.data); 
       // res.send(JSON.stringify(result.data))
       res.send(JSON.stringify({"id":"1528519399036145668","name":"ElsaBananasCheese","username":"BananasElsa"}));
      });

    app.listen(8080, () => {
        console.log('server listening on port 8080')
    })

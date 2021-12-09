var express = require('express');
var app = express();

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path + ' query string ' + JSON.stringify(request.query));
    next();
});

app.use(express.urlencoded({ extended: true }));

var products = require('./products.json');

app.get("/product_data.js", function (request, response, next) {
   response.type('.js');
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});

app.get("/add_review", function (request, response, next) {
    /*

    $review_file = './spa_reviews.dat';
    
    if(array_key_exists('submit_review', $_POST)){
        
        $user_review_info = $_POST;
        // get rid of submit button key
        unset($user_review_info['submit_review']);
        // add time stamp to review info - use to id and order by date
       
        $user_review_info['timestamp'] = time();
        date_default_timezone_set('Pacific/Honolulu');
        //makes time stamp readable 
        echo date('l jS \of F Y h:i:s A');
        
        add_review($review_file, $user_review_info);
        
    }
    
    // display the reviews
     display_reviews($review_file);
    
    */

 });

app.use(express.static('./public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback


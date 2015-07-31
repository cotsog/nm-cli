var Nightmare = require('nightmare');
new Nightmare()
    .goto('http://yahoo.com')
    .type('input[id="UHSearchBox"]', 'github nightmare')
    .click('#UHSearchWeb')
    .wait('html')
    .evaluate(function() {
        return document.querySelector('html').innerHTML;
    }, function(html) {
        console.log(html);
    })
    .run(function(err, nightmare) {
        if (err) return console.log(err);
        console.log('Done!');
    });
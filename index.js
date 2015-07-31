var Nightmare = require('nightmare');
new Nightmare()
    .goto('http://yahoo.com')
    .type('input[title="Search"]', 'github nightmare')
    .click('.searchsubmit')
    .run(function(err, nightmare) {
        if (err) return console.log(err);
        console.log('Done!');
    });
var Nightmare = require('nightmare');
new Nightmare()
    .goto('http://yahoo.com')
    .type('input[title="Search"]', 'github nightmare')
    .click('.searchsubmit')
    .wait('.url.breadcrumb')
    .evaluate(function() {
        return document.querySelector('.url.breadcrumb').innerText;
    }, function(breadcrumb) {
        console.log(breadcrumb);
    })
    .run(function(err, nightmare) {
        if (err) return console.log(err);
        console.log('Done!');
    });
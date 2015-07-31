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
    .run(done);
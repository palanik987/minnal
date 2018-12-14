var phantom = require('phantom');   
var fs  = require("fs");
var array = fs.readFileSync("inputcheck.txt").toString().split('\n');
phantom.create().then(function(ph) {
    array.forEach(function(link){
        ph.createPage().then(function(page) {
            page.open(link).then(function(status) {
                page.render(link + '.pdf').then(function() {
                    console.log('Page Rendered');
                });
            });
        });
    });
});
const fetch = require('isomorphic-fetch');
const jsdom = require('jsdom');

const fetchData = (() => {
    try {
        // fetch('https://www.xwordinfo.com/JSON/')
        let websiteData = [];
        websiteData.push( 
            fetch('https://www.xwordinfo.com/JSON/Data.aspx?format=text')
            .then(response => response.text())
            .then(data => { return {data:data }})
            .then(result => { console.log(result)})
        );
        }
    catch(e){
        console.log(e);
    }
}) 

fetchData();

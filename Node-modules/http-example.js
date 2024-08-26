// example 1

const {get}= require('https');

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`)
    });
    res.on('end', () => {
        console.log('No more data')
    });
});


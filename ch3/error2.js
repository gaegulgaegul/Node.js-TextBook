const fs = require('fs');

setInterval(() => {
    fs.unlink('./ch3/abcdefg.js', (err) => {
        if(err) {
            console.error(err);
        }
    });
}, 1000);
const fs = require('fs');

fs.copyFile('./ch3/readme4.txt', './ch3/writeme4.txt', (error) => {
    if(error) {
        return console.error(error);
    }
    console.log('복사 완료');
});
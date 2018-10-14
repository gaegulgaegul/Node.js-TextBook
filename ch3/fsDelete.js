const fs = require('fs');

fs.readdir('./ch3/folder', (err, dir) => {
    if(err) {
        throw err;
    }
    console.log('폴더 내용 확인', dir);
    fs.unlink('./ch3/folder/newFile.js', (err) => {
        if(err) {
            throw err;
        }
        console.log('파일 삭제 성공');
        fs.rmdir('./ch3/folder', (err) => {
            if(err) {
                throw err;
            }
            console.log('폴더 삭제 성공');
        });
    });
});
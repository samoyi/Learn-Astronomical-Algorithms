"use strict";

const url = require('url'),
      fs = require('fs'),
      path = require('path');


function download(sURL, sPath, callback, sFileName=''){
    let sProtocal = url.parse(sURL).protocol;

    if(sProtocal!=='http:' && sProtocal!=='https:'){
        callback( { err: 'Only supports HTTP and HTTPS protocols'} );
        return;
    }

    let sFilePath = sPath + (sFileName?sFileName:path.basename(sURL));

    if( fs.existsSync(sFilePath) ){
        callback( { err: 'This file already exists'} );
    }
    else{
        fs.existsSync(sPath) || fs.mkdirSync(sPath);
        let file = fs.createWriteStream(sFilePath),
            size = 0;

        require(sProtocal.slice(0, -1))
            .get(sURL, function(response) {
                response.pipe(file);

                response.on('data', (chunk)=>{console.log(size+=chunk.length)});
                response.on('end', ()=>{console.log('Responses end')})
                file.on('finish', function() {
                    file.close(callback({ err: 'File done'}));
                });
            })
            .on('error', function(err) {
                fs.unlink(sFilePath); // Delete the file async. (But we don't check the result)
            });
    }
}

module.exports = download;

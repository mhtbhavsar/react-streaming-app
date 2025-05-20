const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express()


const videoFileMap={
    'f1':'back-end/videos/f1.mp4',
    'f2':'back-end/videos/f2.mp4',
    'f3':'back-end/videos/f1.mp4',
}

app.get('/videos/:filename', (req, res)=>{
    const fileName = req.params.filename;
    const filePath = videoFileMap[fileName]
    // const fullpath = path.join(__dirname, filePath);
    if(!filePath){
        return res.status(404).send('File not found')
    }
    console.log(__dirname);

        const fileStats = fs.statSync(filePath);
        console.log(fileStats);

    const fileSize = fileStats.size;
    const range = req.headers.range;

    if(range){
        const parts = range.replace(/bytes=/, '').split('-')
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(filePath, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4'
        };
        res.writeHead(206, head);
        file.pipe(res);
    }
    else{
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4'
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res)
    }
})
app.listen(3001, () => { console.log('server running on port 3001')})
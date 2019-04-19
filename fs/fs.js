var fs = require('fs');
var data;
var time;

/***************普通读取***************/ 
// 同步读取 readFileSync
var fsSync = () => {
  try {
    time = Date.now();
    data = fs.readFileSync('./file.txt', 'utf8');
    time = Date.now() - time;
    console.log('文件内容: \n' + data);
    console.log('耗时：' + time + 'ms')
  } catch (err) {
    console.log('读取文件出错：' + err.message)
  }
}

// 异步读取 readFile
var fsAsync = () => {
  time = Date.now();
  fs.readFile('./file.txt', 'utf8', function(err, data) {
    time = Date.now() - time;
    if (err) {
      return console.error('读取文件出错：' + err.message)
    }
    console.log('文件内容：' + data)
    console.log('耗时：' + time + 'ms')
  })
}

/***********通过文件流读取createReadStream***************/
var fsReadStream = () => {
  var readStream = fs.createReadStream('./file.txt', 'utf8')
  readStream.on('data', function(chunk) {
    console.log('读取数据：' + chunk)
  }).on('error', function(err) {
    console.log('出错：' + err.message)
  }).on('end', function() {
    console.log('没有数据了')
  }).on('close', function() {
    console.log('已经关闭')
  })
}

/**************文件写入*********** */
var fsWriteFile = () => {
  fs.writeFile('./file.txt', 'hello, wolrd', 'utf8', function(err) {
    if (err) throw err;
    console.log('文件写入成功')
  })
}


/**************通过文件流写入***************/
var fsWriteSteam = fs.createWriteStream('./file.txt', 'utf8')
fsWriteSteam.on('close', function() {
  console.log('已经关闭')
})
console.log(fsWriteSteam)
fsWriteSteam.write('hello-stream')
fsWriteFile.write('world-stream')
fsWriteFile.end('')

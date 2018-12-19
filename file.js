var fs = require('fs');

/**
 * 
 flags: 读写
 mode: 4/2/1 windows下没用
 不论成功失败，都进callback(err, fd)
 */
//fs.open(path, flags, [mode], callback)
//fs.openSync(path, flags, [mode])
fs.open('1.txt', 'r', (err, fd) => {
  /**
   * fs.read(fd, buffer, offset, length, position, callback)
   * fs.readSync
   * fd编号
   * offset:读取的内容添加到buffer的第offset位,buffer起始位置
   * length：读取的内容长度
   * position：从文件里的第position开始读取，填0和null都可以
   */
  var bf = new Buffer(10)
  fs.read(fd, bf, 0, 4, null, (err, len, newBf) => {
    console.log(bf)
    console.log(len)
    console.log(newBf)
  })
})

fs.open('1.txt', 'r+', (err, fd) => {
  var bf = new Buffer('123')
  fs.write(fd, bf, 0,3,0, () => {
    console.log(arguments)
  })
  fs.write(fd, 'abc', 5, 'utf-8')

  fs.close(fd, () => {

  })
})

/**
 * 不存在则新建
 */
fs.writeFile(filename, 'hello', cb)
fs.appendFile(filename, '-leo', cb)
fs.exists(filename, cb)

fs.readFile(filename, (err, data) => {
  data.toString();
})

fs.unlink('2.txt', cb)
fs.rename(oldname, newname, cb)
fs.stat(filename, cb) 
fs.watch(filename, cb)
fs.mkdir(path, [mode], cb)
fs.rmdir(path, cb)
fs.readdir('../FileSystem', (err, filelist) => {
  filelist.forEach((f) => {
    fs.stat(f, (err, info) => {
      /**
       * info.mode
       * 16822: dir
       * 33206: file
       */
      console.log(arguments)
    })
  })
})


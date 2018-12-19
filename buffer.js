// console.log(process)

// console.log(process.argv)
// console.log(process.env)

process.stdout.write('hello')
// process.stdin.resume()
process.stdin.on('data', (data) => {
  console.log('aaa: ' + data)
})

const buf = new Buffer(10)
buf[3] = 8
console.log(buf)

const bf = new Buffer('This is a string!', 'utf-8')
let str = '';
bf.forEach(element => {
  str += String.fromCharCode(element)
});
console.log(str);

// buf.write(str)
// buf.slice(1)
// buf.copy(targetBuf)

// Buffer.isEncoding('utf-8')
// Buffer.isBuffer(arr)
// Buffer.byteLength(str, 'utf-8')
// Buffer.concat([buf1, buf2], size)
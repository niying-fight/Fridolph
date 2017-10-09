var fs = require('fs')

var arr = ["Node.js 中文网", "assert - 断言", "Buffer - 缓冲器", "child_process - 子进程", "cluster - 集群", "console - 控制台", "crypto - 加密", "dgram - 数据报", "dns - 域名服务器", "Error - 异常", "events - 事件", "fs - 文件系统", "global - 全局变量", "http - HTTP", "https - HTTPS", "module - 模块", "net - 网络", "os - 操作系统", "path - 路径", "process - 进程", "querystring - 查询字符串", "readline - 逐行读取", "repl - 交互式解释器", "stream - 流", "string_decoder - 字符串解码器", "timer - 定时器", "tls - 安全传输层", "tty - 终端", "url - 网址", "util - 实用工具", "v8 - V8引擎", "vm - 虚拟机", "zlib - 压缩"]

var str = arr.join('\n');

// fs.writeFile('./Node核心模块.md', str, err => {
//   if (err) throw err;
//   console.log('写入成功')
// })

fs.readFile('./Node核心模块.md', 'utf8', (err, data) => {
  if (err) throw err;  
  console.log(data)
})
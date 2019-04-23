### Fs

#### Methods

- readFileSync 同步读取
- readFile 异步读取
- createReadStream 读取文件流
- writeFile 文件写入
- writeFileSync 文件同步写入

- createWriteStream 通过文件流写入

- exists  文件是否存在 （已经被废弃）
- access  判断文件是否存在（默认模式），还可以用来判断文件的权限

- mkdir 异步创建目录
- mkdirSync 同步创建目录

- unlink 删除文件
- unlinkSync 同步删除文件

- rename 文件重命名
- renameSync 同步文件重命名

- readdirSync 遍历文件目录（只遍历一层）

#### 文件状态

- stat() 获取文件状态
- stats.isFile() -- 是否文件
- stats.isDirectory() -- 是否目录

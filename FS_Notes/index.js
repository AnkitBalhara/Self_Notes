// These are the notes for Node.js File Sysytem(FS)...

// There are mainly five methods..
// 1.Read files
// 2.Create files
// 3.Update files
// 4.Delete files
// 5.Rename files

// =======================================================
// For "read file" on our computer...

// const fs = require('fs')

// fs.readFile('./FileName.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// =======================================================
// For "Create files" in Node.js
// There are three methods...
// i)Open
// ii)WriteFile
// iii)AppendFile


// i)"Open file" method...
// But in this case we have to write this "w" 
// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

// const fs = require('fs')
// fs.open("./JaiShreeRam.txt",'w',(err,data)=>{
//     if(err) throw err;
//     console.log("Created")
// })

// But, for the same case if the file exists before then no need to write "w".
// and if the file already exists for the same name then it will overwrite it, if there written "w".

// const fs = require('fs')
// fs.open("./JaiShreeRam.txt",(err,data)=>{
//     if(err) throw err;
//     console.log("Created")
// })

// ii)"Write file" method...
 
// const fs = require('fs')
// fs.writeFile('./WriteFileMethod.txt',"This is added using write file method.",(err,data)=>{
//     if(err) throw err;
//     console.log("Created")
// })

// iii)Append File Method.....
// In this method if the file doesn't exists then it will create that file else it will add this data to the file without overwritting.

// const fs = require('fs')
// fs.appendFile('./FileName.txt',"Data to append in that file. This data will not replcae other data but it will add this data \n",(err,data)=>{
//     if(err) throw err;
//     console.log("Data Appended if the file doesn't exist it created the file.")
// })


// =======================================================
// 3) Update Method...
// There are the same methods that are :-
// AppendFile and WriteFile...

// Which are explained above

// =======================================================
// 4)Delete Method.....

// const fs = require('fs')

// fs.unlink("./FilePath.txt",(err)=>{
//     if(err)  throw err;
//     console.log("File Unlinked or deleted..")
// })

// =======================================================
// 5) Rename Method...

// const fs = require('fs')

// fs.rename("./FileName.txt","NameToBe.txt",(err)=>{
//     if(err)  throw err;
//     console.log("File Renamed..")
// })

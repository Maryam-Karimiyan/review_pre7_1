const fs=require("fs")

// fs.mkdirSync("./Darya2")

// fs.mkdir("./Darya",{recursive:true},(err)=>{console.log(err);
// })
fs.appendFile("./index.css",".g{width:180px}","utf-8",(err)=>{
    console.log(err);
    
})

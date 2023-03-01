var fs = require("fs");
var http = require("http");

http.createServer((req,res)=>{
  let result;
  if(req.url !== "/favicon.ico")
  {
    let arr = req.url.split("/");

    let x = Number(arr[2]);
    let y = Number(arr[3]);
    let ope = arr[1];

    switch (ope) {
      case "add":
        result=x+y;
        res.write(`<h1>${result}</h1>`);
        fs.appendFileSync("task.txt",JSON.stringify(result));//bouns1
        break;
      case "sub":
        result=x-y;
        res.write(`<h1>${result}</h1>`);
        fs.appendFileSync("task.txt",JSON.stringify(result));//bouns1
        break;
      case "div":
        result=x/y;
        res.write(`<h1>${result}</h1>`);
        fs.appendFileSync("task.txt",JSON.stringify(result));//bouns1
        break;
      case "mul":
        result=x*y;
        res.write(`<h1>${result}</h1>`);
        fs.appendFileSync("task.txt",JSON.stringify(result));//bouns1
        break;    
    }
  }
  res.end();
})

.listen("5000",function () {
  console.log(`Listening to port 5000`);
})

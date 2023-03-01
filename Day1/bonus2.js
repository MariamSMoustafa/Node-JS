const http = require("http");
http.createServer((req,res)=>{
    let result=0;
    if(req.url != "/favicon.ico"){
        let arr = req.url.split("/");
        let ope = arr[1];
            switch (ope) {
                case "sum":
                    for (let i = 2; i <= arr.length-1; i++) {
                        result+=Number(arr[i]);
                    }
                    res.write(JSON.stringify("sum of numbers = "+result))
                    break;
                case "sub":
                    let resultt=parseInt(arr[2]);
                    for (let i = 3; i <= arr.length-1; i++) {
                        result2-=Number(arr[i]);
                    }
                    res.write(JSON.stringify("sub of numbers = "+result2));
                    break;
                case "multi":
                    let result3=1;
                    for (let i = 2; i <= arr.length-1; i++) {
                        result3*=Number(arr[i]);
                     }
                    res.write(JSON.stringify("multi of numbers = "+result3));
                    break;
                case "div":
                    let result4=parseInt(arr[2]);
                    for (let i = 3; i <= arr.length-1; i++) {
                        result4/=Number(arr[i]);
                    }
                    res.write(JSON.stringify("div of numbers = "+result4));
                    break;
                default:
                    res.write("<h1>plsase enter valid operation<h1>");
                    break;
            }
    }
    res.end();
})
.listen("7000",
            ()=>{
                console.log("Lisining on Port 7000")
            }
       )
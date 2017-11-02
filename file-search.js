var fs = require("fs")
var path = require("path")  

var Bagpipe = require('bagpipe');  

// 设定最大并发数为10  
var bagpipe = new Bagpipe(1000); 

var root = path.join("10001")  
  
readDir(path.join(root))  
function readDir(_path){  
    fs.readdir(_path,function(err,menu){   
        if(!menu)  
            return;  
        menu.forEach(function(ele){   
            var _pathsub = path.join(_path,ele)
            // console.log(_pathsub)
            fs.stat(_pathsub,function(err,info){  
                if(info.isDirectory()){  
                    // console.log("dir: "+_pathsub)  
                    readDir(_pathsub);  
                }else{  
                    bagpipe.push(fs.readFile, _pathsub, function (err, res){
                        if (res.indexOf("太极盾获取服务器ip和端口失败") > 0) {
                            console.log(_pathsub) 
                        }
                    });
                }     
            })  
        })            
    })  
} 


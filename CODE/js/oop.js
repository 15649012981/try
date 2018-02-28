//TODO JavaScript中不存在 - 函数重载
/*
function drawImage(img,x,y){
    console.log("this is first drawImage");
}
function drawImage(img,x,y,width,height){
    console.log("this is second drawImage");
}
drawImage("img",0,0);*/

function drawImage(){
    if(arguments.length == 3){
        var img = arguments[0];
        var x = arguments[1];
        var y = arguments[2];
    }else{
        var img = arguments[0];
        var x = arguments[1];
        var y = arguments[2];
        var width = arguments[3];
        var height = arguments[4]
    }
}

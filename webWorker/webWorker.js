this.onmessage = function(data){
    sendWorkerMsg(data.value);
    console.log(data.data);
}


function sendWorkerMsg(e){
console.log("message getdi")
}
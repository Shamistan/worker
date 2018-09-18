var worker = new Worker("webWorker.js");

window.addEventListener("mousemove",function(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    worker.postMessage(coor);
   // console.log('salam');
})
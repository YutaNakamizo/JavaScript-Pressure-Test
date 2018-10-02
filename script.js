// Functions
const display = arr=>{
  for(let i=0; i<arr.length; i++) {elm[i].value = arr[i];}
}

const handleTouch = e=>{
  let touchList = e.touches;
  let logList = [];
  for(let i=0; i<touchList.length; i++) {
    let touch = touchList[i];
    let isPen = touch.force && touch.radiusX===0.5 && touch.radiusY===0.5;
    let f = touch.force;
    if(!isPen) f = null;
    let cX = touch.clientX;
    let cY = touch.clientY;
    let rX = touch.radiusX;
    let rY = touch.radiusY;
    display([isPen,f,cX,cY,rX,rY]);
    logList.push(`ID: ${i}\nisPen: ${isPen}\nforce: ${f}\nclientX: ${cX}\nclientY: ${cY}\nradiusX: ${rX}\nradiusY: ${rY}`);
  }
  console.log(logList.join("\n\n"));
}

// EventListener
document.addEventListener("DOMContentLoaded",()=>{
  area = document.getElementById("touchbox");
  elm = [
    document.getElementById("isPen"),
    document.getElementById("force"),
    document.getElementById("clientX"),
    document.getElementById("clientY"),
    document.getElementById("radiusX"),
    document.getElementById("radiusY")
  ];
  
  area.addEventListener("touchstart",handleTouch);
  area.addEventListener("touchmove",handleTouch);
});

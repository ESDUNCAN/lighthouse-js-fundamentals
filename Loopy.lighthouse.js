for (var i = 100; i <=200; i++){
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse")
  } else if (i % 4 === 0) {
    console.log("Lighthouse")
  } else if (i % 3 === 0){
    console.log("Loopy")
  } else (console.log) (i)
}   



function buildTriangle(length){
  var triangle = ""
  var lineNumber = 1
  for (var lineNumber = 1; lineNumber<= length; lineNumber++){
      triangle = triangle + makeLine(lineNumber)
     } return triangle
  
}

console.log (buildTriangle(10));

function laugh(num){
  for (var i = 0; i < num; i++){
      sound = sound + "ha"
      
  } sound = sound + "!"
  return sound
} console.log (laugh(3))



let cry = function myFunction(){
  var sound = "boohoo!";
  return sound;
} 
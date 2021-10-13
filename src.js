var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 450;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);
context.lineWidth = 1;

var finalSize = 3;
var startSteps;
var offset = 2;
var tileStep = (size - offset * 2) / 15;
var startSize = tileStep;
var directions = [-1, 0, 1];

const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
let random_index = Math.floor(Math.random() * TONES_2.length);
const [r, g, b] = TONES_2[random_index];


color1 = "#5D737E"
color2 = "#64B6AC"
color3 = "#C0FDFB"
color4 = "#DAFFEF"
color5 = "#FCFFFD"

water={ 
  1: "#5D737E",
  2:"#64B6AC",
  3:"#C0FDFB",
  4:"#DAFFEF",
  5:"#FCFFFD"
};
warm={ 
  1: "#FF5C58",
  2:"#FE8F8F",
  3:"#FCD2D1",
  4:"#FFEDD3"
};
dark={ 
  1: "#222831",
  2:"#393E46",
  3:"#00ADB5",
  4:"#EEEEEE"
};
pallets={
  1:"red",
  2:"orange",
  3:"yellow",
  4:"green",
  5:"blue",
  6:"purple",
  7:'#00FFFF',
  8:'monochrome',
  9:"random"
}
num1 = Math.floor(Math.random() * 9) + 1

pallet = pallets[num1]
 
 
function getColor() {
  // code = Math.floor(Math.random()*10000).toString(16);
  // return color = "#" + code; 

  num = Math.floor(Math.random() * 20) + 1
 // small_num = Math.floor(Math.random() * 4) + 1

  var color = randomColor({hue: pallets[num1], count: 20})[num];

  return color //dark[num]

 // return water[small_num]

  
}

function draw(x, y, width, height, xMovement, yMovement, steps) {

  context.strokeStyle = (r,g,b);
  context.beginPath();
  context.rect(x, y, width, height);
  context.stroke();
    
  if(steps >= 0) {
    var newSize = (startSize) * (steps / startSteps) + finalSize;
    var newX = x + (width - newSize) / 2
    var newY = y + (height - newSize) / 2
    newX = newX - ((x - newX) / (steps + 2)) * xMovement
    newY = newY - ((y - newY) / (steps + 2)) * yMovement
    draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
  }
}

for( var x = offset; x < size - offset; x += tileStep) {
  for( var y = offset; y < size - offset; y += tileStep) {
    startSteps = 3 + Math.ceil(Math.random() * 5)
    // startSteps = 12
    var xDirection = directions[Math.floor(Math.random() * directions.length)]
    var yDirection = directions[Math.floor(Math.random() * directions.length)]
    draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
  }
}


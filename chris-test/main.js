var tut = document.getElementById("tutorial");

//ripped map() and constrain() right from p5
function map(n, start1, stop1, start2, stop2) {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    return newval;
  if (start2 < stop2) {
    return this.constrain(newval, start2, stop2);
  } else {
    return this.constrain(newval, stop2, start2);
  }
};

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
};

function colorChange(num){
	var aX = num.alpha
	var aY = num.beta
	var aZ = num.gamma


	var newP = document.createElement("p"); 
	var textNode = document.createTextNode(aX + ", " + aY + ", " + aZ); 
	newP.appendChild(textNode);
    document.getElementById("playArea").appendChild(newP);
}
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

function accelerationTest(num){
	var aX = num.alpha;
	var aY = num.beta;
  var aZ = num.gamma;
  // var para = document.getElementById("tutorial");
  // para.innerHTML = aX + ", " + aY + ", " + aZ; 

  var colorX = map(aX, -90, 90, 0, 255);
  var colorY = map(aY, -90, 90, 0, 255);
  var colorZ = map(aZ, -90, 90, 0, 255);

  var circ = document.getElementById("circle");
  circ.style.height = aX + "vh"
  circ.style.width = aZ + "vw"
  circ.style.backgroundColor = "rgb(" + colorX + ", " + colorY + ", " + colorZ + ")";
}


var display = document.getElementById("instruction");

//chris's codes:
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

function textChange(num) {
    var aX = num.alpha
    var aY = num.beta
    var aZ = num.gamma

    //tried to round up but didn't work:
    var aXpar = Number(aX).toFixed(1);
    var aYpar = Number(aY).toFixed(1);
    var aZpar = Number(aZ).toFixed(1);

    
    
    var moveDir = map(aX, -90, 90, 5, 50);

    var newP = document.createElement("span");
    var textNode = document.createTextNode(aXpar + ",        " + aYpar + ",       " + aZpar);
    var textNode = document.createTextNode(aX);
    newP.appendChild(textNode);
    document.getElementById("textArea").appendChild(newP);

    var txtCtn = document.getElementsByTagName('span');
    txtCtn.style.fontSize = moveDir + "px"; 

    

}





// function slowDown(num){
//   // var aX = num.alpha
// 	// var aY = num.beta
// 	// var aZ = num.gamma

//   // var newP = document.createElement("p"); 
// 	// // var textNode = document.createTextNode(aX + ", " + aY + ", " + aZ); 
//   // var textNode = document.createTextNode(aX); 
// 	// newP.appendChild(textNode);
//   //   document.getElementById("playArea").appendChild(newP);


// }
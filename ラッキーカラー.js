function colorshow(){
	var color = new Array("白","黒","ピンク");
		
	var number1 = Math.random();
	var number2 = number1 * 3;
	var number = Math.floor(number2);
	var message = color[number];
	
	var object = document.getElementById("color");
	object.innerText = message;
}
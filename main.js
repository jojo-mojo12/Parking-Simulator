canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

let rotationAngle = 0;
car_width = 45;
car_height = 65;

background_image = "ParkingLot.png";
car_image = "car1.png";

car_x = 5;
car_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car_imgTag = new  Image();
	car_imgTag.onload = uploadcar;
	car_imgTag.src = car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
	 ctx.save();
	 ctx.translate(car_x + car_width / 2, car_y + car_height / 2);
	 ctx.rotate(rotationAngle * Math.PI / 180);
	 ctx.drawImage(car_imgTag, - car_width / 2, - car_height / 2, car_width, car_height);
	 ctx.restore();
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}	
}

function up()
{
	if (car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When up arrow is pressed, x = " + car_x + ". y = " + car_y);
		rotationAngle = 0;
		uploadBackground();
		uploadcar();
	}
}

function down()
{
    if  (car_y<=560) 
	{
		car_y = car_y + 10;
		console.log("When down arrow is pressed, x = " + car_x + ". y = " + car_y);
		rotationAngle = 180;
		uploadBackground();
		uploadcar();
	}
}

function left()
{
	if (car_x>=0)
	{
     	car_x = car_x - 10;
		console.log("When left arrow is pressed, x = " + car_x + ". y = " + car_y);
		rotationAngle = 270;
		uploadBackground();
		uploadcar();
	}
}

function right()
{
	if (car_x<=1050)
	{
		car_x = car_x + 10;
     	console.log("When down arrow is pressed, x = " + car_x + ". y = " + car_y);
		rotationAngle = 90;
	    uploadBackground();
    	uploadcar();
	}	
}

function changeCarImage(imageSrc) {
    car_image = imageSrc;
    car_imgTag.src = car_image;
    uploadBackground();
    uploadcar();
}

function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = "url('" + imageUrl + "')";
}

var c; // canvas context.
function startup()
{
	c = document.getElementById("canvas").getContext("2d");
	var gradient = c.createLinearGradient(0,0, 0, c.canvas.height/3);
	gradient.addColorStop(0, '#f4dc8d');
	gradient.addColorStop(1, '#faedaa');
	c.fillStyle = gradient;
	c.fillRect(0,0,c.canvas.width, c.canvas.height);
}

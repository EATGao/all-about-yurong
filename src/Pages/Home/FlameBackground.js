
export default function flameBackground() {
  const canvas = document.querySelector('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const c = canvas.getContext('2d');

	// rectangle
	// c.fillStyle = ('rgba(255, 0, 0, 0.2')
	// c.fillRect(100, 100, 100, 100)
	// c.fillStyle = ('rgba(255, 255, 0, 0.2')
	// c.fillRect(100, 300, 100, 100)
	
	// //line
	// c.beginPath();
	// c.moveTo(200, 300);
	// c.lineTo(300, 200);
	// c.strokeStyle='black'
	// c.stroke();

	// c.lineTo(30, 200);
	// c.strokeStyle='red'
	// c.stroke();

	// // arc/circle
	// // c.beginPath();
	// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
	// // c.strokeStyle='blue';
	// // c.stroke();

	// let circleNumber = 10;
	
	// for (let i = circleNumber; i > 0; i--) {
	// 	let x = Math.random() * window.innerWidth + 10;
	// 	let color = ("rgb(" + String(Math.floor((Math.random()) * 255)) + "," + 
	// 		String(Math.floor((Math.random()) * 255)) + "," +
	// 		String(Math.floor((Math.random()) * 255)) + ")").split().join('')
	// 	c.beginPath();
	// 	c.arc(x, 300 + (10 * i), 20 - i, 0, Math.PI * 2, false);
	// 	c.strokeStyle = color;
	// 	console.log(color)
	// 	c.stroke();
	// }

	let mouse = {
		x: undefined,
		y: undefined
	}

	let circleArray = [];
	function init() {
		circleArray = [];
		for (let i = 0; i < numOfCircle; i++) {
			let radius = Math.random() * 3 + 1
			let x = Math.random() * (window.innerWidth - radius * 2) + radius;
			let y = Math.random() * (window.innerHeight - radius * 2) + radius;
			// velocity and direction of moving
			let dx = (Math.random() - 0.5);
			let dy = (Math.random() - 0.5);
			circleArray.push(new Circle(x, y, dx, dy, radius, radius));
		}
	}

	const colorArray = [
		'#ffaa33',
		'rgb(127, 255, 212)',
	]

	window.addEventListener('mousemove', function(e) {
		mouse.x = e.x;
		mouse.y = e.y;
	});

	window.addEventListener('resize', function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	class Circle {
		constructor(x, y, dx, dy, radius, minRadius) {
			this.x = x;
			this.y = y;
			this.dx = dx;
			this.dy = dy;
			this.radius = radius;
			this.minRadius = minRadius;
			this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

			this.draw = function () {
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				c.strokeStyle = this.color;
				c.stroke();
				c.fillStyle = this.color;
				c.fill();
			};

			this.update = function () {
				if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
					this.dx = -this.dx;
				}

				if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
					this.dy = -this.dy;
				}

				this.x += this.dx;
				this.y += this.dy;

				if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
					mouse.y - this.y < 50 && mouse.y - this.y > -50) {
					if (this.radius < 40) {
						this.radius += 1;
					}
				} else if (this.radius > this.minRadius) {
					this.radius -= 1
				}
				this.draw();
			};
		}
	}

	const numOfCircle = 800;

	function animate() {
		requestAnimationFrame(animate);

		c.clearRect(0, 0, window.innerWidth, window.innerHeight);

		for (let i = 0; i < circleArray.length; i++){
			circleArray[i].update();
		}

	}

	init();

	animate();
}
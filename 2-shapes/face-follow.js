pacman = function (s) {
	var x1, x2, y1, y2;

	s.setup = function () {
		s.createCanvas(300, 300);
		s.translate(-50, 0);
		s.background(200);
		s.strokeWeight(2);

		// Neck
		s.fill(255, 233, 210);
		s.rect(175, 270, 50, 50);

		// Head
		s.ellipse(200, 180, 150, 200);

		// Hat
		s.strokeWeight(10);
		s.line(100, 120, 300, 120);
		s.fill(0);
		s.rect(140, 30, 120, 80);

		// Eyebrows
		s.strokeWeight(2);
		s.arc(170, 150, 50, 30, s.PI, 0, s.PIE);
		s.arc(230, 150, 50, 30, s.PI, 0, s.PIE);

		// Nose
		s.noFill();
		s.line(200, 180, 200, 210);
		s.arc(200, 200, 30, 20, 0, s.PI);

		// Mouth lower
		s.arc(200, 220, 80, 30, 0, s.PI);

	}

	s.draw = function () {

		// Eyes
		s.fill(255);
		s.ellipse(170, 160, 50, 30);
		s.ellipse(230, 160, 50, 30);
		s.fill(0);

		if (s.mouseX > 0 && s.mouseX < s.width) {
			x1 = s.map(s.mouseX, 0, s.width, 160, 180);
			x2 = s.map(s.mouseX, 0, s.width, 220, 240);
		}

		if (s.mouseY > 0 && s.mouseY < s.height) {
			y1 = s.map(s.mouseY, 0, s.height, 152, 165);
			y2 = s.map(s.mouseY, 0, s.height, 152, 165)
		}

		// Eyes
		s.fill(45, 149, 223);
		s.ellipse(x1, y1, 15, 15);
		s.ellipse(x2, y2, 15, 15);
		s.fill(0);
		s.ellipse(x1, y1, 5, 5);
		s.ellipse(x2, y2, 5, 5);

		s.noFill();
		// Mouth upper
		s.arc(200, 227, 70, 1, s.PI, 0);
	}
}

new p5(pacman, "canvas");

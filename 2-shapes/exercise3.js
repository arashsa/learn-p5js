pacman = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(100);
		s.strokeWeight(2);

		// Head
		s.ellipse(200, 180, 160, 200);

		// Eyebrows
		s.arc(170, 150, 50, 30, s.PI, 0);
		s.arc(230, 150, 50, 30, s.PI, 0);

		// Eyes
		s.ellipse(170, 160, 40, 30);
		s.ellipse(230, 160, 40, 30);
		s.fill(0);
		s.ellipse(170, 160, 10, 10);
		s.ellipse(230, 160, 10, 10);

		// Nose
		s.noFill();
		s.line(200, 180, 200, 210);
		s.arc(200, 200, 30, 20, 0, s.PI);

		// Mouth
		s.arc(200, 220, 80, 20, 0, s.PI);
		s.arc(200, 225, 70, 3, s.PI, 0);
	}

	s.draw = function () {

	}
}

new p5(pacman, "canvas");

line = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(100);
		s.strokeWeight(10);
		s.line(0, 0, 400, 400);
		s.line(0, 400, 400, 0);
	}

	s.draw = function () {

	}
}

new p5(line, "canvas");

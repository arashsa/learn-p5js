exercise2 = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(100);
		s.strokeWeight(10);
		s.line(0, 200, 400, 200);
		s.line(200, 0, 200, 400);
	}

	s.draw = function () {

	}
}

new p5(exercise2, "canvas");

shapes = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(100);
		s.strokeWeight(10);
		s.point(20, 20);
		s.point(20, 200);
		s.point(200, 20);
		s.point(20, 380);
		s.point(200, 380);
		s.point(380, 20);
		s.point(380, 200);
		s.point(380, 380);
	}

	s.draw = function () {

	}
}

new p5(shapes, "canvas");

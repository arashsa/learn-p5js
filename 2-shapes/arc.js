arc = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(100);
		s.arc(200, 200, 100, 100, 0, s.PI);
	}

	s.draw = function () {

	}
}

new p5(arc, "canvas");

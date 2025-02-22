//===================================================================
// マップ情報データベース
//===================================================================
const TR = true;
const FL = false;

const MAP_DATA_ARY = {
	m00: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a01", SE: "a01", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a02", S: "a02", SE: "a02", X: 70, Y: 80 },
		a02: { room: TR, goal: FL, NW: "   ", N: "a01", NE: "a01", W: "   ", E: "   ", SW: "a03", S: "a03", SE: "   ", X: 30, Y: 110 },
		a03: { room: FL, goal: FL, NW: "a02", N: "a02", NE: "a02", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "a04", X: 30, Y: 150 },
		a04: { room: TR, goal: FL, NW: "a03", N: "a03", NE: "   ", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "a05", X: 30, Y: 180 },
		a05: { room: FL, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a04", E: "   ", SW: "a04", S: "   ", SE: "   ", X: 160, Y: 230 },
		a06: { room: FL, goal: FL, NW: "a07", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "a05", S: "a05", SE: "a05", X: 180, Y: 170 },
		a07: { room: TR, goal: FL, NW: "   ", N: "a08", NE: "a08", W: "   ", E: "   ", SW: "   ", S: "a06", SE: "a06", X: 130, Y: 110 },
		a08: { room: FL, goal: FL, NW: "a09", N: "a09", NE: "a09", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a07", X: 220, Y: 80 },
		a09: { room: TR, goal: FL, NW: "a10", N: "   ", NE: "a11", W: "a10", E: "a11", SW: "   ", S: "a08", SE: "   ", X: 180, Y: 0 },
		a10: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a09", W: "   ", E: "a09", SW: "   ", S: "   ", SE: "   ", X: 120, Y: 0 },
		a11: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a12", W: "a09", E: "a12", SW: "a09", S: "   ", SE: "a12", X: 320, Y: 0 },
		a12: { room: TR, goal: FL, NW: "a11", N: "   ", NE: "a13", W: "a11", E: "a13", SW: "   ", S: "   ", SE: "   ", X: 340, Y: 0 },
		a13: { room: TR, goal: FL, NW: "a12", N: "   ", NE: "   ", W: "a12", E: "a14", SW: "   ", S: "   ", SE: "a14", X: 390, Y: 0 },
		a14: { room: FL, goal: FL, NW: "a13", N: "   ", NE: "a15", W: "a13", E: "a15", SW: "a13", S: "   ", SE: "a15", X: 450, Y: 50 },
		a15: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "a14", E: "   ", SW: "a14", S: "a16", SE: "a16", X: 470, Y: 0 },
		a16: { room: FL, goal: FL, NW: "a15", N: "a15", NE: "a15", W: "   ", E: "   ", SW: "a17", S: "a17", SE: "a17", X: 530, Y: 90 },
		a17: { room: TR, goal: FL, NW: "a18", N: "a16", NE: "a16", W: "a18", E: "   ", SW: "a20", S: "a20", SE: "   ", X: 470, Y: 110 },
		a18: { room: FL, goal: FL, NW: "a19", N: "   ", NE: "a17", W: "a19", E: "a17", SW: "a19", S: "   ", SE: "a17", X: 410, Y: 110 },
		a19: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a18", W: "   ", E: "a18", SW: "   ", S: "   ", SE: "   ", X: 320, Y: 110 },
		a20: { room: FL, goal: FL, NW: "a17", N: "a17", NE: "a17", W: "   ", E: "   ", SW: "a21", S: "a21", SE: "a21", X: 470, Y: 150 },
		a21: { room: TR, goal: FL, NW: "a22", N: "a20", NE: "a20", W: "a22", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 430, Y: 210 },
		a22: { room: FL, goal: FL, NW: "a23", N: "   ", NE: "a21", W: "a23", E: "a21", SW: "a23", S: "   ", SE: "a21", X: 410, Y: 210 },
		a23: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a22", W: "a24", E: "a22", SW: "a24", S: "   ", SE: "   ", X: 360, Y: 210 },
		a24: { room: FL, goal: FL, NW: "a25", N: "   ", NE: "a23", W: "a25", E: "a23", SW: "a25", S: "   ", SE: "a23", X: 340, Y: 260 },
		a25: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a24", SW: "   ", S: "   ", SE: "a24", X: 240, Y: 200 }
	},
	m01: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "a01", S: "a01", SE: "   ", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a02", SW: "a03", S: "a03", SE: "   ", X: 10, Y: 90 },
		a02: { room: FL, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "a01", S: "   ", SE: "   ", X: 50, Y: 90 },
		a03: { room: FL, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a04", SE: "a04", X: 10, Y: 150 },
		a04: { room: TR, goal: TR, NW: "a03", N: "a03", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 200 },
		a05: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a06", W: "a00", E: "a06", SW: "a00", S: "   ", SE: "a06", X: 110, Y: 0 },
		a06: { room: FL, goal: FL, NW: "a05", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "a05", S: "   ", SE: "a07", X: 240, Y: 0 },
		a07: { room: FL, goal: FL, NW: "a06", N: "   ", NE: "a08", W: "a06", E: "a08", SW: "a06", S: "   ", SE: "a08", X: 370, Y: 20 },
		a08: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "a07", E: "   ", SW: "a07", S: "a09", SE: "a09", X: 480, Y: 0 },
		a09: { room: TR, goal: FL, NW: "   ", N: "a08", NE: "a08", W: "a10", E: "   ", SW: "a10", S: "   ", SE: "   ", X: 480, Y: 50 },
		a10: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a09", W: "a11", E: "a09", SW: "a11", S: "   ", SE: "a09", X: 400, Y: 120 },
		a11: { room: FL, goal: FL, NW: "a12", N: "   ", NE: "   ", W: "a12", E: "a10", SW: "   ", S: "   ", SE: "a10", X: 340, Y: 70 },
		a12: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a11", W: "   ", E: "a11", SW: "a13", S: "a13", SE: "   ", X: 200, Y: 70 },
		a13: { room: TR, goal: FL, NW: "   ", N: "a12", NE: "a12", W: "   ", E: "   ", SW: "a14", S: "a14", SE: "   ", X: 130, Y: 120 },
		a14: { room: FL, goal: FL, NW: "a13", N: "a13", NE: "a13", W: "   ", E: "   ", SW: "a15", S: "a15", SE: "a15", X: 160, Y: 190 },
		a15: { room: TR, goal: FL, NW: "a14", N: "   ", NE: "a16", W: "a14", E: "a16", SW: "   ", S: "   ", SE: "   ", X: 160, Y: 210 },
		a16: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a17", W: "a15", E: "a17", SW: "a15", S: "   ", SE: "   ", X: 360, Y: 180 },
		a17: { room: TR, goal: FL, NW: "a16", N: "   ", NE: "   ", W: "a16", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 470, Y: 180 }
	},
	m02: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a04", W: "   ", E: "   ", SW: "a01", S: "   ", SE: "a08", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a03", S: "a03", SE: "a03", X: 10, Y: 120 },
		a02: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a03", S: "a03", SE: "a03", X: 100, Y: 120 },
		a03: { room: TR, goal: TR, NW: "a01", N: "   ", NE: "a02", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "a13", X: 10, Y: 170 },
		a04: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a05", W: "a00", E: "a05", SW: "a00", S: "   ", SE: "a05", X: 160, Y: 20 },
		a05: { room: FL, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "a04", S: "   ", SE: "a06", X: 220, Y: 0 },
		a06: { room: FL, goal: FL, NW: "a05", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "a05", S: "   ", SE: "a07", X: 340, Y: 0 },
		a07: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "   ", W: "a06", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 420, Y: 0 },
		a08: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a09", W: "a00", E: "a09", SW: "a00", S: "   ", SE: "a09", X: 160, Y: 70 },
		a09: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "a10", W: "   ", E: "a11", SW: "   ", S: "   ", SE: "   ", X: 200, Y: 70 },
		a10: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "   ", W: "a09", E: "   ", SW: "a09", S: "   ", SE: "   ", X: 370, Y: 70 },
		a11: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "   ", W: "a09", E: "   ", SW: "   ", S: "a15", SE: "a15", X: 370, Y: 140 },
		a12: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a15", S: "a15", SE: "a15", X: 530, Y: 120 },
		a13: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a14", W: "a03", E: "a14", SW: "a03", S: "   ", SE: "a14", X: 160, Y: 260 },
		a14: { room: FL, goal: FL, NW: "a13", N: "   ", NE: "a15", W: "a13", E: "a15", SW: "a13", S: "   ", SE: "a15", X: 290, Y: 260 },
		a15: { room: TR, goal: FL, NW: "   ", N: "a11", NE: "a12", W: "   ", E: "   ", SW: "a14", S: "   ", SE: "   ", X: 420, Y: 180 }
	},
	m03: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 100, Y: 20 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "a03", X: 240, Y: 0 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X: 350, Y: 20 },
		a04: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a07", W: "a03", E: "a07", SW: "a05", S: "   ", SE: "a06", X: 400, Y: 20 },
		a05: { room: FL, goal: FL, NW: "a04", N: "a04", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 400, Y: 50 },
		a06: { room: FL, goal: FL, NW: "   ", N: "a04", NE: "a04", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 440, Y: 50 },
		a07: { room: FL, goal: FL, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "   ", SW: "   ", S: "a08", SE: "a08", X: 470, Y: 20 },
		a08: { room: FL, goal: FL, NW: "a07", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "a09", S: "a09", SE: "   ", X: 530, Y: 100 },
		a09: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a08", W: "a10", E: "a08", SW: "a10", S: "   ", SE: "   ", X: 380, Y: 160 },
		a10: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a09", W: "a11", E: "a09", SW: "a11", S: "   ", SE: "a09", X: 280, Y: 260 },
		a11: { room: FL, goal: FL, NW: "a12", N: "a12", NE: "   ", W: "   ", E: "a10", SW: "   ", S: "   ", SE: "a10", X: 220, Y: 240 },
		a12: { room: FL, goal: FL, NW: "a13", N: "   ", NE: "   ", W: "a13", E: "   ", SW: "   ", S: "a11", SE: "a11", X: 220, Y: 120 },
		a13: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a12", SW: "   ", S: "a14", SE: "   ", X: 130, Y: 70 },
		a14: { room: FL, goal: FL, NW: "   ", N: "a13", NE: "a13", W: "a15", E: "   ", SW: "a15", S: "   ", SE: "   ", X: 170, Y: 190 },
		a15: { room: TR, goal: FL, NW: "a16", N: "a16", NE: "a14", W: "   ", E: "a14", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 210 },
		a16: { room: FL, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a15", S: "a15", SE: "   ", X: 30, Y: 150 }
	},
	m04: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "   ", X: 20, Y: 10 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 110, Y: 30 },
		a02: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "   ", X: 160, Y: 10 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "a08", SE: "   ", X: 270, Y: 10 },
		a04: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "a05", SW: "a03", S: "   ", SE: "a05", X: 310, Y: 30 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "   ", S: "   ", SE: "   ", X: 410, Y: 30 },
		a06: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "   ", W: "a05", E: "   ", SW: "   ", S: "a07", SE: "a07", X: 480, Y: 30 },
		a07: { room: FL, goal: FL, NW: "a06", N: "a06", NE: "a06", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 520, Y: 110 },
		a08: { room: TR, goal: FL, NW: "   ", N: "a03", NE: "   ", W: "a10", E: "a11", SW: "   ", S: "a14", SE: "   ", X: 210, Y: 80 },
		a09: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a10", W: "   ", E: "a10", SW: "   ", S: "   ", SE: "   ", X: 60, Y: 130 },
		a10: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a08", W: "a09", E: "a08", SW: "a09", S: "   ", SE: "a08", X: 120, Y: 130 },
		a11: { room: FL, goal: FL, NW: "a08", N: "   ", NE: "a12", W: "a08", E: "a12", SW: "a08", S: "   ", SE: "a12", X: 390, Y: 130 },
		a12: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "   ", W: "a11", E: "   ", SW: "   ", S: "a13", SE: "a13", X: 470, Y: 130 },
		a13: { room: TR, goal: FL, NW: "a12", N: "a12", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 470, Y: 210 },
		a14: { room: FL, goal: FL, NW: "   ", N: "a08", NE: "a08", W: "a15", E: "   ", SW: "a15", S: "   ", SE: "   ", X: 250, Y: 240 },
		a15: { room: FL, goal: FL, NW: "a16", N: "   ", NE: "   ", W: "a16", E: "a14", SW: "   ", S: "   ", SE: "a14", X: 150, Y: 240 },
		a16: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a15", SW: "   ", S: "   ", SE: "a15", X: 40, Y: 190 }
	},
	m05: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a06", W: "a00", E: "a06", SW: "   ", S: "a02", SE: "   ", X: 100, Y: 0 },
		a02: { room: FL, goal: FL, NW: "   ", N: "a01", NE: "a01", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "   ", X: 120, Y: 40 },
		a03: { room: FL, goal: FL, NW: "a04", N: "   ", NE: "a02", W: "a04", E: "a02", SW: "a04", S: "   ", SE: "a02", X: 50, Y: 110 },
		a04: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "   ", E: "a03", SW: "a05", S: "a05", SE: "   ", X: 10, Y: 110 },
		a05: { room: TR, goal: FL, NW: "a04", N: "a04", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 210 },
		a06: { room: FL, goal: FL, NW: "a01", N: "   ", NE: "a12", W: "a01", E: "a12", SW: "   ", S: "a07", SE: "   ", X: 170, Y: 0 },
		a07: { room: FL, goal: FL, NW: "a06", N: "a06", NE: "a06", W: "   ", E: "   ", SW: "a08", S: "a08", SE: "a08", X: 180, Y: 40 },
		a08: { room: FL, goal: FL, NW: "   ", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "a09", S: "a09", SE: "   ", X: 130, Y: 150 },
		a09: { room: FL, goal: FL, NW: "a08", N: "a08", NE: "   ", W: "   ", E: "a10", SW: "   ", S: "   ", SE: "a10", X: 130, Y: 200 },
		a10: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "a09", E: "a11", SW: "a09", S: "   ", SE: "a11", X: 180, Y: 200 },
		a11: { room: FL, goal: FL, NW: "a10", N: "   ", NE: "   ", W: "a10", E: "   ", SW: "a10", S: "   ", SE: "   ", X: 280, Y: 260 },
		a12: { room: FL, goal: FL, NW: "a06", N: "   ", NE: "a14", W: "a06", E: "a14", SW: "   ", S: "a13", SE: "   ", X: 230, Y: 0 },
		a13: { room: FL, goal: FL, NW: "a12", N: "a12", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 240, Y: 40 },
		a14: { room: FL, goal: FL, NW: "a12", N: "   ", NE: "a15", W: "a12", E: "a15", SW: "a12", S: "   ", SE: "a15", X: 290, Y: 0 },
		a15: { room: TR, goal: FL, NW: "a14", N: "   ", NE: "a17", W: "a14", E: "a17", SW: "   ", S: "a16", SE: "   ", X: 340, Y: 0 },
		a16: { room: FL, goal: FL, NW: "   ", N: "a15", NE: "a15", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 300, Y: 90 },
		a17: { room: TR, goal: FL, NW: "a15", N: "   ", NE: "a18", W: "a15", E: "a18", SW: "   ", S: "   ", SE: "   ", X: 370, Y: 0 },
		a18: { room: FL, goal: FL, NW: "a17", N: "   ", NE: "a23", W: "a17", E: "a23", SW: "   ", S: "a19", SE: "   ", X: 430, Y: 0 },
		a19: { room: FL, goal: FL, NW: "a18", N: "a18", NE: "a18", W: "   ", E: "   ", SW: "a20", S: "a20", SE: "a20", X: 450, Y: 40 },
		a20: { room: TR, goal: FL, NW: "   ", N: "a19", NE: "a19", W: "   ", E: "   ", SW: "a21", S: "a21", SE: "   ", X: 400, Y: 110 },
		a21: { room: FL, goal: FL, NW: "a20", N: "a20", NE: "a20", W: "   ", E: "   ", SW: "a22", S: "a22", SE: "a22", X: 400, Y: 190 },
		a22: { room: TR, goal: FL, NW: "   ", N: "a21", NE: "a21", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 300, Y: 230 },
		a23: { room: FL, goal: FL, NW: "a18", N: "   ", NE: "   ", W: "a18", E: "   ", SW: "   ", S: "a24", SE: "a24", X: 510, Y: 0 },
		a24: { room: FL, goal: FL, NW: "a23", N: "a23", NE: "a23", W: "   ", E: "   ", SW: "a25", S: "a25", SE: "a25", X: 530, Y: 80 },
		a25: { room: FL, goal: FL, NW: "   ", N: "a24", NE: "a24", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 470, Y: 190 }
	},
	m06: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a01", SW: "a05", S: "a05", SE: "a01", X: 30, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 140, Y: 50 },
		a02: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "   ", X: 160, Y: 0 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X: 220, Y: 0 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "   ", W: "a03", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 240, Y: 0 },
		a05: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a06", S: "a06", SE: "a06", X: 70, Y: 90 },
		a06: { room: TR, goal: FL, NW: "   ", N: "a05", NE: "a05", W: "   ", E: "a07", SW: "a09", S: "a09", SE: "a07", X: 10, Y: 140 },
		a07: { room: FL, goal: FL, NW: "a06", N: "   ", NE: "a08", W: "a06", E: "a08", SW: "a06", S: "   ", SE: "a08", X: 100, Y: 160 },
		a08: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "a07", E: "   ", SW: "a07", S: "   ", SE: "   ", X: 160, Y: 110 },
		a09: { room: FL, goal: FL, NW: "a06", N: "a06", NE: "a06", W: "   ", E: "   ", SW: "a10", S: "a10", SE: "a10", X: 10, Y: 190 },
		a10: { room: TR, goal: FL, NW: "a09", N: "a09", NE: "a11", W: "   ", E: "a11", SW: "   ", S: "   ", SE: "   ", X: 10, Y: 210 },
		a11: { room: FL, goal: FL, NW: "a10", N: "   ", NE: "a12", W: "a10", E: "a12", SW: "a10", S: "   ", SE: "a12", X: 100, Y: 210 },
		a12: { room: TR, goal: FL, NW: "a11", N: "   ", NE: "a13", W: "a11", E: "a13", SW: "   ", S: "   ", SE: "   ", X: 130, Y: 210 },
		a13: { room: TR, goal: FL, NW: "a12", N: "   ", NE: "   ", W: "a12", E: "a14", SW: "   ", S: "   ", SE: "a14", X: 180, Y: 210 },
		a14: { room: FL, goal: FL, NW: "a13", N: "   ", NE: "a15", W: "a13", E: "a15", SW: "a13", S: "   ", SE: "a15", X: 230, Y: 260 },
		a15: { room: TR, goal: TR, NW: "   ", N: "a17", NE: "   ", W: "a14", E: "a16", SW: "a14", S: "   ", SE: "   ", X: 260, Y: 200 },
		a16: { room: TR, goal: FL, NW: "a15", N: "   ", NE: "   ", W: "a15", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 390, Y: 210 },
		a17: { room: FL, goal: FL, NW: "a18", N: "a18", NE: "a18", W: "   ", E: "   ", SW: "a15", S: "a15", SE: "a15", X: 320, Y: 190 },
		a18: { room: TR, goal: FL, NW: "a19", N: "a19", NE: "   ", W: "   ", E: "   ", SW: "a17", S: "a17", SE: "   ", X: 320, Y: 120 },
		a19: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a20", W: "   ", E: "a20", SW: "a18", S: "a18", SE: "   ", X: 360, Y: 0 },
		a20: { room: TR, goal: FL, NW: "a19", N: "   ", NE: "   ", W: "a19", E: "   ", SW: "   ", S: "a21", SE: "a21", X: 420, Y: 0 },
		a21: { room: FL, goal: FL, NW: "a20", N: "a20", NE: "a20", W: "   ", E: "   ", SW: "a22", S: "a22", SE: "a22", X: 510, Y: 120 },
		a22: { room: TR, goal: FL, NW: "   ", N: "a21", NE: "a21", W: "   ", E: "   ", SW: "a23", S: "a23", SE: "   ", X: 470, Y: 140 },
		a23: { room: FL, goal: FL, NW: "a22", N: "a22", NE: "a22", W: "   ", E: "   ", SW: "a24", S: "a24", SE: "a24", X: 470, Y: 190 },
		a24: { room: TR, goal: FL, NW: "a23", N: "a23", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 470, Y: 210 }
	}
};

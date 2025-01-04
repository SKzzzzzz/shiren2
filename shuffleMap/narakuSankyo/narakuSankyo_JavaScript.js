//===================================================================
// マップ情報データベース
//===================================================================
const TR = true;
const FL = false;

const MAP_DATA_ARY = {
	m00: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a07", S: "a07", SE: "   ", X: 20, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 200, Y: 10 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "a03", X: 320, Y: 0 },
		a03: { room: TR, goal: TR, NW: "a02", N: "a02", NE: "   ", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "   ", X: 390, Y: 130 },
		a04: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a03", W: "a05", E: "a03", SW: "a05", S: "   ", SE: "a03", X: 190, Y: 210 },
		a05: { room: TR, goal: FL, NW: "   ", N: "a07", NE: "   ", W: "a06", E: "a04", SW: "a06", S: "   ", SE: "a04", X: 100, Y: 210 },
		a06: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "a05", X: 20, Y: 210 },
		a07: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a05", S: "a05", SE: "a05", X: 120, Y: 120 }
	},
	m01: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a05", S: "a05", SE: "   ", X: 50, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "   ", W: "a00", E: "a02", SW: "   ", S: "a06", SE: "a02", X: 140, Y: 10 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "a03", SW: "   ", S: "   ", SE: "a03", X: 330, Y: 40 },
		a03: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "   ", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "   ", X: 410, Y: 80 },
		a04: { room: TR, goal: FL, NW: "a05", N: "a06", NE: "a03", W: "a05", E: "a03", SW: "   ", S: "   ", SE: "   ", X: 210, Y: 190 },
		a05: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 20, Y: 100 },
		a06: { room: FL, goal: FL, NW: "a01", N: "a01", NE: "a01", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "a04", X: 240, Y: 90 }
	},
	m02: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a06", S: "a06", SE: "   ", X: 110, Y: 0 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 250, Y: 0 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "a03", X: 360, Y: 0 },
		a03: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a04", SE: "a04", X: 420, Y: 110 },
		a04: { room: TR, goal: TR, NW: "a03", N: "a03", NE: "   ", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X: 420, Y: 200 },
		a05: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "a04", W: "a06", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 170, Y: 180 },
		a06: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a00", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a05", X: 20, Y: 110 },
		a07: { room: TR, goal: FL, NW: "a06", N: "a06", NE: "a06", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 50, Y: 220 }
	},
	m03: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a05", S: "a05", SE: "   ", X: 40, Y: 0 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "   ", W: "a00", E: "a02", SW: "   ", S: "a06", SE: "a02", X: 230, Y: 0 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "   ", X: 460, Y: 50 },
		a03: { room: TR, goal: FL, NW: "   ", N: "a06", NE: "a02", W: "a04", E: "a02", SW: "a04", S: "   ", SE: "   ", X: 310, Y: 160 },
		a04: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a03", W: "a05", E: "a03", SW: "   ", S: "   ", SE: "   ", X: 190, Y: 230 },
		a05: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 40, Y: 120 },
		a06: { room: FL, goal: FL, NW: "a01", N: "a01", NE: "a01", W: "   ", E: "   ", SW: "a03", S: "a03", SE: "a03", X: 360, Y: 90 }
	},
	m04: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a08", S: "a08", SE: "   ", X: 20, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 120, Y: 20 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "a03", X: 380, Y: 0 },
		a03: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "a02", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "a04", X: 380, Y: 70 },
		a04: { room: TR, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X: 390, Y: 190 },
		a05: { room: FL, goal: FL, NW: "a06", N: "   ", NE: "a04", W: "a06", E: "a04", SW: "a06", S: "   ", SE: "a04", X: 320, Y: 240 },
		a06: { room: TR, goal: FL, NW: "a07", N: "   ", NE: "a05", W: "a07", E: "a05", SW: "a07", S: "   ", SE: "a05", X: 200, Y: 220 },
		a07: { room: TR, goal: FL, NW: "a08", N: "a08", NE: "a08", W: "   ", E: "a06", SW: "   ", S: "   ", SE: "a06", X: 40, Y: 190 },
		a08: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a07", X: 20, Y: 70 }
	},
	m05: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a07", S: "a07", SE: "   ", X: 30, Y: 0 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X: 110, Y: 0 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "a03", X: 310, Y: 0 },
		a03: { room: TR, goal: TR, NW: "a02", N: "a02", NE: "a02", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "   ", X: 430, Y: 110 },
		a04: { room: TR, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X: 370, Y: 230 },
		a05: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "a04", W: "a06", E: "a04", SW: "a06", S: "   ", SE: "a04", X: 260, Y: 230 },
		a06: { room: TR, goal: FL, NW: "a07", N: "a07", NE: "   ", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "a05", X: 110, Y: 200 },
		a07: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a06", SE: "a06", X: 20, Y: 90 }
	}
};

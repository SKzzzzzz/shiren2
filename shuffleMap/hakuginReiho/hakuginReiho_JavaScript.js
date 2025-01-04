//===================================================================
// マップ情報データベース
//===================================================================
const TR = true;
const FL = false;

const MAP_DATA_ARY = {
	m00: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "   ", E: "a03", SW: "a01", S: "a01", SE: "   ", X: 30, Y: 20 },
		a01: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "a02", W: "   ", E: "a02", SW: "a15", S: "a15", SE: "   ", X: 30, Y: 80 },
		a02: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "   ", X:100, Y: 90 },
		a03: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a04", W: "   ", E: "a04", SW: "a02", S: "   ", SE: "a04", X:130, Y: 20 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "a06", X:220, Y: 10 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a07", W: "a04", E: "a07", SW: "a04", S: "   ", SE: "a07", X:300, Y: 10 },
		a06: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a07", W: "a04", E: "a07", SW: "a04", S: "   ", SE: "a07", X:300, Y: 70 },
		a07: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a08", W: "   ", E: "a08", SW: "a06", S: "   ", SE: "a08", X:360, Y: 10 },
		a08: { room: FL, goal: FL, NW: "a07", N: "   ", NE: "   ", W: "a07", E: "   ", SW: "   ", S: "a09", SE: "a09", X:440, Y: 60 },
		a09: { room: TR, goal: FL, NW: "   ", N: "a08", NE: "a08", W: "   ", E: "   ", SW: "a10", S: "a10", SE: "a10", X:440, Y: 80 },
		a10: { room: TR, goal: FL, NW: "   ", N: "a09", NE: "a09", W: "a11", E: "   ", SW: "a11", S: "   ", SE: "   ", X:430, Y:160 },
		a11: { room: FL, goal: FL, NW: "a12", N: "   ", NE: "a10", W: "a12", E: "a10", SW: "a12", S: "   ", SE: "a10", X:340, Y:210 },
		a12: { room: TR, goal: FL, NW: "a13", N: "   ", NE: "a11", W: "   ", E: "a11", SW: "a13", S: "   ", SE: "   ", X:260, Y:190 },
		a13: { room: TR, goal: FL, NW: "a14", N: "   ", NE: "a12", W: "a14", E: "   ", SW: "   ", S: "   ", SE: "a12", X:180, Y:190 },
		a14: { room: FL, goal: FL, NW: "a15", N: "   ", NE: "a13", W: "a15", E: "a13", SW: "a15", S: "   ", SE: "a13", X:110, Y:210 },
		a15: { room: TR, goal: TR, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a14", SW: "   ", S: "   ", SE: "a14", X: 40, Y:140 }
	},
	m01: {
		a00: { room: TR, goal: TR, NW: "a12", N: "   ", NE: "   ", W: "a12", E: "   ", SW: "   ", S: "a01", SE: "a01", X:370, Y: 10 },
		a01: { room: TR, goal: FL, NW: "   ", N: "a00", NE: "a00", W: "a02", E: "   ", SW: "a02", S: "   ", SE: "   ", X:470, Y: 80 },
		a02: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "a03", E: "a01", SW: "a03", S: "   ", SE: "   ", X:410, Y:150 },
		a03: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a02", W: "a04", E: "a02", SW: "a04", S: "   ", SE: "   ", X:360, Y:190 },
		a04: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "   ", W: "   ", E: "a03", SW: "a05", S: "   ", SE: "a03", X:280, Y:190 },
		a05: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "a04", W: "a06", E: "   ", SW: "   ", S: "   ", SE: "a04", X:190, Y:190 },
		a06: { room: TR, goal: FL, NW: "a07", N: "   ", NE: "a07", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "a05", X: 60, Y:170 },
		a07: { room: TR, goal: FL, NW: "a08", N: "a08", NE: "a08", W: "   ", E: "   ", SW: "a06", S: "   ", SE: "a06", X: 60, Y:130 },
		a08: { room: TR, goal: FL, NW: "a09", N: "a09", NE: "   ", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a07", X: 40, Y: 80 },
		a09: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a10", W: "   ", E: "a10", SW: "a08", S: "a08", SE: "   ", X: 40, Y: 10 },
		a10: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a11", W: "a09", E: "a11", SW: "a09", S: "   ", SE: "a11", X:120, Y: 40 },
		a11: { room: TR, goal: FL, NW: "a10", N: "   ", NE: "a12", W: "a10", E: "a12", SW: "a10", S: "   ", SE: "a12", X:180, Y: 10 },
		a12: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a00", W: "a11", E: "a00", SW: "a11", S: "   ", SE: "a00", X:300, Y: 40 }
	},
	m02: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "a11", E: "a01", SW: "a11", S: "   ", SE: "   ", X:110, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X:210, Y: 20 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "a03", X:300, Y: 10 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "   ", W: "a02", E: "   ", SW: "   ", S: "a04", SE: "a04", X:390, Y: 0 },
		a04: { room: TR, goal: TR, NW: "   ", N: "a03", NE: "a03", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X:480, Y:110 },
		a05: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "a04", W: "a06", E: "a04", SW: "a06", S: "   ", SE: "a04", X:390, Y:180 },
		a06: { room: TR, goal: FL, NW: "a07", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "a07", S: "   ", SE: "a05", X:300, Y:190 },
		a07: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "a06", W: "a08", E: "   ", SW: "a08", S: "   ", SE: "a06", X:210, Y:190 },
		a08: { room: TR, goal: FL, NW: "a10", N: "a10", NE: "   ", W: "   ", E: "a07", SW: "a09", S: "a09", SE: "a07", X:110, Y:200 },
		a09: { room: TR, goal: FL, NW: "a10", N: "a10", NE: "   ", W: "   ", E: "a08", SW: "   ", S: "   ", SE: "a08", X: 50, Y:200 },
		a10: { room: TR, goal: FL, NW: "a11", N: "a11", NE: "   ", W: "   ", E: "   ", SW: "a09", S: "   ", SE: "a08", X: 50, Y:160 },
		a11: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a00", W: "   ", E: "a00", SW: "a10", S: "a10", SE: "   ", X: 40, Y: 60 }
	},
	m03: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "   ", SW: "a08", S: "a08", SE: "a01", X: 50, Y: 20 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "   ", E: "a02", SW: "a00", S: "   ", SE: "   ", X:100, Y: 20 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "a03", SW: "   ", S: "   ", SE: "a03", X:180, Y: 20 },
		a03: { room: TR, goal: TR, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:270, Y: 40 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "   ", W: "a03", E: "   ", SW: "   ", S: "a05", SE: "a05", X:370, Y: 20 },
		a05: { room: TR, goal: FL, NW: "   ", N: "a04", NE: "a04", W: "a06", E: "   ", SW: "a06", S: "   ", SE: "   ", X:370, Y:140 },
		a06: { room: TR, goal: FL, NW: "a07", N: "   ", NE: "a05", W: "a07", E: "a05", SW: "a07", S: "   ", SE: "a05", X:200, Y:180 },
		a07: { room: TR, goal: FL, NW: "a08", N: "a08", NE: "   ", W: "   ", E: "a06", SW: "   ", S: "   ", SE: "a06", X: 60, Y:200 },
		a08: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a07", X: 30, Y:100 }
	},
	m04: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a09", W: "   ", E: "a09", SW: "a01", S: "a01", SE: "   ", X: 20, Y: 20 },
		a01: { room: TR, goal: FL, NW: "   ", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a02", S: "   ", SE: "a02", X: 40, Y:120 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a01", W: "   ", E: "a03", SW: "   ", S: "   ", SE: "a03", X: 40, Y:200 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:160, Y:220 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "a05", SW: "a03", S: "   ", SE: "a05", X:260, Y:210 },
		a05: { room: FL, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a04", E: "   ", SW: "a04", S: "   ", SE: "   ", X:380, Y:230 },
		a06: { room: TR, goal: FL, NW: "a07", N: "a07", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a05", SE: "a05", X:430, Y:120 },
		a07: { room: TR, goal: TR, NW: "a08", N: "   ", NE: "   ", W: "a08", E: "   ", SW: "   ", S: "a06", SE: "a06", X:410, Y: 30 },
		a08: { room: TR, goal: FL, NW: "a09", N: "   ", NE: "   ", W: "a09", E: "a07", SW: "   ", S: "   ", SE: "a07", X:310, Y: 10 },
		a09: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a08", W: "a00", E: "a08", SW: "a00", S: "   ", SE: "a08", X:140, Y: 20 }
	},
	m05: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a10", W: "   ", E: "   ", SW: "a01", S: "a01", SE: "a10", X: 50, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a02", S: "a02", SE: "a02", X: 30, Y: 70 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a03", SW: "   ", S: "   ", SE: "a03", X: 30, Y:150 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:120, Y:190 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "a05", X:280, Y:180 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "   ", E: "a06", SW: "a04", S: "   ", SE: "   ", X:380, Y:180 },
		a06: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "a07", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X:430, Y:140 },
		a07: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "   ", W: "a08", E: "   ", SW: "   ", S: "a06", SE: "a06", X:490, Y: 70 },
		a08: { room: TR, goal: FL, NW: "a09", N: "   ", NE: "   ", W: "a09", E: "a07", SW: "a06", S: "a06", SE: "a07", X:420, Y: 30 },
		a09: { room: TR, goal: FL, NW: "a10", N: "   ", NE: "a08", W: "   ", E: "a08", SW: "a10", S: "   ", SE: "a08", X:300, Y: 10 },
		a10: { room: TR, goal: TR, NW: "a00", N: "   ", NE: "a09", W: "   ", E: "   ", SW: "a00", S: "   ", SE: "a09", X:140, Y: 10 }
	}
};

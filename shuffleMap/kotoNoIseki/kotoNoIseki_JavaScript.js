//===================================================================
// マップ情報データベース
//===================================================================
const TR = true;
const FL = false;

const MAP_DATA_ARY = {
	m00: {
		a00: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "a03", W: "   ", E: "a03", SW: "a01", S: "a02", SE: "   ", X: 20, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a15", S: "a15", SE: "a15", X: 20, Y: 80 },
		a02: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 70, Y: 80 },
		a03: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a05", W: "a00", E: "a05", SW: "   ", S: "a04", SE: "   ", X:150, Y: 30 },
		a04: { room: FL, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "a02", E: "   ", SW: "a02", S: "a17", SE: "a17", X:170, Y: 60 },
		a05: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a06", W: "a03", E: "a06", SW: "a03", S: "   ", SE: "a06", X:230, Y: 30 },
		a06: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a07", S: "   ", SE: "a09", X:460, Y: 30 },
		a07: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a06", W: "   ", E: "a06", SW: "a08", S: "a08", SE: "   ", X:430, Y: 90 },
		a08: { room: TR, goal: FL, NW: "a07", N: "a07", NE: "   ", W: "   ", E: "a09", SW: "   ", S: "   ", SE: "a09", X:430, Y:120 },
		a09: { room: FL, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a08", E: "   ", SW: "   ", S: "a10", SE: "a10", X:530, Y:120 },
		a10: { room: TR, goal: FL, NW: "   ", N: "a09", NE: "a09", W: "a11", E: "   ", SW: "a11", S: "   ", SE: "   ", X:470, Y:200 },
		a11: { room: FL, goal: FL, NW: "a12", N: "   ", NE: "a10", W: "a12", E: "a10", SW: "a12", S: "   ", SE: "a10", X:370, Y:250 },
		a12: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a11", W: "a13", E: "a11", SW: "a13", S: "   ", SE: "a11", X:280, Y:250 },
		a13: { room: FL, goal: FL, NW: "a14", N: "   ", NE: "a12", W: "a14", E: "a12", SW: "a14", S: "   ", SE: "a12", X: 90, Y:270 },
		a14: { room: FL, goal: FL, NW: "a15", N: "a15", NE: "   ", W: "   ", E: "a13", SW: "   ", S: "   ", SE: "a13", X: 20, Y:200 },
		a15: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a16", SW: "a14", S: "a14", SE: "   ", X: 20, Y:130 },
		a16: { room: FL, goal: FL, NW: "a15", N: "   ", NE: "a17", W: "a15", E: "a17", SW: "a15", S: "   ", SE: "a17", X: 90, Y:170 },
		a17: { room: TR, goal: FL, NW: "   ", N: "a04", NE: "a04", W: "a16", E: "   ", SW: "a16", S: "   ", SE: "   ", X:130, Y:140 }
	},
	m01: {
		a00: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "a15", W: "   ", E: "a15", SW: "a14", S: "   ", SE: "a14", X: 10, Y: 80 },
		a01: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a02", W: "   ", E: "a02", SW: "a00", S: "a00", SE: "   ", X: 10, Y: 0 },
		a02: { room: FL, goal: FL, NW: "a01", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "   ", S: "a15", SE: "   ", X: 90, Y: 0 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:140, Y: 0 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "a05", SW: "   ", S: "a10", SE: "   ", X:280, Y: 0 },
		a05: { room: TR, goal: TR, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "   ", SW: "   ", S: "a06", SE: "a06", X:420, Y: 30 },
		a06: { room: FL, goal: FL, NW: "a05", N: "a05", NE: "a05", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "a07", X:480, Y:130 },
		a07: { room: TR, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a08", E: "   ", SW: "a08", S: "   ", SE: "   ", X:440, Y:200 },
		a08: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a07", W: "a09", E: "a07", SW: "a09", S: "   ", SE: "a07", X:390, Y:230 },
		a09: { room: TR, goal: FL, NW: "   ", N: "a10", NE: "a10", W: "a11", E: "a08", SW: "a11", S: "   ", SE: "a08", X:290, Y:180 },
		a10: { room: FL, goal: FL, NW: "a04", N: "a04", NE: "a04", W: "   ", E: "   ", SW: "a09", S: "a09", SE: "a09", X:350, Y: 90 },
		a11: { room: TR, goal: FL, NW: "a12", N: "   ", NE: "a09", W: "a12", E: "a09", SW: "a12", S: "   ", SE: "a09", X:160, Y:220 },
		a12: { room: TR, goal: FL, NW: "a13", N: "   ", NE: "a11", W: "a13", E: "a11", SW: "   ", S: "   ", SE: "a11", X:110, Y:220 },
		a13: { room: TR, goal: FL, NW: "a14", N: "a14", NE: "   ", W: "   ", E: "a12", SW: "   ", S: "   ", SE: "a12", X: 10, Y:180 },
		a14: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a00", W: "   ", E: "   ", SW: "a13", S: "a13", SE: "   ", X: 10, Y:130 },
		a15: { room: FL, goal: FL, NW: "   ", N: "a02", NE: "a02", W: "a00", E: "   ", SW: "a00", S: "   ", SE: "   ", X:100, Y: 80 }
	},
	m02: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a12", W: "   ", E: "a12", SW: "a01", S: "a01", SE: "   ", X: 20, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a02", SW: "   ", S: "   ", SE: "a02", X: 20, Y: 90 },
		a02: { room: FL, goal: FL, NW: "a01", N: "   ", NE: "a11", W: "a01", E: "a11", SW: "a03", S: "a03", SE: "   ", X:160, Y: 90 },
		a03: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X:160, Y:240 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "a05", SW: "a03", S: "   ", SE: "a05", X:260, Y:270 },
		a05: { room: FL, goal: FL, NW: "a07", N: "   ", NE: "a06", W: "   ", E: "a06", SW: "a04", S: "   ", SE: "a06", X:390, Y:250 },
		a06: { room: TR, goal: FL, NW: "   ", N: "a09", NE: "a09", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X:470, Y:210 },
		a07: { room: TR, goal: FL, NW: "a08", N: "a08", NE: "a08", W: "   ", E: "a08", SW: "   ", S: "a05", SE: "a05", X:360, Y:180 },
		a08: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a09", W: "   ", E: "a09", SW: "a07", S: "a07", SE: "a09", X:360, Y:150 },
		a09: { room: FL, goal: FL, NW: "   ", N: "a10", NE: "a10", W: "a08", E: "   ", SW: "a08", S: "a06", SE: "a06", X:530, Y:120 },
		a10: { room: TR, goal: TR, NW: "a12", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a11", S: "   ", SE: "a09", X:460, Y: 30 },
		a11: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a10", W: "a02", E: "a10", SW: "a02", S: "   ", SE: "a10", X:220, Y: 90 },
		a12: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a10", W: "a00", E: "a10", SW: "a00", S: "   ", SE: "a10", X:150, Y: 30 }
	},
	m03: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "a01", X:170, Y: 10 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "   ", S: "a05", SE: "   ", X:310, Y: 50 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "a03", X:440, Y: 0 },
		a03: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "a02", W: "   ", E: "   ", SW: "a04", S: "a04", SE: "a04", X:460, Y:110 },
		a04: { room: TR, goal: FL, NW: "a05", N: "a03", NE: "a03", W: "   ", E: "   ", SW: "a07", S: "   ", SE: "   ", X:440, Y:210 },
		a05: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a08", E: "a04", SW: "   ", S: "a06", SE: "   ", X:310, Y:170 },
		a06: { room: TR, goal: FL, NW: "a05", N: "a05", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a07", SE: "a07", X:300, Y:230 },
		a07: { room: FL, goal: FL, NW: "   ", N: "a06", NE: "   ", W: "a08", E: "a04", SW: "a08", S: "   ", SE: "a04", X:310, Y:270 },
		a08: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a05", W: "   ", E: "   ", SW: "a12", S: "   ", SE: "a07", X:200, Y:210 },
		a09: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a08", W: "a11", E: "a08", SW: "   ", S: "a10", SE: "   ", X: 80, Y:210 },
		a10: { room: TR, goal: FL, NW: "a09", N: "a09", NE: "a09", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:120, Y:230 },
		a11: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a09", W: "   ", E: "a09", SW: "a12", S: "a12", SE: "   ", X: 10, Y:150 },
		a12: { room: FL, goal: TR, NW: "a11", N: "a11", NE: "   ", W: "   ", E: "a08", SW: "   ", S: "   ", SE: "a08", X: 10, Y:240 }
	},
	m04: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "a04", S: "a04", SE: "   ", X: 10, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X:140, Y: 50 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "   ", S: "a10", SE: "   ", X:310, Y: 0 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "   ", W: "a02", E: "   ", SW: "a02", S: "   ", SE: "   ", X:420, Y: 0 },
		a04: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a05", SW: "a06", S: "a06", SE: "   ", X: 10, Y:110 },
		a05: { room: FL, goal: FL, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "   ", SW: "   ", S: "a06", SE: "a06", X: 60, Y:140 },
		a06: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a05", W: "   ", E: "a07", SW: "   ", S: "   ", SE: "a07", X: 10, Y:230 },
		a07: { room: FL, goal: FL, NW: "a06", N: "   ", NE: "a08", W: "a06", E: "a08", SW: "a06", S: "   ", SE: "a08", X:100, Y:270 },
		a08: { room: TR, goal: FL, NW: "a09", N: "a09", NE: "   ", W: "a07", E: "a13", SW: "a07", S: "   ", SE: "a13", X:180, Y:230 },
		a09: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a11", W: "   ", E: "a11", SW: "a08", S: "a08", SE: "   ", X:180, Y:200 },
		a10: { room: FL, goal: FL, NW: "a02", N: "a02", NE: "a02", W: "   ", E: "   ", SW: "a11", S: "a11", SE: "a11", X:350, Y:110 },
		a11: { room: TR, goal: FL, NW: "a10", N: "a10", NE: "   ", W: "a09", E: "a12", SW: "a09", S: "   ", SE: "a12", X:350, Y:170 },
		a12: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a14", W: "a11", E: "a14", SW: "a11", S: "   ", SE: "a14", X:420, Y:210 },
		a13: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "a14", W: "a08", E: "a14", SW: "a08", S: "   ", SE: "a14", X:280, Y:270 },
		a14: { room: TR, goal: TR, NW: "a12", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a13", S: "   ", SE: "   ", X:460, Y:210 }
	},
	m05: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a04", W: "   ", E: "a04", SW: "a01", S: "a01", SE: "   ", X: 10, Y: 0 },
		a01: { room: FL, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a02", S: "a02", SE: "a02", X: 80, Y:100 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a03", SW: "   ", S: "   ", SE: "a03", X: 10, Y:200 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a09", W: "a02", E: "a09", SW: "a02", S: "   ", SE: "a09", X:150, Y:230 },
		a04: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a05", W: "a00", E: "a05", SW: "a00", S: "   ", SE: "a05", X:150, Y: 50 },
		a05: { room: TR, goal: TR, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "a04", S: "   ", SE: "a06", X:240, Y: 10 },
		a06: { room: FL, goal: FL, NW: "a05", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "a05", S: "   ", SE: "a07", X:370, Y: 50 },
		a07: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "   ", W: "a06", E: "   ", SW: "   ", S: "a08", SE: "a08", X:420, Y: 0 },
		a08: { room: FL, goal: FL, NW: "a07", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "a09", S: "a09", SE: "a09", X:460, Y:100 },
		a09: { room: TR, goal: FL, NW: "   ", N: "a08", NE: "a08", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "   ", X:420, Y:200 }
	},
	m99: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 0, Y: 0 },
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X: 0, Y: 0 }
	}
};

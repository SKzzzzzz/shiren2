//===================================================================
// 定数ほか
//===================================================================
const CLR_BLUE = "RGB(170,200,255)";
const CLR_GRAY = "RGB(170,170,170)";

const TR = true;
const FL = false;


//===================================================================
// マップ情報データベース
//===================================================================
const MAP_DATA_ARY = {
	m00: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a13", W: "   ", E: "a13", SW: "a01", S: "a01", SE: "   ", X: 20, Y: 10 },
		a01: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a02", SW: "   ", S: "   ", SE: "a02", X: 20, Y: 90 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a13", NE: "a13", W: "a01", E: "   ", SW: "   ", S: "a03", SE: "   ", X:140, Y: 90 },
		a03: { room: FL, goal: FL, NW: "   ", N: "a02", NE: "   ", W: "a04", E: "a05", SW: "a04", S: "   ", SE: "a05", X:150, Y:180 },
		a04: { room: TR, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "   ", E: "   ", SW: "   ", S: "a05", SE: "a05", X: 20, Y:190 },
		a05: { room: TR, goal: FL, NW: "a03", N: "a03", NE: "a06", W: "a04", E: "a06", SW: "a04", S: "   ", SE: "a06", X:170, Y:190 },
		a06: { room: TR, goal: FL, NW: "   ", N: "a07", NE: "   ", W: "a05", E: "a08", SW: "a05", S: "   ", SE: "a08", X:290, Y:190 },
		a07: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a06", S: "a06", SE: "a06", X:310, Y:140 },
		a08: { room: TR, goal: FL, NW: "   ", N: "a10", NE: "   ", W: "a06", E: "a09", SW: "a06", S: "   ", SE: "   ", X:450, Y:210 },
		a09: { room: FL, goal: TR, NW: "a08", N: "   ", NE: "   ", W: "a08", E: "   ", SW: "a08", S: "   ", SE: "   ", X:520, Y:220 },
		a10: { room: TR, goal: FL, NW: "a11", N: "a11", NE: "a11", W: "   ", E: "   ", SW: "a08", S: "a08", SE: "a08", X:430, Y:140 },
		a11: { room: FL, goal: FL, NW: "a12", N: "a12", NE: "   ", W: "   ", E: "   ", SW: "   ", S: "a10", SE: "a10", X:430, Y:100 },
		a12: { room: TR, goal: FL, NW: "a13", N: "   ", NE: "   ", W: "a13", E: "   ", SW: "   ", S: "a11", SE: "a11", X:350, Y: 0 },
		a13: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a12", W: "a00", E: "a12", SW: "a02", S: "a02", SE: "   ", X:200, Y: 0 }
	},
	m01: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "   ", E: "a03", SW: "a01", S: "a01", SE: "   ", X: 90, Y: 30 },
		a01: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "a02", S: "a02", SE: "a02", X: 90, Y:120 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "a04", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "a05", X:100, Y:200 },
		a03: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "   ", W: "a00", E: "a06", SW: "a04", S: "a04", SE: "a06", X:180, Y: 70 },
		a04: { room: FL, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "   ", E: "   ", SW: "a02", S: "a02", SE: "   ", X:180, Y:140 },
		a05: { room: TR, goal: FL, NW: "a02", N: "a02", NE: "   ", W: "a02", E: "   ", SW: "   ", S: "   ", SE: "   ", X:200, Y:210 },
		a06: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a07", W: "a03", E: "a07", SW: "a03", S: "   ", SE: "a07", X:260, Y: 90 },
		a07: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "   ", W: "a06", E: "   ", SW: "   ", S: "a08", SE: "a08", X:320, Y: 10 },
		a08: { room: TR, goal: FL, NW: "a07", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:320, Y:160 }
	},
	m02: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a02", W: "   ", E: "a02", SW: "a01", S: "a01", SE: "   ", X: 20, Y: 10 },
		a01: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a09", SW: "   ", S: "   ", SE: "a09", X: 30, Y:170 },
		a02: { room: FL, goal: FL, NW: "a00", N: "a03", NE: "a03", W: "a00", E: "   ", SW: "   ", S: "a04", SE: "a04", X:160, Y: 50 },
		a03: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "a02", E: "a05", SW: "a02", S: "   ", SE: "a05", X:180, Y: 20 },
		a04: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a05", W: "a02", E: "a05", SW: "   ", S: "   ", SE: "   ", X:170, Y: 70 },
		a05: { room: FL, goal: FL, NW: "a03", N: "a03", NE: "   ", W: "   ", E: "a06", SW: "a04", S: "a04", SE: "   ", X:270, Y: 50 },
		a06: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "   ", S: "a10", SE: "a10", X:300, Y: 20 },
		a07: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "   ", W: "a06", E: "   ", SW: "   ", S: "a08", SE: "a08", X:430, Y: 10 },
		a08: { room: TR, goal: FL, NW: "a07", N: "a07", NE: "a07", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:500, Y: 90 },
		a09: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a10", W: "a01", E: "a10", SW: "a01", S: "   ", SE: "a10", X:150, Y:180 },
		a10: { room: TR, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a09", E: "   ", SW: "a09", S: "   ", SE: "   ", X:350, Y:160 }
	},
	m03: {
		a00: { room: TR, goal: TR, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "a01", S: "   ", SE: "   ", X:200, Y: 30 },
		a01: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a00", W: "   ", E: "a00", SW: "a02", S: "a02", SE: "   ", X:100, Y: 40 },
		a02: { room: TR, goal: FL, NW: "   ", N: "a01", NE: "a01", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 60, Y:100 },
		a03: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a04", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X: 60, Y:180 },
		a04: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "a03", S: "   ", SE: "a05", X:150, Y:130 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "   ", S: "   ", SE: "   ", X:250, Y:170 },
		a06: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "   ", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X:370, Y:120 }
	},
	m04: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "   ", X: 90, Y: 20 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "   ", S: "a03", SE: "a03", X:300, Y: 40 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "   ", W: "a01", E: "   ", SW: "a01", S: "   ", SE: "   ", X:400, Y: 40 },
		a03: { room: FL, goal: FL, NW: "a01", N: "a01", NE: "a01", W: "   ", E: "   ", SW: "a06", S: "a06", SE: "a06", X:360, Y:130 },
		a04: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "   ", X: 50, Y:190 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "a04", S: "   ", SE: "a06", X:180, Y:180 },
		a06: { room: TR, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "a05", E: "   ", SW: "a05", S: "   ", SE: "   ", X:270, Y:180 }
	},
	m05: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a05", SW: "a01", S: "a01", SE: "a05", X: 20, Y: 70 },
		a01: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "   ", W: "   ", E: "a03", SW: "a02", S: "a02", SE: "a03", X:140, Y:170 },
		a02: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "a01", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:130, Y:220 },
		a03: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "   ", SE: "a04", X:200, Y:200 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "   ", W: "a03", E: "   ", SW: "   ", S: "   ", SE: "   ", X:230, Y:200 },
		a05: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a06", W: "a00", E: "a06", SW: "a00", S: "   ", SE: "   ", X:220, Y:110 },
		a06: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "a05", S: "   ", SE: "   ", X:270, Y: 70 },
		a07: { room: TR, goal: FL, NW: "a06", N: "a08", NE: "a08", W: "a06", E: "   ", SW: "   ", S: "   ", SE: "   ", X:320, Y: 80 },
		a08: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "a09", W: "   ", E: "a09", SW: "a07", S: "a07", SE: "   ", X:370, Y: 20 },
		a09: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "   ", W: "a08", E: "   ", SW: "   ", S: "a10", SE: "a10", X:430, Y: 20 },
		a10: { room: TR, goal: FL, NW: "a09", N: "a09", NE: "   ", W: "a09", E: "   ", SW: "   ", S: "   ", SE: "   ", X:450, Y: 80 }
	},
	m06: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "a01", X: 60, Y: 60 },
		a01: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a02", W: "a00", E: "a02", SW: "a00", S: "   ", SE: "a02", X:150, Y: 70 },
		a02: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a03", W: "a01", E: "a03", SW: "a01", S: "   ", SE: "a03", X:190, Y: 50 },
		a03: { room: FL, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:280, Y: 70 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "   ", W: "a03", E: "a05", SW: "   ", S: "   ", SE: "a05", X:320, Y: 70 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "   ", SW: "   ", S: "a06", SE: "a06", X:380, Y: 50 },
		a06: { room: TR, goal: TR, NW: "a05", N: "a05", NE: "   ", W: "a07", E: "   ", SW: "a07", S: "   ", SE: "   ", X:430, Y:150 },
		a07: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "a06", W: "a08", E: "a06", SW: "a08", S: "   ", SE: "a06", X:320, Y:170 },
		a08: { room: TR, goal: FL, NW: "a09", N: "   ", NE: "a07", W: "a09", E: "a07", SW: "a09", S: "   ", SE: "a07", X:240, Y:160 },
		a09: { room: TR, goal: FL, NW: "a10", N: "   ", NE: "a08", W: "a10", E: "a08", SW: "a10", S: "   ", SE: "a08", X:160, Y:180 },
		a10: { room: FL, goal: FL, NW: "a11", N: "   ", NE: "a09", W: "a11", E: "a09", SW: "a11", S: "   ", SE: "a09", X:120, Y:190 },
		a11: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a10", W: "   ", E: "a10", SW: "   ", S: "   ", SE: "a10", X: 60, Y:170 }
	},
	m07: {
		a00: { room: FL, goal: TR, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "a01", X: 50, Y:130 },
		a01: { room: FL, goal: FL, NW: "   ", N: "a02", NE: "a02", W: "a00", E: "   ", SW: "   ", S: "a13", SE: "a13", X:100, Y:130 },
		a02: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a03", W: "   ", E: "a03", SW: "a01", S: "a01", SE: "   ", X:110, Y: 60 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "a02", S: "   ", SE: "a04", X:270, Y: 60 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "a05", W: "a03", E: "a05", SW: "   ", S: "a09", SE: "   ", X:330, Y: 60 },
		a05: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "   ", SW: "   ", S: "a06", SE: "a06", X:390, Y: 50 },
		a06: { room: FL, goal: FL, NW: "   ", N: "a05", NE: "a05", W: "   ", E: "   ", SW: "a07", S: "a07", SE: "   ", X:470, Y:160 },
		a07: { room: TR, goal: FL, NW: "a08", N: "a06", NE: "a06", W: "a08", E: "   ", SW: "   ", S: "   ", SE: "   ", X:370, Y:180 },
		a08: { room: FL, goal: FL, NW: "   ", N: "a09", NE: "   ", W: "a10", E: "a07", SW: "a10", S: "   ", SE: "a07", X:340, Y:180 },
		a09: { room: FL, goal: FL, NW: "a04", N: "a04", NE: "a04", W: "   ", E: "   ", SW: "a08", S: "a08", SE: "a08", X:340, Y:120 },
		a10: { room: TR, goal: FL, NW: "a11", N: "   ", NE: "a08", W: "a11", E: "a08", SW: "a11", S: "   ", SE: "a08", X:290, Y:180 },
		a11: { room: FL, goal: FL, NW: "a12", N: "   ", NE: "a10", W: "a12", E: "a10", SW: "a12", S: "   ", SE: "a10", X:250, Y:180 },
		a12: { room: TR, goal: FL, NW: "a13", N: "   ", NE: "a11", W: "a13", E: "a11", SW: "a13", S: "   ", SE: "a11", X:180, Y:160 },
		a13: { room: TR, goal: FL, NW: "a01", N: "a01", NE: "   ", W: "   ", E: "a12", SW: "   ", S: "   ", SE: "a12", X: 60, Y:160 }
	},
	m08: {
		a00: { room: TR, goal: TR, NW: "a02", N: "   ", NE: "   ", W: "a02", E: "   ", SW: "   ", S: "a01", SE: "a01", X:320, Y: 20 },
		a01: { room: TR, goal: FL, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:350, Y:170 },
		a02: { room: FL, goal: FL, NW: "a03", N: "   ", NE: "a00", W: "a03", E: "a00", SW: "a03", S: "   ", SE: "a00", X:280, Y:100 },
		a03: { room: TR, goal: FL, NW: "a04", N: "   ", NE: "   ", W: "a04", E: "a02", SW: "a07", S: "a07", SE: "a02", X:200, Y: 70 },
		a04: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a03", W: "a05", E: "a03", SW: "a05", S: "   ", SE: "a03", X:110, Y: 60 },
		a05: { room: FL, goal: FL, NW: "   ", N: "   ", NE: "a04", W: "   ", E: "a04", SW: "a06", S: "a06", SE: "   ", X: 70, Y: 90 },
		a06: { room: TR, goal: FL, NW: "a05", N: "a05", NE: "   ", W: "   ", E: "a07", SW: "   ", S: "a08", SE: "a08", X: 70, Y:120 },
		a07: { room: FL, goal: FL, NW: "   ", N: "a03", NE: "a03", W: "a06", E: "   ", SW: "   ", S: "a09", SE: "a09", X:140, Y:130 },
		a08: { room: TR, goal: FL, NW: "a06", N: "a06", NE: "   ", W: "   ", E: "a09", SW: "   ", S: "   ", SE: "a09", X:100, Y:190 },
		a09: { room: TR, goal: FL, NW: "   ", N: "a07", NE: "a07", W: "a08", E: "   ", SW: "a08", S: "   ", SE: "   ", X:150, Y:190 }
	},
	m09: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a02", W: "   ", E: "a02", SW: "a01", S: "a01", SE: "   ", X:120, Y: 60 },
		a01: { room: TR, goal: TR, NW: "a00", N: "a00", NE: "a00", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:100, Y:140 },
		a02: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a03", W: "a00", E: "a03", SW: "a00", S: "   ", SE: "a03", X:200, Y: 70 },
		a03: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a04", W: "a02", E: "a04", SW: "   ", S: "a05", SE: "a05", X:330, Y: 70 },
		a04: { room: TR, goal: FL, NW: "a03", N: "   ", NE: "   ", W: "a03", E: "   ", SW: "a03", S: "   ", SE: "   ", X:400, Y: 30 },
		a05: { room: TR, goal: FL, NW: "a03", N: "a03", NE: "   ", W: "a06", E: "   ", SW: "a06", S: "   ", SE: "   ", X:360, Y:130 },
		a06: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "   ", S: "   ", SE: "   ", X:290, Y:180 }
	},
	m10: {
		a00: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "a01", X: 40, Y:180 },
		a01: { room: TR, goal: FL, NW: "a00", N: "   ", NE: "   ", W: "a00", E: "a03", SW: "   ", S: "   ", SE: "a03", X:140, Y:180 },
		a02: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a04", SW: "   ", S: "a04", SE: "a04", X:190, Y:140 },
		a03: { room: FL, goal: FL, NW: "a01", N: "   ", NE: "a04", W: "a01", E: "a04", SW: "a01", S: "   ", SE: "a04", X:220, Y:230 },
		a04: { room: TR, goal: FL, NW: "a02", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "a03", S: "   ", SE: "   ", X:250, Y:170 },
		a05: { room: TR, goal: FL, NW: "   ", N: "a06", NE: "a06", W: "a04", E: "   ", SW: "a04", S: "   ", SE: "   ", X:350, Y:180 },
		a06: { room: TR, goal: FL, NW: "a11", N: "   ", NE: "a07", W: "a11", E: "a07", SW: "a05", S: "a05", SE: "   ", X:380, Y: 80 },
		a07: { room: TR, goal: FL, NW: "a08", N: "   ", NE: "   ", W: "a08", E: "   ", SW: "   ", S: "a06", SE: "a06", X:450, Y: 20 },
		a08: { room: FL, goal: FL, NW: "a09", N: "   ", NE: "a07", W: "a09", E: "a07", SW: "a09", S: "   ", SE: "a07", X:370, Y: 30 },
		a09: { room: TR, goal: FL, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "a08", SW: "a10", S: "a10", SE: "a08", X:300, Y: 20 },
		a10: { room: TR, goal: FL, NW: "a12", N: "a09", NE: "a09", W: "a12", E: "a11", SW: "   ", S: "   ", SE: "a11", X:270, Y: 60 },
		a11: { room: FL, goal: FL, NW: "a10", N: "   ", NE: "   ", W: "a10", E: "a06", SW: "   ", S: "   ", SE: "a06", X:350, Y: 90 },
		a12: { room: TR, goal: FL, NW: "a13", N: "a13", NE: "   ", W: "   ", E: "a10", SW: "   ", S: "   ", SE: "a10", X:200, Y: 40 },
		a13: { room: FL, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "   ", E: "   ", SW: "a12", S: "a12", SE: "a12", X:190, Y: 20 }
	},
	m11: {
		a00: { room: TR, goal: TR, NW: "   ", N: "   ", NE: "   ", W: "a01", E: "a04", SW: "a01", S: "   ", SE: "a04", X:170, Y: 20 },
		a01: { room: FL, goal: FL, NW: "   ", N: "a00", NE: "a00", W: "a02", E: "a03", SW: "a02", S: "   ", SE: "a03", X:120, Y: 80 },
		a02: { room: TR, goal: FL, NW: "   ", N: "a01", NE: "a01", W: "   ", E: "a01", SW: "   ", S: "   ", SE: "   ", X: 60, Y:120 },
		a03: { room: TR, goal: FL, NW: "a01", N: "   ", NE: "a04", W: "a01", E: "a04", SW: "   ", S: "a08", SE: "a08", X:170, Y:120 },
		a04: { room: FL, goal: FL, NW: "a00", N: "   ", NE: "a05", W: "   ", E: "a05", SW: "a03", S: "   ", SE: "   ", X:250, Y: 70 },
		a05: { room: FL, goal: FL, NW: "a04", N: "   ", NE: "a06", W: "a04", E: "a06", SW: "a04", S: "   ", SE: "a06", X:280, Y: 70 },
		a06: { room: TR, goal: FL, NW: "a05", N: "   ", NE: "a07", W: "a05", E: "a07", SW: "a05", S: "   ", SE: "a07", X:330, Y: 20 },
		a07: { room: TR, goal: FL, NW: "a06", N: "   ", NE: "   ", W: "a06", E: "   ", SW: "a06", S: "   ", SE: "   ", X:480, Y: 50 },
		a08: { room: FL, goal: FL, NW: "a03", N: "a03", NE: "a03", W: "   ", E: "   ", SW: "a09", S: "a09", SE: "a09", X:210, Y:170 },
		a09: { room: TR, goal: FL, NW: "a08", N: "a08", NE: "a08", W: "   ", E: "   ", SW: "   ", S: "   ", SE: "   ", X:180, Y:210 }
	}
};

//===================================================================
// キャンバス情報
//===================================================================
// divエレメント
const MAP_DIV = document.getElementById("divMap");
// キャンバス描画サイズ
const MAP_WIDTH = 580;
const MAP_HEIGHT = 300;

//-------------------------------------------------
// 画像情報
//-------------------------------------------------
let AREA_IMG_ARY = {};

for (let i = 0; i <= 25; i++) {

	// HTMLから画像エレメント取得
	let area = "a" + i.toString().padStart(2, "0");
	let areaImg = document.getElementById(area);
	AREA_IMG_ARY[area] = areaImg;

	// エリア画像読み込み時function
	areaImg.onload = function () {
		// エリア名
		let area = areaImg.id;

		// エリア画像サイズ取得
		let imgWidth = areaImg.naturalWidth;
		let imgHeight = areaImg.naturalHeight;

		// エリア表示位置設定
		let imgX;
		let imgY;

		if (newMapFlg) {
			// 1枚目の場合、中央位置を計算
			imgX = (MAP_WIDTH - imgWidth) / 2;
			imgY = (MAP_HEIGHT - imgHeight) / 2;

			// マップ原点位置を計算
			mapX = imgX - MAP_DATA_ARY[nowMap][area]["X"];
			mapY = imgY - MAP_DATA_ARY[nowMap][area]["Y"];

			newMapFlg = false;

		} else {
			// 2枚目以降の場合、マップ原点位置をもとに計算
			imgX = mapX + MAP_DATA_ARY[nowMap][area]["X"];
			imgY = mapY + MAP_DATA_ARY[nowMap][area]["Y"];

			// キャンバスをはみ出る場合、マップ原点位置を再計算
			let redrawFlg = false;
			if (imgX < 0) {
				mapX = mapX - imgX;
				redrawFlg = true;
			} else if (MAP_WIDTH < (imgX + imgWidth)) {
				mapX = mapX - ((imgX + imgWidth) - MAP_WIDTH);
				redrawFlg = true;
			}
			if (imgY < 0) {
				mapY = mapY - imgY;
				redrawFlg = true;
			} else if (MAP_HEIGHT < (imgY + imgHeight)) {
				mapY = mapY - ((imgY + imgHeight) - MAP_HEIGHT);
				redrawFlg = true;
			}

			// マップ原点位置をもとにエリア画像再配置
			if (redrawFlg) {
				// 踏破済エリア再計算
				let oldImg;
				for (let oldArea in getAreaImgAry) {
					oldImg = getAreaImgAry[oldArea];
					oldImg.style.left = parseInt(mapX + MAP_DATA_ARY[nowMap][oldArea]["X"]) + 'px';
					oldImg.style.top = parseInt(mapY + MAP_DATA_ARY[nowMap][oldArea]["Y"]) + 'px';
				}

				// 新規エリア再計算
				imgX = mapX + MAP_DATA_ARY[nowMap][area]["X"];
				imgY = mapY + MAP_DATA_ARY[nowMap][area]["Y"];
			}
		}

		// 新規エリア画像配置
		areaImg.style.left = imgX + 'px';
		areaImg.style.top = imgY + 'px';

		// 新規エリア画像表示
		areaImg.style.visibility = "visible";
	}
}

//===================================================================
// テキストエリア情報
//===================================================================
const txtInfo = document.getElementById("txtInfo");

//-------------------------------------------------
// テキストエリア出力Event
//-------------------------------------------------
function writeTxtInfo() {
	txtInfo.value =
		"ドロロヶ浦 " + floorCount + "F\n" +
		"階段に到達した回数 " + goalCount + "回\n" +
		"道を引き返した回数 " + turnCount + "回\n" +
		"高とび草の使用回数 " + jumpCount + "回";

	if (goalFlg) {
		txtInfo.style.color = "#8080ff";
	} else if (retireFlg) {
		txtInfo.style.color = "#ff8080";
	} else {
		txtInfo.style.color = "#000000";
	}
}

//===================================================================
// 移動ボタン情報
//===================================================================
// エレメントを配列化
let MOVE_BTN_ARY = {
	NW: document.getElementById("btnNW"),
	N: document.getElementById("btnN"),
	NE: document.getElementById("btnNE"),
	W: document.getElementById("btnW"),
	E: document.getElementById("btnE"),
	SW: document.getElementById("btnSW"),
	S: document.getElementById("btnS"),
	SE: document.getElementById("btnSE")
}

// イベントセット
for (let moveDirection in MOVE_BTN_ARY) {
	let btn = MOVE_BTN_ARY[moveDirection];
	btn.addEventListener('mouseover', { moveDirection: moveDirection, handleEvent: overMoveButtonEventEntry });
	btn.addEventListener('mouseout', { moveDirection: moveDirection, handleEvent: outMoveButtonEvent });
}

//-------------------------------------------------
// 移動ボタンクリックEvent
//-------------------------------------------------
function clickMoveButton(moveDirection) {

	// 移動先のエリア名を取得
	let area = MAP_DATA_ARY[nowMap][nowArea][moveDirection].trim();
	if (area != "") {

		// MAP描画Event呼び出し
		console.log("move : " + nowArea + " -> " + area);
		drawMap(area);
	}

	// 移動ボタンマウスオーバーEvent呼び出し
	overMoveButtonEvent(moveDirection);
}

//-------------------------------------------------
// 移動ボタンマウスオーバーEvent
//-------------------------------------------------
function overMoveButtonEventEntry(e) {
	overMoveButtonEvent(this.moveDirection);
}
function overMoveButtonEvent(moveDirection) {
	let nextArea = MAP_DATA_ARY[nowMap][nowArea][moveDirection].trim()

	// 同じ隣室を指すボタンをすべて着色
	if (nextArea != "") {
		for (let direction in MOVE_BTN_ARY) {
			if (nextArea == MAP_DATA_ARY[nowMap][nowArea][direction]) {
				MOVE_BTN_ARY[direction].style.background = CLR_BLUE;
			}
		}
	}
}

//-------------------------------------------------
// 移動ボタンマウスアウトEvent
//-------------------------------------------------
function outMoveButtonEvent(e) {
	// ボタンの着色解除
	if (MOVE_BTN_ARY[this.moveDirection].style.background != "") {
		for (let direction in MOVE_BTN_ARY) {
			if (MAP_DATA_ARY[nowMap][nowArea][direction].trim() != "") {
				MOVE_BTN_ARY[direction].style.background = "";
			}
		}
	}
}

//===================================================================
// 高とびボタン情報
//===================================================================
//-------------------------------------------------
// 高とびボタンクリックEvent
//-------------------------------------------------
function clickJumpButton() {
	let jumpArea;

	// 高とび回数インクリメント
	if (!retireFlg && !goalFlg) {
		jumpCount++;
	}

	// ジャンプ先エリア決定
	let romAry = [];
	let roomFlg;
	for (let area in MAP_DATA_ARY[nowMap]) {
		roomFlg = MAP_DATA_ARY[nowMap][area]["room"];
		if (roomFlg && area != nowArea) {
			romAry[romAry.length] = area;
		}
	}
	let aryIdx = Math.floor(Math.random() * romAry.length);
	jumpArea = romAry[aryIdx];

	// MAP描画Event
	console.log("jump : " + jumpArea);
	drawMap(jumpArea);
}

//===================================================================
// フルオープンボタン情報
//===================================================================
//-------------------------------------------------
// フルオープンボタンクリックEvent
//-------------------------------------------------
function clickFullOpenButton() {

	console.log("full open");
	retireFlg = true;

	// 原点を左上に再設定
	mapX = 0;
	mapY = 0;

	// 全エリア分ループ
	let areaImg;
	for (let area in MAP_DATA_ARY[nowMap]) {
		// エリア画像表示
		areaImg = AREA_IMG_ARY[area];
		getAreaImgAry[area] = areaImg;
		areaImg.src = "image/" + nowMap + "/" + nowMap + "-" + area + ".png";
	}

	// テキストエリア出力
	writeTxtInfo();
}

//===================================================================
// リトライボタン情報
//===================================================================
//-------------------------------------------------
// リトライボタンクリックEvent
//-------------------------------------------------
function clickRetryButton() {

	console.log("retry");
	retireFlg = true;

	// マップ開始Event
	startMap();
}

//===================================================================
// 次のフロアへボタン情報
//===================================================================
//-------------------------------------------------
// 次のフロアへボタンクリックEvent
//-------------------------------------------------
function clickNextFloorButton() {

	console.log("next Floor");

	// マップ開始Event
	goalFlg = false;
	retireFlg = false;
	startMap();
}
//-------------------------------------------------
// マップ開始Event
//-------------------------------------------------
function startMap() {

	// 変数情報初期化
	newMapFlg = true;
	for (let area in AREA_IMG_ARY) {
		AREA_IMG_ARY[area].style.visibility = "hidden";
		AREA_IMG_ARY[area].style.filter = "";
	}
	getAreaImgAry = {};

	if (!retireFlg) {
		let idx;

		// マップ決定
		floorCount++;
		idx = Math.floor(Math.random() * 11);
		nowMap = "m" + idx.toString().padStart(2, "0");

		// エリア決定
		let romAry = [];
		for (let area in MAP_DATA_ARY[nowMap]) {
			if (MAP_DATA_ARY[nowMap][area]["room"] && !MAP_DATA_ARY[nowMap][area]["goal"]) {
				romAry[romAry.length] = area;
			}
		}
		idx = Math.floor(Math.random() * romAry.length);
		startArea = romAry[idx];
	}
	nowArea = startArea;

	// MAP描画Event
	console.log("newMap : " + nowMap + " " + nowArea);
	drawMap(nowArea);
}

//===================================================================
// マップ描画Event
//===================================================================
function drawMap(area) {
	// 移動先エリアimgエレメント
	let areaImg;

	// 踏破済エリアかどうかをチェック
	if (!getAreaImgAry[area]) {
		// 新規エリアの場合
		areaImg = AREA_IMG_ARY[area]
		getAreaImgAry[area] = areaImg;

		// 階段に到着した場合
		if (!retireFlg && !goalFlg && MAP_DATA_ARY[nowMap][area]["goal"]) {
			goalCount++;
			goalFlg = true;
		}

		// エリア画像表示
		areaImg.src = "image/" + nowMap + "/" + nowMap + "-" + area + ".png";

	} else {
		// 踏破済エリアの場合
		if (!retireFlg && !goalFlg) {
			turnCount++;
		}
		areaImg = AREA_IMG_ARY[area];
	}

	// 移動ボタン活性設定
	for (let direction in MOVE_BTN_ARY) {
		let nextArea = MAP_DATA_ARY[nowMap][area][direction].trim();

		if (nextArea != "") {
			MOVE_BTN_ARY[direction].removeAttribute("disabled");
			MOVE_BTN_ARY[direction].style.background = "";

		} else {
			MOVE_BTN_ARY[direction].setAttribute("disabled", true);
			MOVE_BTN_ARY[direction].style.background = CLR_GRAY;
		}
	}

	// 現在地をライトアップ
	getAreaImgAry[nowArea].style.filter = "";
	getAreaImgAry[area].style.filter = "brightness(300%)";
	nowArea = area;

	// テキストエリア出力
	writeTxtInfo();
}

//===================================================================
// 初期表示
//===================================================================
// 現在マップ名
let nowMap = "";
// 現在エリア名
let nowArea = "";
// 踏破済エリア配列
let getAreaImgAry = {};

// Map原点座標
let mapX = 0;
let mapY = 0;

// 新規マップフラグ
let newMapFlg = true;
// 開始エリア
let startArea = "";

// カウンタ
let floorCount = 0;
let goalCount = 0;
let turnCount = 0;
let jumpCount = 0;
let goalFlg = false;
let retireFlg = false;

// マップ開始Event
startMap();

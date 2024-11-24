//===================================================================
// 定数ほか
//===================================================================

//===================================================================
// キャンバス情報
//===================================================================
//-------------------------------------------------
// イベントセット
//-------------------------------------------------
const PART_MAP_ARY = document.getElementsByName("rmMap");
console.log("length:" + PART_MAP_ARY.length);
for (let i=0; i < PART_MAP_ARY.length; i++) {

	console.log("src:" + PART_MAP_ARY[i].src);

	PART_MAP_ARY[i].addEventListener('mouseover', { el: PART_MAP_ARY[i], handleEvent: overMapEventEntry });
	PART_MAP_ARY[i].addEventListener('mouseout', { el: PART_MAP_ARY[i], handleEvent: outMapEventEntry });
}

//-------------------------------------------------
// マップマウスオーバーEvent
//-------------------------------------------------
function overMapEventEntry(e) {
	overMapEvent(this.el);
}
function overMapEvent(el) {
	console.log("over:" + el.src);
	el.style.filter = "brightness(300%)";
}

//-------------------------------------------------
// マップマウスアウトEvent
//-------------------------------------------------
function outMapEventEntry(e) {
	outMapEvent(this.el);
}
function outMapEvent(el) {
	console.log("out:" + el.src);
	el.style.filter = "brightness(70%)";
}

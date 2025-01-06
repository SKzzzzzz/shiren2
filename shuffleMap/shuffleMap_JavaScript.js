//===================================================================
// 定数ほか
//===================================================================
const CLR_BLUE = "RGB(170,200,255)";
const CLR_GRAY = "RGB(170,170,170)";

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
		"シャッフルマップ " + floorCount + "F\n" +
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
		idx = Math.floor(Math.random() * Object.keys(MAP_DATA_ARY).length);
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


//===================================================================
// 盤面情報
//===================================================================
//-------------------------------------------------
// 定数
//-------------------------------------------------
// 色
const CLR_YUKA = "rgb(50, 40, 40)"
const CLR_SHIREN = "rgb(170, 120, 70)"
const CLR_SEARCH = "rgb(100, 100, 50)"
// 方向
const ANGLE_LIST = ["0:-1", "-1:-1", "-1:0", "-1:1", "0:1", "1:1", "1:0", "1:-1"]
const ANGLE_R_LIST = [0, -1, -1, -1, 0, 1, 1, 1]
const ANGLE_C_LIST = [-1, -1, 0, 1, 1, 1, 0, -1]

//-------------------------------------------------
// テーブル
//-------------------------------------------------
// 行列数
var maxR = tbl.rows.length;
var maxC = tbl.rows[0].cells.length

//-------------------------------------------------
// シレン・目的地
//-------------------------------------------------
var shiren = document.getElementById("shiren");
shiren.style.position = "absolute";
var goal = document.getElementById("goal");
goal.style.position = "absolute";

// シレン位置
var srnR = 2
var srnC = 2
var clRect = tbl.rows[srnR].cells[srnC].getBoundingClientRect()
shiren.style.top = window.pageYOffset + clRect.top + 2 + 'px'
shiren.style.left = window.pageXOffset + clRect.left + 2 + 'px'
// 探索範囲描画時点のシレン位置
var srnDrwR = 999;
var srnDrwC = 999;
// シレンダッシュ方向
var aglR = 1;
var aglC = 1;
// 探索範囲描画時点のシレンダッシュ方向
var aglDrwR = 9;
var aglDrwC = 9;

// 目的地位置
var golR = 4
var golC = 8
clRect = tbl.rows[golR].cells[golC].getBoundingClientRect()
goal.style.top = window.pageYOffset + clRect.top + 2 + 'px'
goal.style.left = window.pageXOffset + clRect.left + 2 + 'px'
// 探索範囲描画時点の目的地位置
var golDrwR = 999;
var golDrwC = 999;

// 初期探索範囲描画
drowSearchArea()


//===================================================================
// テーブル
//===================================================================
//-------------------------------------------------
// 探索範囲描画
//-------------------------------------------------
function drowSearchArea() {

	// マス移動していない場合は終了
	if (srnDrwR == srnR && srnDrwC == srnC && aglDrwR == aglR && aglDrwC == aglC &&
		golDrwR == golR && golDrwC == golC) {
		return;
	}

	//-------------------------------------------------
	// 盤面をリセット
	//-------------------------------------------------
	for (var r = 0; r < maxR; r++) {
		for (var c = 0; c < maxC; c++) {
			if (!isKabe(r, c)) {
				// シレンが移動してる場合のみ
				if (srnDrwR != srnR || srnDrwC != srnC || aglDrwR != aglR || aglDrwC != aglC) {
					tbl.rows[r].cells[c].style.backgroundColor = CLR_YUKA;
				}
				tbl.rows[r].cells[c].innerText = "";
			}
		}
	}

	// シレン現在地が壁でない場合 かつ シレンが移動してる場合
	if (!isKabe(srnR, srnC) && (srnDrwR != srnR || srnDrwC != srnC || aglDrwR != aglR || aglDrwC != aglC)) {
		//-------------------------------------------------
		// 現在地を着色
		//-------------------------------------------------
		tbl.rows[srnR].cells[srnC].style.backgroundColor = CLR_SHIREN;

		//-------------------------------------------------
		// 探索範囲を着色
		//-------------------------------------------------
		if (aglR != 0 && aglC != 0) {
			// Ｘ字方向探索
			var tmpR = srnR + aglR;
			var tmpC = srnC + aglC;
			var count = 1;
			while (0 <= tmpR && tmpR < maxR && 0 <= tmpC && tmpC < maxC) {
				// 1歩前進
				if (isSearchable(tmpR, tmpC, false)) {
					setSearchColor(tmpR, tmpC);
				}

				// 同行
				for (var r = tmpR + aglR; 0 <= r && r < maxR && r != srnR + aglR + 4 * count * aglR; r += aglR) {
					if (isSearchable(r, tmpC, false)) {
						setSearchColor(r, tmpC);
					} else {
						break;
					}
				}
				// 同列
				for (var c = tmpC + aglC; 0 <= c && c < maxC && c != srnC + aglC + 4 * count * aglC; c += aglC) {
					if (isSearchable(tmpR, c, false)) {
						setSearchColor(tmpR, c);
					} else {
						break;
					}
				}

				tmpR += aglR;
				tmpC += aglC;
				count++;
			}
		} else if (aglR != 0) {
			// 十字方向（上下）探索
			// 直進
			for (var r = srnR + aglR; 0 <= r && r < maxR; r += aglR) {
				if (isSearchable(r, srnC, false)) {
					setSearchColor(r, srnC);
				} else {
					break;
				}
			}
			// 右の列を1列ずつ
			for (var c = srnC + 1, count = 1; c < maxC; c++, count++) {
				for (var r = srnR + count * 2 * aglR; 0 <= r && r < maxR; r += aglR) {
					if (isSearchable(r, c, false)) {
						setSearchColor(r, c);
					} else {
						break;
					}
				}
			}
			// 左の列を1列ずつ
			for (var c = srnC - 1, count = 1; 0 <= c; c--, count++) {
				for (var r = srnR + count * 2 * aglR; 0 <= r && r < maxR; r += aglR) {
					if (isSearchable(r, c, false)) {
						setSearchColor(r, c);
					} else {
						break;
					}
				}
			}

		} else {
			// 十字方向（左右）探索
			// 直進
			for (var c = srnC + aglC; 0 <= c && c < maxC; c += aglC) {
				if (isSearchable(srnR, c, false)) {
					setSearchColor(srnR, c);
				} else {
					break;
				}
			}
			// 下の行を1行ずつ
			for (var r = srnR + 1, count = 1; r < maxR; r++, count++) {
				for (var c = srnC + count * 2 * aglC; 0 <= c && c < maxC; c += aglC) {
					if (isSearchable(r, c, false)) {
						setSearchColor(r, c);
					} else {
						break;
					}
				}
			}
			// 上の行を1行ずつ
			for (var r = srnR - 1, count = 1; 0 <= r; r--, count++) {
				for (var c = srnC + count * 2 * aglC; 0 <= c && c < maxC; c += aglC) {
					if (isSearchable(r, c, false)) {
						setSearchColor(r, c);
					} else {
						break;
					}
				}
			}

		}
	}

	// 目的地が探索範囲内に位置する場合
	if (tbl.rows[golR].cells[golC].style.backgroundColor == CLR_SEARCH) {
		// シレンから目的地までの道のりを描画
		isSearchable(golR, golC, true);
	}

	// 描画時点のアイコン位置を記憶する
	srnDrwR = srnR;
	srnDrwC = srnC;
	aglDrwR = aglR;
	aglDrwC = aglC;
	golDrwR = golR;
	golDrwC = golC;
}

//-------------------------------------------------
// 探索ルート判定
//-------------------------------------------------
function isSearchable(tgtR, tgtC, dFlg) {
	var r = srnR;
	var c = srnC;
	var addR, addC;
	var chkR, chkC;
	var history = [r + ":" + c];
	var num, str;

	// 目的地が壁の場合スルー
	if (isKabe(tgtR, tgtC)) {
		return true;
	}

	// 目的地に着くまでループ
	var walkCount = 0;
	while (r != tgtR || c != tgtC) {
		// 無限ループ防止
		if (walkCount++ >= 100) {
			return false;
		}

		//-------------------------------------------------
		// 基本ルートでの進行方向を探す
		//-------------------------------------------------
		addR = Math.sign(tgtR - r);
		addC = Math.sign(tgtC - c);

		// 次のマスに進む
		if (isWalkable(r, c, addR, addC)) {
			r += addR;
			c += addC;
			setWalkMark(r, c, dFlg);
			history[history.length] = r + ":" + c;

		} else {

			//-------------------------------------------------
			// 進めない場合、迂回ルート探索
			//-------------------------------------------------
			// 迂回可能範囲
			var wayMinR = ((r < tgtR) ? r : tgtR) - 1;
			var wayMinC = ((c < tgtC) ? c : tgtC) - 1;
			var wayMaxR = ((r > tgtR) ? r : tgtR) + 1;
			var wayMaxC = ((c > tgtC) ? c : tgtC) + 1;

			// 進行方向の角度を取得
			num = ANGLE_LIST.indexOf(addR + ":" + addC)

			// 右45度
			addR = ANGLE_R_LIST[(num + 1) % ANGLE_LIST.length];
			addC = ANGLE_C_LIST[(num + 1) % ANGLE_LIST.length];
			str = (r + addR) + ":" + (c + addC);
			if (!isWalkable(r, c, addR, addC) || history.indexOf(str) > -1) {

				// 左45度
				addR = ANGLE_R_LIST[(num + 7) % ANGLE_LIST.length];
				addC = ANGLE_C_LIST[(num + 7) % ANGLE_LIST.length];
				str = (r + addR) + ":" + (c + addC);
				if (!isWalkable(r, c, addR, addC) || history.indexOf(str) > -1) {

					// 右90度
					addR = ANGLE_R_LIST[(num + 2) % ANGLE_LIST.length];
					addC = ANGLE_C_LIST[(num + 2) % ANGLE_LIST.length];
					str = (r + addR) + ":" + (c + addC);
					if (!isWalkable(r, c, addR, addC) || history.indexOf(str) > -1) {

						// 左90度
						addR = ANGLE_R_LIST[(num + 6) % ANGLE_LIST.length];
						addC = ANGLE_C_LIST[(num + 6) % ANGLE_LIST.length];
						str = (r + addR) + ":" + (c + addC);
						if (!isWalkable(r, c, addR, addC) || history.indexOf(str) > -1) {
							// 迂回方向なし：ルート探索失敗
							return false;
						}
					}
				}
			}

			//-------------------------------------------------
			// 迂回方向に進む
			//-------------------------------------------------
			while (true) {
				// 無限ループ防止
				if (walkCount++ >= 100) {
					return false;
				}

				// 迂回方向行き止まり：ルート探索失敗
				if (!isWalkable(r, c, addR, addC)) {
					return false;
				}

				// 迂回方向に進む
				r += addR;
				c += addC;
				setWalkMark(r, c, dFlg);
				history[history.length] = r + ":" + c;

				// 迂回範囲超過：ルート探索失敗
				if (r < wayMinR || wayMaxR < r || c < wayMinC || wayMaxC < c) {
					return false;
				}

				//-------------------------------------------------
				// 目的地に近づくマスを探す
				//-------------------------------------------------
				// 全方位から目的地に近づくマスを探す
				var i = ANGLE_LIST.length;
				var dis1 = getDistance(r, c, tgtR, tgtC);
				var dis2;
				for (var j = 0; j < ANGLE_LIST.length; j++) {
					chkR = ANGLE_R_LIST[j];
					chkC = ANGLE_C_LIST[j];
					// 迂回方向は除外
					if (addR == chkR && addC == chkC) {
						continue;
					}
					// 引き返す方向は除外
					str = (r + chkR) + ":" + (c + chkC);
					if (history.indexOf(str) > -1) {
						continue;
					}
					// 進めない方向は除外
					if (!isWalkable(r, c, chkR, chkC)) {
						continue;
					}
					// 目的地への距離
					dis2 = getDistance(r + chkR, c + chkC, tgtR, tgtC);
					if (dis1 > dis2) {
						dis1 = dis2;
						i = j;
					}
				}
				// 目的地に近づくマスがある場合、迂回ルートを終了する
				if (i < ANGLE_LIST.length) {
					break;
				}
			}
		}
	}

	// ルート探索成功
	return true;
}

//-------------------------------------------------
// 壁判定
//-------------------------------------------------
function isKabe(r, c) {
	if (tbl.rows[r].cells[c].className == "td_kabe") {
		return true;
	}
	return false;
}

//-------------------------------------------------
// 現在地から次のマスへ進めるかを判定
//-------------------------------------------------
function isWalkable(r, c, addR, addC) {

	// 次のマスがマップ外の場合、不可
	if (r + addR < 0 || maxR <= r + addR || c + addC < 0 || maxC <= c + addC) {
		return false;
	}

	// 次のマスが壁の場合、不可
	if (isKabe(r + addR, c + addC)) {
		return false;
	}

	// 次のマスが斜めの場合
	if (addR != 0 && addC != 0) {
		// 隣接マスに壁がある場合、不可
		if (isKabe(r, c + addC)) {
			return false;
		}
		if (isKabe(r + addR, c)) {
			return false;
		}
	}

	return true;
}

//-------------------------------------------------
// 探索範囲セルの着色
//-------------------------------------------------
function setSearchColor(r, c) {
	if (!isKabe(r, c)) {
		tbl.rows[r].cells[c].style.backgroundColor = CLR_SEARCH;
	}
}

//-------------------------------------------------
// 探索ルートの足跡描画
//-------------------------------------------------
function setWalkMark(r, c, dFlg) {
	if (dFlg) {
		tbl.rows[r].cells[c].innerText = "■";
	}
}

//-------------------------------------------------
// 目的地への距離
//-------------------------------------------------
function getDistance(r, c, tgtR, tgtC) {
	return Math.abs(tgtR - r) + Math.abs(tgtC - c);
}


//===================================================================
// シレン
//===================================================================
shiren.addEventListener("mousedown", mDownSrn, false);
shiren.addEventListener("touchstart", mDownSrn, false);

//-------------------------------------------------
// マウスが押された際の関数
//-------------------------------------------------
function mDownSrn(e) {
	// タッチデイベントとマウスのイベントの差異を吸収
	if (e.type === "mousedown") {
		var event = e;
	} else {
		var event = e.changedTouches[0];
	}

	// ムーブイベントにコールバック
	document.body.addEventListener("mousemove", mMoveSrn, false);
	document.body.addEventListener("touchmove", mMoveSrn, false);
}

//-------------------------------------------------
// マウスカーソルが動いたときに発火
//-------------------------------------------------
function mMoveSrn(e) {
	// タッチデイベントとマウスのイベントの差異を吸収
	if (e.type === "mousemove") {
		var event = e;
	} else {
		var event = e.changedTouches[0];
	}

	// フリックしたときに画面を動かさないようにデフォルト動作を抑制
	e.preventDefault();

	// マウスボタンが離されたとき、またはカーソルが外れたとき発火
	shiren.addEventListener("mouseup", mUpSrn, false);
	document.body.addEventListener("mouseleave", mUpSrn, false);
	shiren.addEventListener("touchend", mUpSrn, false);
	document.body.addEventListener("touchleave", mUpSrn, false);

	// シレンアイコンをポインタに追尾
	var y = event.clientY;
	var x = event.clientX;
	shiren.style.top = window.pageYOffset + (y - 9) + "px";
	shiren.style.left = window.pageXOffset + (x - 9) + "px";

	// テーブル中の現在値マスを取得
	for (var r = 0; r < maxR; r++) {
		clRect = tbl.rows[r].cells[0].getBoundingClientRect()
		if (y >= clRect.top && y <= (clRect.top + clRect.height)) {
			srnR = r;
			break;
		}
	}
	for (var c = 0; c < maxC; c++) {
		clRect = tbl.rows[0].cells[c].getBoundingClientRect()
		if (x >= clRect.left && x <= (clRect.left + clRect.width)) {
			srnC = c;
			break;
		}
	}

	// 探索範囲描画
	drowSearchArea();
}

//-------------------------------------------------
// マウスボタンが上がったら発火
//-------------------------------------------------
function mUpSrn(e) {
	// ムーブベントハンドラの消去
	document.body.removeEventListener("mousemove", mMoveSrn, false);
	shiren.removeEventListener("mouseup", mUpSrn, false);
	document.body.removeEventListener("touchmove", mMoveSrn, false);
	shiren.removeEventListener("touchend", mUpSrn, false);

	// 現在地マスの中央に落とす
	var clRect = tbl.rows[srnR].cells[srnC].getBoundingClientRect()
	shiren.style.top = window.pageYOffset + clRect.top + 2 + 'px'
	shiren.style.left = window.pageXOffset + clRect.left + 2 + 'px'
}

//===================================================================
// 目的地
//===================================================================
goal.addEventListener("mousedown", mDownGol, false);
goal.addEventListener("touchstart", mDownGol, false);

//-------------------------------------------------
// マウスが押された際の関数
//-------------------------------------------------
function mDownGol(e) {
	// タッチデイベントとマウスのイベントの差異を吸収
	if (e.type === "mousedown") {
		var event = e;
	} else {
		var event = e.changedTouches[0];
	}

	// ムーブイベントにコールバック
	document.body.addEventListener("mousemove", mMoveGol, false);
	document.body.addEventListener("touchmove", mMoveGol, false);
}

//-------------------------------------------------
// マウスカーソルが動いたときに発火
//-------------------------------------------------
function mMoveGol(e) {
	// タッチデイベントとマウスのイベントの差異を吸収
	if (e.type === "mousemove") {
		var event = e;
	} else {
		var event = e.changedTouches[0];
	}

	// フリックしたときに画面を動かさないようにデフォルト動作を抑制
	e.preventDefault();

	// マウスボタンが離されたとき、またはカーソルが外れたとき発火
	goal.addEventListener("mouseup", mUpGol, false);
	document.body.addEventListener("mouseleave", mUpGol, false);
	goal.addEventListener("touchend", mUpGol, false);
	document.body.addEventListener("touchleave", mUpGol, false);

	// 目的地アイコンをポインタに追尾
	var y = event.clientY;
	var x = event.clientX;
	goal.style.top = window.pageYOffset + (y - 9) + "px";
	goal.style.left = window.pageXOffset + (x - 9) + "px";

	// テーブル中の現在値マスを取得
	for (var r = 0; r < maxR; r++) {
		clRect = tbl.rows[r].cells[0].getBoundingClientRect()
		if (y >= clRect.top && y <= (clRect.top + clRect.height)) {
			golR = r;
			break;
		}
	}
	for (var c = 0; c < maxC; c++) {
		clRect = tbl.rows[0].cells[c].getBoundingClientRect()
		if (x >= clRect.left && x <= (clRect.left + clRect.width)) {
			golC = c;
		}
	}

	// 探索範囲描画
	drowSearchArea();
}

//-------------------------------------------------
// マウスボタンが上がったら発火
//-------------------------------------------------
function mUpGol(e) {
	// ムーブベントハンドラの消去
	document.body.removeEventListener("mousemove", mMoveGol, false);
	goal.removeEventListener("mouseup", mUpGol, false);
	document.body.removeEventListener("touchmove", mMoveGol, false);
	goal.removeEventListener("touchend", mUpGol, false);

	// 現在地マスの中央に落とす
	var clRect = tbl.rows[golR].cells[golC].getBoundingClientRect()
	goal.style.top = window.pageYOffset + clRect.top + 2 + 'px'
	goal.style.left = window.pageXOffset + clRect.left + 2 + 'px'
}

//===================================================================
// 操作ボタン
//===================================================================
// ダッシュ方向変更
function setAngle(r, c) {
	aglR = r;
	aglC = c;
	drowSearchArea();
}

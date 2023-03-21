//===================================================================
// 定数
//===================================================================
//-------------------------------------------------
// 色
//-------------------------------------------------
const CLR_GRAY = "rgb(170, 170, 170)"
const CLR_WHITE1 = "rgb(255, 255, 255)"
const CLR_WHITE2 = "rgb(230, 230, 230)"
const CLR_BLUE1 = "rgb(160, 180, 255)"
const CLR_BLUE2 = "rgb(220, 230, 255)"
const CLR_BLUE3 = "rgb(150, 170, 200)"
const CLR_BLACK = "rgb(0, 0, 0)"

//-------------------------------------------------
// チェックボックスID
//-------------------------------------------------
// 条件：入手方法
const FROM_ARY = ["f_yuka", "f_henge", "f_bikuri", "f_mise", "f_gyou"];

// 条件：売値
const SELL_ARY = [
	"s_A", "s_287", "s_300", "s_312", "s_325", "s_337",
	"s_B", "s_460", "s_480", "s_500", "s_520", "s_540", "s_525",
	"s_C", "s_575", "s_600", "s_625", "s_650", "s_675", "s_560", "s_640",
	"s_D", "s_1150", "s_1200", "s_1250", "s_1300", "s_1350",
	"s_E", "s_1380", "s_1440", "s_1500", "s_1560", "s_1620", "s_1400", "s_1600", "s_1700",
	"s_F", "s_1610", "s_1680", "s_1750", "s_1820", "s_1890"
];

// 条件：買値
const BUY_ARY = [
	"b_A", "b_575", "b_600", "b_625", "b_650", "b_675",
	"b_B", "b_920", "b_960", "b_1000", "b_1040", "b_1080", "b_1050",
	"b_C", "b_1250", "b_1300", "b_1350",
	"b_D", "b_1380", "b_1440", "b_1500", "b_1560", "b_1620",
	"b_E", "b_2300", "b_2400", "b_2500", "b_2600", "b_2700",
	"b_F", "b_2875", "b_3000", "b_3125", "b_3250", "b_3375",
	"b_G", "b_3500", "b_3750", "b_4000", "b_3450", "b_3600", "b_3900", "b_4050"
];

// 条件：その他
const OTHER_ARY = ["o_ireru", "o_muhan"];

// 杖
const WAND_ARY = [
	"w_fukitob", "w_noriutu", "w_bashiga", "w_hikiyos", "w_koroban", "w_monoshi", "w_quarter", "w_donsoku", "w_fuuinnn", "w_tunnell",
	"w_karabur", "w_hibashi", "w_fukouuu", "w_shiawas", "w_kusanag", "w_kusauke", "w_baisoku", "w_kaifuku", "w_toumeii"
];

// 条件配列マージ
const CASE_ARY = [...FROM_ARY, ...SELL_ARY, ...BUY_ARY, ...OTHER_ARY];

//-------------------------------------------------
// 識別情報
//-------------------------------------------------
// 杖-入手方法
const WAND_FROM_ARY = {
	"w_fukitob": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_noriutu": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_bashiga": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_hikiyos": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "        ", f_gyou: "01234567" },
	"w_koroban": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_monoshi": { f_yuka: "        ", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_quarter": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "        ", f_mise: "01234567", f_gyou: "        " },
	"w_donsoku": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "        ", f_mise: "01234567", f_gyou: "01234567" },
	"w_fuuinnn": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "        " },
	"w_tunnell": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "        ", f_mise: "        ", f_gyou: "01234567" },
	"w_karabur": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_hibashi": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_fukouuu": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "        ", f_mise: "        ", f_gyou: "        " },
	"w_shiawas": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "        ", f_mise: "        ", f_gyou: "        " },
	"w_kusanag": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_kusauke": { f_yuka: "01234567", f_henge: "01234567", f_bikuri: "01234567", f_mise: "01234567", f_gyou: "01234567" },
	"w_baisoku": { f_yuka: "        ", f_henge: "        ", f_bikuri: "        ", f_mise: "        ", f_gyou: "        " },
	"w_kaifuku": { f_yuka: "        ", f_henge: "        ", f_bikuri: "        ", f_mise: "        ", f_gyou: "        " },
	"w_toumeii": { f_yuka: "        ", f_henge: "        ", f_bikuri: "        ", f_mise: "        ", f_gyou: "        " }
};

// 杖-売値
const WAND_SELL_ARY = {
	// 売値300帯
	"w_fukitob": { "s_A": "   34567", "s_287": "3", "s_300": "4", "s_312": "5", "s_325": "6", "s_337": "7" },
	"w_noriutu": { "s_A": "   34567", "s_287": "3", "s_300": "4", "s_312": "5", "s_325": "6", "s_337": "7" },
	"w_quarter": { "s_A": "   34567", "s_287": "3", "s_300": "4", "s_312": "5", "s_325": "6", "s_337": "7" },
	// 売値500帯
	"w_bashiga": { "s_B": "   34567", "s_460": "3", "s_480": "4", "s_500": "5", "s_520": "6", "s_540": "7" },
	"w_hikiyos": { "s_B": "   34567", "s_460": "3", "s_480": "4", "s_500": "5", "s_520": "6", "s_540": "7" },
	"w_donsoku": { "s_B": "   34567", "s_460": "3", "s_480": "4", "s_500": "5", "s_520": "6", "s_540": "7" },
	"w_koroban": { "s_B": "01      ", "s_500": "0", "s_525": "1" },
	// 売値500-600帯
	"w_kaifuku": { "s_B": "   3    ", "s_520": "3", "s_C": "    456 ", "s_560": "4", "s_600": "5", "s_640": "6" },
	// 売値600帯
	"w_monoshi": { "s_C": "   34567", "s_575": "3", "s_600": "4", "s_625": "5", "s_650": "6", "s_675": "7" },
	"w_fuuinnn": { "s_C": "   34567", "s_575": "3", "s_600": "4", "s_625": "5", "s_650": "6", "s_675": "7" },
	// 売値1200帯
	"w_tunnell": { "s_D": "   34567", "s_1150": "3", "s_1200": "4", "s_1250": "5", "s_1300": "6", "s_1350": "7" },
	"w_shiawas": { "s_D": "   34567", "s_1150": "3", "s_1200": "4", "s_1250": "5", "s_1300": "6", "s_1350": "7" },
	"w_toumeii": { "s_D": "   34567", "s_1150": "3", "s_1200": "4", "s_1250": "5", "s_1300": "6", "s_1350": "7" },
	// 売値1200-1500帯
	"w_fukouuu": { "s_D": "   3    ", "s_1300": "3", "s_E": "    4567", "s_1400": "4", "s_1500": "5", "s_1600": "6", "s_1700": "7" },
	"w_baisoku": { "s_D": "   3    ", "s_1300": "3", "s_E": "    4567", "s_1400": "4", "s_1500": "5", "s_1600": "6", "s_1700": "7" },
	// 売値1500帯
	"w_karabur": { "s_E": "   34567", "s_1380": "3", "s_1440": "4", "s_1500": "5", "s_1560": "6", "s_1620": "7" },
	"w_hibashi": { "s_E": "   34567", "s_1380": "3", "s_1440": "4", "s_1500": "5", "s_1560": "6", "s_1620": "7" },
	"w_kusanag": { "s_E": "   34567", "s_1380": "3", "s_1440": "4", "s_1500": "5", "s_1560": "6", "s_1620": "7" },
	// 売値1700帯
	"w_kusauke": { "s_F": "   34567", "s_1610": "3", "s_1680": "4", "s_1750": "5", "s_1820": "6", "s_1890": "7" }
};

// 杖-買値
const WAND_BUY_ARY = {
	// 買値600帯
	"w_fukitob": { "b_A": "   34567", "b_575": "3", "b_600": "4", "b_625": "5", "b_650": "6", "b_675": "7" },
	"w_noriutu": { "b_A": "   34567", "b_575": "3", "b_600": "4", "b_625": "5", "b_650": "6", "b_675": "7" },
	// 買値1000帯
	"w_bashiga": { "b_B": "   34567", "b_920": "3", "b_960": "4", "b_1000": "5", "b_1040": "6", "b_1080": "7" },
	"w_hikiyos": { "b_B": "   34567", "b_920": "3", "b_960": "4", "b_1000": "5", "b_1040": "6", "b_1080": "7" },
	"w_kaifuku": { "b_B": "   3    ", "b_1040": "3" },
	// 買値1000-1300帯
	"w_koroban": { "b_B": "01      ", "b_1000": "0", "b_1050": "1" },
	"w_monoshi": { "b_C": "     567", "b_1250": "5", "b_1300": "6", "b_1350": "7" },
	// 買値1500帯
	"w_quarter": { "b_D": "   34567", "b_1380": "3", "b_1440": "4", "b_1500": "5", "b_1560": "6", "b_1620": "7" },
	"w_donsoku": { "b_D": "   34567", "b_1380": "3", "b_1440": "4", "b_1500": "5", "b_1560": "6", "b_1620": "7" },
	// 買値2500帯
	"w_fuuinnn": { "b_E": "   34567", "b_2300": "3", "b_2400": "4", "b_2500": "5", "b_2600": "6", "b_2700": "7" },
	"w_tunnell": { "b_E": "   34567", "b_2300": "3", "b_2400": "4", "b_2500": "5", "b_2600": "6", "b_2700": "7" },
	"w_toumeii": { "b_E": "   34567", "b_2300": "3", "b_2400": "4", "b_2500": "5", "b_2600": "6", "b_2700": "7" },
	// 買値2500-3000帯
	"w_baisoku": { "b_E": "   3    ", "b_2600": "3", "b_F": "     5  ", "b_3000": "5", },
	"w_karabur": { "b_F": "   34567", "b_2875": "3", "b_3000": "4", "b_3125": "5", "b_3250": "6", "b_3375": "7" },
	"w_hibashi": { "b_F": "   34567", "b_2875": "3", "b_3000": "4", "b_3125": "5", "b_3250": "6", "b_3375": "7" },
	// 買値2500-3500帯
	"w_fukouuu": { "b_F": "   3    ", "b_3250": "3", "b_G": "    456 ", "b_3500": "4", "b_3750": "5", "b_4000": "6" },
	// 買値3000-3500帯
	"w_shiawas": { "b_G": "   34567", "b_3450": "3", "b_3600": "4", "b_3750": "5", "b_3900": "6", "b_4050": "7" },
	"w_kusanag": { "b_G": "   34567", "b_3450": "3", "b_3600": "4", "b_3750": "5", "b_3900": "6", "b_4050": "7" },
	"w_kusauke": { "b_G": "   34567", "b_3450": "3", "b_3600": "4", "b_3750": "5", "b_3900": "6", "b_4050": "7" }
}

// 杖-その他
const WAND_OTHER_ARY = {
	"w_fukitob": { "o_ireru": "        ", "o_muhan": "        " },
	"w_noriutu": { "o_ireru": "        ", "o_muhan": "        " },
	"w_bashiga": { "o_ireru": "        ", "o_muhan": "        " },
	"w_hikiyos": { "o_ireru": "        ", "o_muhan": "01234567" },
	"w_koroban": { "o_ireru": "        ", "o_muhan": "        " },
	"w_monoshi": { "o_ireru": "        ", "o_muhan": "        " },
	"w_quarter": { "o_ireru": "        ", "o_muhan": "01234567" },
	"w_donsoku": { "o_ireru": "        ", "o_muhan": "        " },
	"w_fuuinnn": { "o_ireru": "        ", "o_muhan": "        " },
	"w_tunnell": { "o_ireru": "        ", "o_muhan": "        " },
	"w_karabur": { "o_ireru": "        ", "o_muhan": "        " },
	"w_hibashi": { "o_ireru": "        ", "o_muhan": "        " },
	"w_fukouuu": { "o_ireru": "        ", "o_muhan": "01234567" },
	"w_shiawas": { "o_ireru": "        ", "o_muhan": "01234567" },
	"w_kusanag": { "o_ireru": "01234567", "o_muhan": "        " },
	"w_kusauke": { "o_ireru": "01234567", "o_muhan": "        " },
	"w_baisoku": { "o_ireru": "        ", "o_muhan": "        " },
	"w_kaifuku": { "o_ireru": "        ", "o_muhan": "        " },
	"w_toumeii": { "o_ireru": "        ", "o_muhan": "        " }
};

// 杖-XXX配列マージ
let str;
let WAND_CASE_ARY = {}
for (let i = 0; i < WAND_ARY.length; i++) {
	str = WAND_ARY[i];
	WAND_CASE_ARY[str] = { ...WAND_FROM_ARY[str], ...WAND_SELL_ARY[str], ...WAND_BUY_ARY[str], ...WAND_OTHER_ARY[str] };
}

//===================================================================
// イベントセット
//===================================================================
let chkBox;
let td;

//-------------------------------------------------
// 入手方法テーブル
//-------------------------------------------------
for (let i = 0; i < FROM_ARY.length; i++) {
	chkBox = document.getElementById(FROM_ARY[i]);
	chkBox.addEventListener('change', { chkId: FROM_ARY[i], handleEvent: changeCheckBoxEvent });

	td = document.getElementById("td_" + FROM_ARY[i]);
	td.addEventListener('mouseover', { chkId: FROM_ARY[i], handleEvent: overCheckBoxEvent });
	td.addEventListener('mouseout', { chkId: FROM_ARY[i], handleEvent: outCheckBoxEvent });
}

//-------------------------------------------------
// 売値・買値テーブル
//-------------------------------------------------
for (let i = 0; i < SELL_ARY.length; i++) {
	chkBox = document.getElementById(SELL_ARY[i]);
	chkBox.addEventListener('change', { chkId: SELL_ARY[i], handleEvent: changeCheckBoxEventPrice });

	td = document.getElementById("td_" + SELL_ARY[i]);
	td.addEventListener('mouseover', { chkId: SELL_ARY[i], handleEvent: overCheckBoxEvent });
	td.addEventListener('mouseout', { chkId: SELL_ARY[i], handleEvent: outCheckBoxEvent });
}

for (let i = 0; i < BUY_ARY.length; i++) {
	chkBox = document.getElementById(BUY_ARY[i]);
	chkBox.addEventListener('change', { chkId: BUY_ARY[i], handleEvent: changeCheckBoxEventPrice });

	td = document.getElementById("td_" + BUY_ARY[i]);
	td.addEventListener('mouseover', { chkId: BUY_ARY[i], handleEvent: overCheckBoxEvent });
	td.addEventListener('mouseout', { chkId: BUY_ARY[i], handleEvent: outCheckBoxEvent });
}

//-------------------------------------------------
// その他テーブル
//-------------------------------------------------
for (let i = 0; i < OTHER_ARY.length; i++) {
	chkBox = document.getElementById(OTHER_ARY[i]);
	chkBox.addEventListener('change', { chkId: OTHER_ARY[i], handleEvent: changeCheckBoxEvent });

	td = document.getElementById("td_" + OTHER_ARY[i]);
	td.addEventListener('mouseover', { chkId: OTHER_ARY[i], handleEvent: overCheckBoxEvent });
	td.addEventListener('mouseout', { chkId: OTHER_ARY[i], handleEvent: outCheckBoxEvent });
}

//-------------------------------------------------
// 杖テーブル
//-------------------------------------------------
for (let i = 0; i < WAND_ARY.length; i++) {
	chkBox = document.getElementById(WAND_ARY[i]);
	chkBox.addEventListener('change', { chkId: WAND_ARY[i], handleEvent: changeCheckBoxEvent });

	td = document.getElementById("td_" + WAND_ARY[i]);
	td.addEventListener('mouseover', { chkId: WAND_ARY[i], handleEvent: overCheckBoxEvent });
	td.addEventListener('mouseout', { chkId: WAND_ARY[i], handleEvent: outCheckBoxEvent });
}

// 初期状態の識別結果反映Event
changeCheckBoxMain("");

//===================================================================
// 条件チェックボックスの識別結果反映Event
//===================================================================
//-------------------------------------------------
// 条件チェックボックスの識別結果反映Event
//-------------------------------------------------
function changeCheckBoxEvent(e) {
	changeCheckBoxMain(this.chkId)
}

function changeCheckBoxMain(chkId) {
	let chkBox;
	let td;

	//-------------------------------------------------
	// 条件選択配列を作成
	//-------------------------------------------------
	let caseChkAry = [];

	// 入手方法
	for (let i = 0; i < CASE_ARY.length; i++) {
		chkBox = document.getElementById(CASE_ARY[i]);
		if (chkBox.checked) {
			caseChkAry[caseChkAry.length] = CASE_ARY[i];
		}
	}

	//-------------------------------------------------
	// 条件に該当する杖着色配列を作成
	//-------------------------------------------------
	let wandValAry = {};
	let caseId;
	let wandVal;

	// 杖数分ループ
	for (let wandId in WAND_CASE_ARY) {
		wandVal = "";

		// 杖チェックボックスが選択中の場合のみ識別条件配列と突合
		chkBox = document.getElementById(wandId);
		if (chkBox.checked) {
			wandVal = "01234567";

			// 識別条件テーブル分ループ
			for (let i = 0; i < caseChkAry.length; i++) {
				caseId = caseChkAry[i];

				// 杖-条件が存在する場合
				if (caseId in WAND_CASE_ARY[wandId] && WAND_CASE_ARY[wandId][caseId].trim() != "") {
					// 論理積を取得
					for (let j = 0; j <= 7; j++) {
						if (WAND_CASE_ARY[wandId][caseId].indexOf(j) == -1) {
							wandVal = wandVal.replace(j, "");
						}
					}
				} else {
					wandVal = "";
					break;
				}
			}
		}

		// 杖配列にセット
		wandValAry[wandId] = wandVal;
	}

	//-------------------------------------------------
	// 杖テーブルを着色
	//-------------------------------------------------
	let flg1, flg2;

	for (let wandId in wandValAry) {
		flg1 = false;
		flg2 = false;

		// 使用回数着色
		for (let i = 0; i <= 7; i++) {
			td = document.getElementById("td_" + wandId + "_" + i);
			if (wandValAry[wandId].indexOf(i) > -1) {
				if (td.className == "tdW2") {
					td.style.backgroundColor = CLR_WHITE1;
					flg1 = true;
				} else {
					td.style.backgroundColor = CLR_WHITE2;
					flg2 = true;
				}
			} else {
				td.style.backgroundColor = CLR_GRAY;
			}
		}

		// 杖名着色
		td = document.getElementById("td_" + wandId);
		if (flg1) {
			td.style.backgroundColor = CLR_WHITE1;
		} else if (flg2) {
			td.style.backgroundColor = CLR_WHITE2;
		} else {
			td.style.backgroundColor = CLR_GRAY;
		}
	}

	//-------------------------------------------------
	// フィードバック 条件着色配列を作成
	//-------------------------------------------------
	let caseClrAry = {};
	let wandCaseVal;
	let val;

	// 条件配列の初期設定（すべて灰）
	for (let i = 0; i < CASE_ARY.length; i++) {
		caseClrAry[CASE_ARY[i]] = CLR_GRAY;
	}

	// 生存している条件を点灯
	// 杖数分ループ
	for (let wandId in wandValAry) {
		wandVal = wandValAry[wandId].trim();
		if (wandVal != "") {

			// 杖-条件数分ループ
			for (let caseId in WAND_CASE_ARY[wandId]) {
				wandCaseVal = WAND_CASE_ARY[wandId][caseId].trim();
				for (i = 0; i < wandVal.length && caseClrAry[caseId] != CLR_WHITE1; i++) {
					val = wandVal.substring(i, i + 1);
					if (wandCaseVal.indexOf(val) > -1) {
						td = document.getElementById("td_" + wandId + "_" + val);
						caseClrAry[caseId] = td.style.backgroundColor;
					}
				}
			}
		}
	}

	//-------------------------------------------------
	// フィードバック 条件テーブルを着色
	//-------------------------------------------------
	for (let caseId in caseClrAry) {
		td = document.getElementById("td_" + caseId);
		td.style.backgroundColor = caseClrAry[caseId];
	}

	// 特殊エリアだけ周辺の色に合わせて個別に着色
	td = document.getElementById("td_s_B000");
	if (caseClrAry["s_500"] != CLR_GRAY && caseClrAry["s_525"] != CLR_GRAY) {
		td.style.backgroundColor = CLR_WHITE2;
	} else {
		td.style.backgroundColor = CLR_GRAY;
	}

	td = document.getElementById("td_s_E000");
	if (caseClrAry["s_1400"] != CLR_GRAY && caseClrAry["s_1600"] != CLR_GRAY) {
		td.style.backgroundColor = CLR_WHITE2;
	} else {
		td.style.backgroundColor = CLR_GRAY;
	}

	td = document.getElementById("td_b_B000");
	if (caseClrAry["b_1000"] != CLR_GRAY && caseClrAry["b_1050"] != CLR_GRAY) {
		td.style.backgroundColor = CLR_WHITE2;
	} else {
		td.style.backgroundColor = CLR_GRAY;
	}

	td = document.getElementById("td_b_C000");
	if (caseClrAry["b_1250"] != CLR_GRAY && caseClrAry["b_1300"] != CLR_GRAY) {
		td.style.backgroundColor = CLR_WHITE2;
	} else {
		td.style.backgroundColor = CLR_GRAY;
	}

	td = document.getElementById("td_b_G000");
	if (caseClrAry["b_3500"] != CLR_GRAY && caseClrAry["b_4000"] != CLR_GRAY) {
		td.style.backgroundColor = CLR_WHITE2;
	} else {
		td.style.backgroundColor = CLR_GRAY;
	}



	//-------------------------------------------------
	// マウスオーバー中の場合、マウスオーバーEventを再実行
	//-------------------------------------------------
	if (chkId != "") {
		overCheckBoxMain(chkId);
	}
}

//-------------------------------------------------
// 売値・買値チェックボックスの変更Event
//-------------------------------------------------
function changeCheckBoxEventPrice(e) {
	let chkBox = document.getElementById(this.chkId)

	// チェックオンの場合
	if (chkBox.checked) {
		// 売値または買値チェックを全てクリア
		if (this.chkId.substring(0, 2) == "s_") {
			for (let i = 0; i < SELL_ARY.length; i++) {
				document.getElementById(SELL_ARY[i]).checked = false;
			}
		} else {
			for (let i = 0; i < BUY_ARY.length; i++) {
				document.getElementById(BUY_ARY[i]).checked = false;
			}
		}

		// 自分をチェックしなおす
		chkBox.checked = true;
	}

	// 識別結果反映Eventを実行
	changeCheckBoxMain(this.chkId);
}

//===================================================================
// ボタン操作
//===================================================================
//-------------------------------------------------
// 杖すべて選択／選択解除Event
//-------------------------------------------------
function clickAllCheckEvent(chk) {
	// 杖チェックボックスをすべて設定
	for (let i = 0; i < WAND_ARY.length; i++) {
		document.getElementById(WAND_ARY[i]).checked = chk;
	}

	// 識別結果反映Eventを実行
	changeCheckBoxMain("");
}


//===================================================================
// マウスオーバー／アウト
//===================================================================
//-------------------------------------------------
// マウスオーバーEvent
//-------------------------------------------------
function overCheckBoxEvent(e) {
	overCheckBoxMain(this.chkId);
}

function overCheckBoxMain(chkId) {
	// マウスオーバー中の条件を着色
	let td = document.getElementById("td_" + chkId);
	td.style.backgroundColor = CLR_BLUE1;

	if (chkId.substring(0, 2) == "w_") {
		//-------------------------------------------------
		// 杖に該当する条件テーブルを着色
		//-------------------------------------------------
		let wandVal;
		let flg1;

		// 出現時の使用回数を配列化
		let idxAry = [];
		for (let i = 0; i <= 7; i++) {
			td = document.getElementById("td_" + chkId + "_" + i);
			if (td.className == "tdW2") {
				idxAry[idxAry.length] = i;
			}
		}

		// 杖に対応する条件テーブルを着色
		for (let caseId in WAND_CASE_ARY[chkId]) {
			wandVal = WAND_CASE_ARY[chkId][caseId].trim()
			if (wandVal != "") {

				// 出現時の使用回数に対応するかチェック
				flg1 = false;
				for (let i = 0; i < idxAry.length; i++) {
					if (wandVal.indexOf(idxAry[i]) > -1) {
						flg1 = true;
						break;
					}
				}

				// 条件テーブルを着色
				td = document.getElementById("td_" + caseId);
				if (td.style.backgroundColor != CLR_GRAY) {
					if (flg1) {
						td.style.backgroundColor = CLR_BLUE1;
					} else {
						td.style.backgroundColor = CLR_BLUE2;
					}
				} else {
					td.style.backgroundColor = CLR_BLUE3;
				}
			}
		}

	} else {
		//-------------------------------------------------
		// 条件に対応する杖着色配列を作成
		//-------------------------------------------------
		let wandValAry = {};
		let wandVal;
		let flg1;
		let flg2;

		for (let wandId in WAND_CASE_ARY) {
			if (chkId in WAND_CASE_ARY[wandId]) {
				wandVal = WAND_CASE_ARY[wandId][chkId].trim();
				if (wandVal != "") {
					wandValAry[wandId] = wandVal;
				}
			}
		}

		//-------------------------------------------------
		// 杖テーブルを着色
		//-------------------------------------------------
		for (let wandId in wandValAry) {
			wandVal = wandValAry[wandId].trim();
			flg1 = flg2 = false;

			// 使用回数
			for (let i = 0; i <= 7; i++) {
				td = document.getElementById("td_" + wandId + "_" + i);
				if (wandVal.indexOf(i) > -1) {
					if (td.style.backgroundColor == CLR_WHITE1) {
						td.style.backgroundColor = CLR_BLUE1;
						flg1 = true;
					} else if (td.style.backgroundColor == CLR_WHITE2) {
						td.style.backgroundColor = CLR_BLUE2;
						flg2 = true;
					} else {
						td.style.backgroundColor = CLR_BLUE3;
					}
				}
			}

			// 杖名
			td = document.getElementById("td_" + wandId);
			if (flg1) {
				td.style.backgroundColor = CLR_BLUE1;
			} else if (flg2) {
				td.style.backgroundColor = CLR_BLUE2;
			} else {
				td.style.backgroundColor = CLR_BLUE3;
			}
		}
	}
}

//-------------------------------------------------
// マウスアウトEvent
//-------------------------------------------------
function outCheckBoxEvent(e) {
	// 識別結果反映Eventを実行
	changeCheckBoxMain("");
}

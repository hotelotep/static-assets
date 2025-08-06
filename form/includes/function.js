function GetContents(editorObj) {
	return editorObj.getData();
}
function SetContents(htmlValue, editorObj) {
	editorObj.setData(htmlValue);
}
// JavaScript Document
function ass(k) {
	document.getElementById(ke).innerHTML = '';
	document.getElementById(ke).innerHTML = event.keyCode;
}
//?????????????????????????????????????????????????
function check_eng(e) {
	ok = 0;
	var keyPressed;

	if (window.event) {
		key = window.event.keyCode; // IE 
		if (key < 45 || key > 57) { if (key < 64 || key > 90) { if (key < 95 || key > 122) { event.returnValue = false; } } }
	} else {
		key = e.which; // Firefox        
		if (key < 45 || key > 57) { if (key < 64 || key > 90) { if (key < 95 || key > 122) { keyPressed = e.preventDefault(); } } }
	}
}
//????????????????????????????????????????????????????????
//??????????????????????????????????????????????
function check_thai(e) {
	ok = 0;
	if (window.event) {
		if (event.keyCode < 3585 || event.keyCode > 3675) {
			if (event.keyCode < 48 || event.keyCode > 57) {
				if (event.keyCode !== 32) {
					event.returnValue = false;
				}
			}
		}
	} else {
		if (e.which < 3585 || e.which > 3675) {
			if (e.which < 48 || e.which > 57) {
				if (e.which !== 32) {
					e.which = e.preventDefault();
				}
			}
		}

	}
}
//?????????????????????????????????????????????????????
//????????????????????????
function check_num(e) {
	if (window.event) {
		if (event.keyCode < 45 || event.keyCode > 57) { event.returnValue = false; }
	} else {
		if (e.which < 45 || e.which > 57) { e.which = e.preventDefault(); }
	}
}

function check_int(e) {
	if (window.event) {
		if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 13) { e.returnValue = false; }
	} else {
		if ((e.which < 48 || e.which > 57) && e.which != 13) { e.which = e.preventDefault(); }
	}
}

function addCommas(nStr) {
	nStr = nStr.replace(",", '');
	x = nStr.toString();
	n = x.length;
	var pattern = /(\d{3})(\d{3})/;
	while (pattern.test(x))
		x = x.replace(pattern, "$1,$2");
	return x;
	/*
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
	return x1 + x2;*/
}

// parseInt and convert Nan/not a number to zero
function parseIntNaN(num) {
	var value = parseInt(num);
	if (isNaN(value)) {
		return 0;
	} else {
		return value;
	}
}

function getDaysBetweenDates(date1, date2) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);

    var timeDifference = d2.getTime() - d1.getTime();

    var daysDifference = timeDifference / (1000 * 3600 * 24);

    return Math.abs(daysDifference);
}
const setCookie = (name, value, expire) => {
	let date = new Date();
	date.setSeconds(date.getSeconds() + expire);
	document.cookie = name + " = " + escape(value) + "; expires=" + date.toGMTString();
};

const getCookie = (name) => {
	var arr;
	const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	arr = document.cookie.match(reg);
	if (arr) {
		return unescape(arr[2]);
	} else {
		return null;
	}
};

const delCookie = (name) => {
	let exp = new Date();
	exp.setTime(exp.getTime() - 1);
	let cval = getCookie(name);
	if (cval != null) {
		document.cookie = name + " = " + cval + "; expires=" + exp.toGMTString();
	}
};

export default {
	setCookie,
	getCookie,
	delCookie
};

$.extend({
	//参数转对象
	//name = '小明',age = 10;
	//$.argUtil('name' ,'age');
	//$.argUtil({name: 'name',age: 'age'});
	argUtil: function(){
		var obj = {};
		var args = arguments;
		var length = args.length;
		var i = 0;
		var j = 0;
		for(i in args){
			if(typeof args[j] === "object" && typeof args[i] === "string" ){
				obj[i] = args[i];
			}else if(typeof args[j] === "string" && args[i] !== null){
				try{
					obj[args[i]] = eval(args[i]);
				}catch(e){
					console.log('变量' + args[i] + "不存在");
				}
			}
		}
		return obj;
	},
	
	//获取星期
	//$.formateWeek();
	formateWeek: function(){
		var week,weekStr;
		if(arguments.length==0){
			week = new Date().getDay();
		}else if(isNaN(arguments[0])&&!isNaN(Date.parse(arguments[0]))){
			week = new Date(arguments[0]).getDay();
		}else{
			return "日期格式错误，请输入此种格式(yyyy-MM-dd)";
		}
		switch(week){
			case 0:
				weekStr = '星期日';
				break;
			case 1:
				weekStr = '星期一';
				break;
			case 2:
				weekStr = '星期二';
				break;
			case 3:
				weekStr = '星期三';
				break;
			case 4:
				weekStr = '星期四';
				break;
			case 5:
				weekStr = '星期五';
				break;
			case 6:
				weekStr = '星期六';
				break;
		}
		return weekStr;
	},
	//判字符串是否为数字字符串
	isNumber:function(val) {
		var regPos = /^\d+(\.\d+)?$/; //非负浮点数
		var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
		if(regPos.test(val) || regNeg.test(val)) {
			return true;
		} else {
			return false;
		}
    },
	
	
	// fomate:  "yyyy-MM-dd hh:mm:ss","yyyy-MM-dd"
	//调用：$.fomateData(10位或者13位数字,fomate); //时间戳为10或者13位
	fomateData:function(value,format){
		format = format || "yyyy-MM-dd hh:mm:ss";
		if(value.length === 10 && ($.isNumber(value) || typeof value ==="number")){
			var data = new Date(parseInt(value) * 1000);
		}else if(value.length === 13 && ($.isNumber(value) || typeof value ==="number")){
			var data = new Date(parseInt(value));
		}else{
			return '时间戳错误'
		}
		var o = { 
			"M+" : data.getMonth()+1, //month 
			"d+" : data.getDate(), //day 
			"h+" : data.getHours(), //hour 
			"m+" : data.getMinutes(), //minute 
			"s+" : data.getSeconds(), //second 
		}
	
		if(/(y+)/.test(format)) { 
			format = format.replace(RegExp.$1, (data.getFullYear()+"").substr(4 - RegExp.$1.length)); 
		}
	
		for(var k in o) { 
			if(new RegExp("("+ k +")").test(format)) { 
				format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
			} 
		}
		return format; 
	}
	
	
})

$.fn.extend({
	
})

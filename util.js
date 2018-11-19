$.extend({
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
	//判断数组中的最大值
	getMaxInArr: function(arr){
		if(series.length > 0){
			var max = parseFloat(series[0]);
			var sery;
			for(var i = 1;i < series.length;i++){
				sery = parseFloat(series[i]);
				if(sery == 0){
					continue;
				}
				if(max < sery){
					max = sery;
				}
			}
			return max;
		}
	},

	//获取一个数组中的最小值
	getMinInArr: function(arr){
		if(series.length > 0){
			var min = parseFloat(series[0]);
			var sery = 0;
			for(var i = 1;i < series.length;i++){
				sery = parseFloat(series[i]);
				if(sery == 0){
					continue;
				}
				if(min > sery){
					min = sery;
				}
			}
			return min;
		}
	},
	//金额大写转小写
	chineseMoney: function(money){
		if (isNaN(money) || money > Math.pow(10, 12))
        return "";
		var cn = "零壹贰叁肆伍陆柒捌玖";
		var unit = new Array("拾百千", "分角");
		var unit1 = new Array("万亿", "");
		var numArray = money.toString().split(".");
		var start = new Array(numArray[0].length - 1, 2);

		function toChinese(num, index)
		{
			num = num.replace(/\d/g, function($1)
			{
				return cn.charAt($1) + unit[index].charAt(start-- % 4 ? start % 4 : -1);
			});
			return num;
		}

		for (var i = 0; i < numArray.length; i++)
		{
			var tmp = "";
			for (var j = 0; j * 4 < numArray[i].length; j++)
			{
				var strIndex = numArray[i].length - (j + 1) * 4;
				var str = numArray[i].substring(strIndex, strIndex + 4);
				start = i ? 2 : str.length - 1;
				var tmp1 = toChinese(str, i);
				tmp1 = tmp1.replace(/(零.)+/g, "零").replace(/零+$/, "");
				tmp1 = tmp1.replace(/^壹拾/, "拾");
				tmp = (tmp1 + unit1[i].charAt(j - 1)) + tmp;
			}
			numArray[i] = tmp;
		}

		numArray[1] = numArray[1] ? numArray[1] : "";
		numArray[0] = numArray[0] ? numArray[0] + "元" : (numArray[0], numArray[1] = numArray[1].replace(/^零+/, ""));
		numArray[0] = numArray[0].match(/亿万/) ? numArray[0].replace("亿万","亿") : numArray[0];
		numArray[1] = numArray[1].match(/分/) ? numArray[1] : numArray[1] + "整";
		return numArray[0] + numArray[1];
	},
	//密码强度验证 0代表未输入或输入的为空,1代表弱,2代表中,3代表强
	checkPassword: function(value, validator) {
		var lv = 0;
		if(value == void 0){
			return lv
		}
		if(value.length == 0){
			return lv
		}
	    if(value.match(/[a-z]/g)){lv++;}
	    if(value.match(/[0-9]/g)){lv++;}
	    if(value.match(/(.[^a-z0-9])/g)){lv++;}
	    if(value.length < 6){ lv = 0;}
	    return lv;
	},
	//格式化时间戳
	formateDatetime:function(time,format) {
		var d = new Date(time);
		return format.replace("yyyy",d.getFullYear()).replace("MM",(d.getMonth()+1)<10?"0"+(d.getMonth()+1):(d.getMonth()+1)).replace("dd",d.getDate()<10?"0"+d.getDate():d.getDate()).replace("HH",d.getHours()).replace("mm",d.getMinutes()).replace("ss",d.getSeconds());
	},
	//格式化百分比
	formatePercent: function(number) {
		if(number==="" || isNaN(number))return number;
		var num = parseFloat(number + "") * 100;
		return Math.round(num*100)/100;
	},
	//格式化金额
	formatMoney: function(number, simple) {
		var num = parseFloat(number + "");
		var unit = "元";
		if (simple) {
			if (num >= 100000000) {
				num = Math.round(num / 1000000) / 100;
				unit = "亿";
			}
			else if (num >= 10000000) {
				num = Math.round(num / 100000) / 100;
				unit = "千万";
			}
			else if (num >= 10000) {
				num = Math.round(num / 100) / 100;
				unit = "万";
			}
		}
		
		num = addThousandChar(num);
		var obj = { number : num,  unit : unit };
		return obj;
	},
	//金额加入,
	formatCurrency: function(num) 
	{
		if(num)
		{
			num = num.toString().replace(/\$|\,/g,'');
			if(''==num || isNaN(num)){return 'Not a Number ! ';}
			var sign = num.indexOf("-")> 0 ? '-' : '';
			var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
			cents = cents.length>1 ? cents : '' ;
			num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
			if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
			else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
			
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			{
				num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
			}
			return (sign + num + cents);    
		}

	}
})

$.fn.extend({
	
})

# util
jq扩展工具集
	
	//判字符串是否为数字字符串
    $.isNumber(param)

	//获取数组最大值
    $.getMaxInArr(param)

	//获取一个数组中的最小值
	$.getMinInArr(param)

	//金额大写转小写
	$.chineseMoney(param)

	//密码强度验证 0代表未输入或输入的为空,1代表弱,2代表中,3代表强
	$.checkPassword(param)

	//格式化时间戳
	$.formateDatetime(param)

	//格式化百分比
	$.formatePercent(param)

	//格式化金额
	$.formatMoney(param)
	
	//金额加入,
	$.formatCurrency(param)
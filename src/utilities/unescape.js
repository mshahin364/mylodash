_.unescape = function(str) {
	return str.replace(/(\&amt\;)|(\&lt\;)|(\&gt\;)|(\&quot\;)|(\&\#39\;)/g,function(v){
		var result = '';
		switch (v) {
			case '\&amt\;':
				result = '\&';
				break;
			case '&lt;':
				result = '\<';
				break;
			case '&gt;':
				result = '\>';
				break;
			case '&quot;':
				result = '\"';
				break;
			case '&#39;':
				result = '\'';
				break;
			default:
				break;
		}
		return result;
	});
}
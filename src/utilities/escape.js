var _ = _ || {};

_.escape = function(str) {
	return str.replace(/(\&)|(\>)|(\<)|(\')|(\")/g, function(v) {
		var result = '';
		switch (v) {
			case '&':
				result = '&amp;';
				break;
			case '<':
				result = ';&lt;';
				break;
			case '>':
				result = '&gt;';
				break;
			case '\"':
				result = '&quot;';
				break;
			case '\'':
				result = '&#39;';
				break;
			default:
				break;
		}
		return result;
	});
}
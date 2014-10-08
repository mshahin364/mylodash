(function(){
 _ = {} ;

var Base = {
    isMatch:function(item,arg){
        var result = true;
        if(!arg){
            result = item;
        }else if(typeof arg === 'function'){
            result = arg(item);
        }else if(typeof arg === 'object'){
            var isOk = 1;
            for(var i in arg){
                if(item[i] !== arg[i]){
                    isOk = 0;
                    break;
                }
            }
            result = isOk;
        }else if(typeof arg === 'string'){
           // if(typeof item === 'object'){
           result = item.hasOwnProperty(arg) && !!item[arg];
           // }else if(typeof item === 'string'){
           //     result = item.indexOf(arg) !== -1;
           // }

        }
        return !!result;
    },
    getValue:function(item,arg){
        if(!arg){
            return item;
        }else if(typeof arg === 'string'){
            return item[arg];
        }else if(typeof arg === 'function'){
            return arg(item);
        }
    },
    makeArray:function(arg){
        var len = arg.length;
        var ret = [];
        for(var i= 0,len = arg.length;i<len;i++){
            ret.push(arg[i]);
        }
        return ret;
    }
}

_.compact = function(arr){
     var tempArr = [];
     for(var i=0 ,len=arr.length;i<len;i++){
          if(!!arr[i]){
               tempArr.push(arr[i]);
          }
     }
     return tempArr;
}
// console.log(_.compact([1,'',2,fasle,null,true,false,4,null,{},NaN]));
function inArray(value,array){
	if(Array.prototype.indexOf){
		return array.indexOf(value) !== -1;
	}else{
		var has = 0;
		for(var i=0,len=array.length; i<len;i++){
			if(value === array[i]){
				has = 1;
				break;
			}
		}
		return has;
	}
}
_.difference = function(array,values){
     var tempArr = [];
     for(var i=0 ,len=array.length;i<len;i++){
          if(inArray(array[i],values)){
               tempArr.push(array[i]);
          }
     }
     return tempArr;
}

/*
console.log(_.difference([1,2,4,6,8],[1,6,9,8]));
*/



_.drop = function(array,arg){
     var tempArr = [];
     arg = arg || 1;
     if(typeof arg === 'number'){
     	tempArr = array.slice(arg);
     }else if(typeof arg === 'function'){
     	for(var i=0,len = array.length;i<len;i++){
     		// console.log(arg(i));
     		if(!arg(array[i])){
     			tempArr.push(array[i]);
     		}
     	}
     }else if(typeof arg === 'object'){
     	for(var i in array){
     		var isMatch = 1;
     		for(var j in arg){
       			if(arg[j] !== array[i][j]){
     				isMatch = 0;
     				break;
     			}

     		}
     		if(!isMatch){
     			tempArr.push(array[i])
     		}
     	}
     }
     return tempArr;
}
_.rest = _.drop;

/*

console.log(_.rest([1,2,3,5,3,2,2],3));
console.log(_.rest([1,2,3,5,8,7,9,3,2,2],function(v){
	return v > 5;
}));
console.log(_.rest([{a:1,b:2,c:3},{a:2},{a:5,b:2}],{a:1}));

*/ 
_.findIndex = function(array, arg) {
	var result = -1;
	var len = array.length;
	if (typeof arg === 'string') {

		for (var i = 0; i < len; i++) {
			if (array[i][arg]) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'function') {
		for (var i = 0; i < len; i++) {
			if (arg(array[i])) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'object') {
		for (var i = 0; i < len; i++) {
			var isMatch = 1;
			for (var j in arg) {
				if (arg[j] !== array[i][j]) {
					isMatch = 0;
					break;
				}
			}
			if(isMatch){
				result = i;
				break;
			}
		}
	}
	return result;
}

/*
console.log(_.findIndex([{
	name: 20
}, {
	name: 21
}, {
	name: 22
}], {
	name: 21
}));


*/
_.findLastIndex = function(array, arg) {
	var result = -1;
	var len = array.length;
	if (typeof arg === 'string') {

		for (var i = len-1 ; i >= 0; i--) {
			if (array[i][arg]) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'function') {
		for (var i = len-1 ; i >= 0; i--) {
			if (arg(array[i])) {
				result = i;
				break;
			}
		}
	} else if (typeof arg === 'object') {
		for (var i = len-1 ; i >= 0; i--) {
			var isMatch = 1;
			for (var j in arg) {
				if (arg[j] !== array[i][j]) {
					isMatch = 0;
					break;
				}
			}
			if(isMatch){
				result = i;
				break;
			}
		}
	}
	return result;
}

/*
console.log(_.findLastIndex([{
	name: 20
}, {
	name: 21
}, {
	name: 22
}], {
	name: 21
}));


*/
_.first = function(array,arg){
    var ret = [];
    if(!arg){
        ret = arg[0];
    }else if(typeof arg === 'number'){
        ret = array.slice(0,arg);
    }else if(typeof arg === 'function'){


        for(var i in array){
            if(!arg(array[i])){
                break;
            }
            ret.push(array[i]);
        }
    }else if(typeof arg === 'string'){


        for(var i in array){
            if(!array[i][arg]){
                break;
            }
            ret.push(array[i]);
        }
    }
    return ret;


}


function getOnce(array){
    var ret = [];
    for(var i in array){
        ret.push(array[i]);
    }
    return ret;
}

_.flatten = function(array,arg){
    var ret = [];

    for(var i in array){
        if(toString.call(array[i]) !== '[object Array]'){
            if(typeof arg === 'string'){
                ret.push(array[i][arg])
            }
            ret.push(array[i]);
        }else {
            if(arg === true){
                ret.push(getOnce(array[i]));
            }else{
                ret.push(arguments.call(array[i]));
            }
            // if(arg)
        }
    }


}
_.indexOf = function(array,item,from){
    from = from || 0;
    var re = -1;
    if(Array.prototype.indexOf){
        return Array.prototype.indexOf.call(array,item,from);
    }
    for(var i=from,len = array.length;i<len;i++){
        if(array[i] === item){
            re = i;
            break;
        }
    }
    return re;
}
_.intersection = function(){
    arg = arguments;
    var len = arg.length;
    var ret = arg[0];
    for(var i=1;i<len;i++){
        var tempRet = [];
        for(var j in ret){
            if( arg[i].indexOf( ret[j]) > -1 && tempRet.indexOf(ret[j]) === -1 ){
                tempRet.push(ret[j]);
            }
        }
        ret = tempRet;
    }

    return ret;
}

function checkItem(item,arg){

    if(typeof arg === 'string'){
        return item.hasOwnProperty(arg) && !!item[arg]
    }else if(typeof arg === 'function'){
        // console.log(item);
        return !!arg(item);
    }else if(typeof arg === 'object'){
        var has = true;
        for(var i in arg){
            if(arg[i] !== item[i]){
                has = false;
                break;
            }
        }
        return has;
    }
}
_.last = function(array,arg){
    var re;
    var len = array.length;
    arg = arg || 0;
    if(typeof arg === 'number'){
        return array.slice(len-1-arg);
    }

    for(var i = len-1;i>=0;i--){
        if(checkItem(array[i],arg)){
            return [array[i]];
            break;
        }
    }
}
_.lastIndexOf = function(array,item,from){
    from = from || array.length;
    var re = -1;
    if(Array.prototype.indexOf){
        return Array.prototype.lastIndexOf.call(array,item,from);
    }
    for(var i=from;i>=0;i++){
        if(array[i] === item){
            re = i;
            break;
        }
    }
    return re;
}
_.object = function(arrayKey,arrayValue){
    var len = arrayKey.length;
    var re = {};
    for(var i = 0;i<len;i++){
        re[arrayKey[i]] = arrayValue[i]
    }
    return re;
}
_.pull = function(array){
    var arg = Base.makeArray(arguments).slice(1);
    var re = [];
    for(var i=0,len=array.length;i<len;i++){
        if(arg.indexOf(array[i]) === -1){
            re.push(array[i]);
        }
    }
    return re;
}
_.range = function(from,to,rate){

    if(typeof to === 'undefined'){
        to = from;
        from = 0;
        rate = 1;
    }else if(typeof rate === 'undefined'){
        rate = 1;
    }

    var re = [];
    for(var i=from;i<to;i+=rate){
        re.push(i);
    }
    return re;
}

function checkItem(item,arg){

    if(typeof arg === 'string'){
        return item.hasOwnProperty(arg) && !!item[arg]
    }else if(typeof arg === 'function'){
        // console.log(item);
        return !!arg(item);
    }else if(typeof arg === 'object'){
        var has = true;
        for(var i in arg){
            if(arg[i] !== item[i]){
                has = false;
                break;
            }
        }
        return has;
    }
}
_.remove = function(array,arg){
    var re;
    var len = array.length;

    for(var i = len-1;i>=0;i--){
        if(checkItem(array[i],arg)){
            re = re.concat(
                array.splice(i)
            )
        }
    }
    return re;
}
_.union = function(){
    var arg = Base.makeArray(arguments);
    var re = arg[0];
    for(var i = 1,len=arg.length;i<len;i++){
        var item = arg[i];
        for(var j = 0,itemLen =  item.length;j<itemLen;j++){
            if(re.indexOf(item[j]) === -1){
                re.push(item[j]);
            }
        }
    }
    return re;
}

function uniqGetItem(item,arg){
    if(!arg){
        return item;
    }else if(typeof arg === 'string'){
        return item[arg]
    }else if(typeof arg === 'function'){
        // console.log(item);
        return arg(item);
    }else if(typeof arg === 'object'){
        var has = true;
        for(var i in arg){
            if(arg[i] !== item[i]){
                has = false;
                break;
            }
        }
        return has;
    }
}
_.uniq = function(array,arg){
    var len = array.length;
    var re = [];
    var arrVal = [];
    for(var i=0;i<len;i++){
        var item = array[i];
        var val = uniqGetItem( item,arg  )  ;
        if(arrVal.indexOf(val)  === -1){
            arrVal.push(val);
            re.push(item);
        }
    }
    return re;
}
_.without = function(array){
    var re = [];
    var arg = Base.makeArray(arguments).slice(1);
    for(var i= 0,len = array.length;i<len;i++){
        if(arg.indexOf(array[i]) === -1){
            re.push(array[i]);
        }
    }
    return re;
}
_.zip = function(){
    var arg = Base.makeArray(arguments);
    var re = [];
    var baseLen = arg[0].length;
    var loopLen = arg.length;
    for(var i= 0;i<baseLen;i++){
        re[i] = [];
        for(var j=0;j<loopLen;j++){
            re[i].push(arg[j][i]);
        }
    }
    return re;
}
_.all = function(value,arg){
    // var typeof
    var result;
    var isArray = (toString.call(value) === '[object Array]');
    if(!arg){
        if(isArray){
            result = true;
            for(var i in  value){
                if(!value[i]){
                    result = fasle;
                    break;
                }
            }
            return result;
        }
        return !!value;
    }


    if(isArray){
        if(typeof arg ===  'string'){
            result = true;
            for(var i in  value){
                if(!value[i][arg]){
                    result = false;
                    break;
                }
            }
            return result;
        }else if(typeof arg === "object"){
            if(isArray || typeof value === 'string')return false;
            result = true;
            for(var i in  value){

                for(var j in arg){
                    if(arg[j] != value[i][j]){
                        result = false;
                        break;
                    }
                }
                if(!result)break;
            }
            return result;
        }

    }
}

function easyMakeArray(value){
    var ret = [];
    if(toString.call(value) === '[object Array]'){
        return value //ret = [];
    }
    for(var i= 0,len=value.length;i<len;i++){
        ret[i] = value[i];
    }
    return ret;
}

_.at = function(arr){
    var args = easyMakeArray(arguments).slice(1);
    var result = [];
    for(var i= 0,len=args.length;i<len;i++){
        if(toString.call(args[i]) !== '[object Array]' ){
            result.push(arr[args[i]]);
        }else{
            // result.push()
            var tempArr = args[i];
            tempArr.unshift(arr);
            result = result.concat(arguments.callee.apply(this,tempArr));
        }
    }
    return result;
}

// _.at(['a,b','c',1,2,3,4,5],1,4,[5,1,2,[5,2,0]]);
_.collect = function(arr,callback){
    var result = [];
    var len = arr.length;
    for(var i= 0;i<len;i++){
        result.push(callback(arr[i]))

    }
    return result;
}

_.contains = function(value,arg){
    return value.indexOf(arg) !== -1;
}

_.include = _.contains
_.countBy = function(array,arg,thisArg){
    var result = {};
    var len = array.length;
    if(typeof arg === 'function'){
        for(var i=0;i<len;i++){
            var val = arg(array[i]);
            result[val] = result[val] ? ( ++result[val]) : 1;
        }
    }
    if(typeof arg === 'string'){
        for(var i=0;i<len;i++){
            var val = array[i][arg];
            result[val] = result[val] ? ( ++result[val]) : 1;
        }
    }

    if(typeof arg === 'object'){
        for(var i=0;i<len;i++){
            var is = true;
            for(var j in arg){

                if(arg[j] !== array[i][j]){
                    is = false;
                    break;
                }
            }
            result[is] = result[is] ? ++result[is] : 1;
        }
    }
    return result;
}

// _.countBy([{name:1},{name:1},{name:2},{hehe:1,age:1}],{name:1});

_.detect = function(collection,arg){
    var len = collection.length;
    var result ;
    for(var i=0;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;
        }
    }
    return result;
}
_.each = function(array,callback){
    for(var i in array){
        callback(arrag[i],i,array);
    }
}
_.eachRight = function(array,callback){
    for(var len = array.length,i=len-1;i++;i>=0){
        callback(array[i],i,array);
    }
}
_.every = function(collection,arg){
    var is = true;
    for(var i= 0,len=collection.length;i<len;i++){
        if(!Base.isMatch(collection[i],arg)){
            is = false;
            break;

        }
    }
    return is;
}
_.filter = function(collection,arg){
    var result = [];
    for(var i= 0,len=collection.length;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result.push(collection[i]);

        }
    }
    return result;
}
_.find = function(collection,arg){
    var result;
    for(var i= 0,len=collection.length;i<len;i++){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;

        }
    }
    return result;
}
_.findLast = function(collection,arg){
    var result;
    for(var len=collection.length,i= len-1;i>=0;i--){
        if(Base.isMatch(collection[i],arg)){
            result = collection[i];
            break;

        }
    }
    return result;
}
_.groupBy = function(array,arg,thisArg){
    var result = {};
    var len = array.length;
    if(typeof arg === 'function'){
        for(var i=0;i<len;i++){
            var val = arg(array[i]);
            result[val] ? ( result[val].push(array[i]) ) : (result[val] = [array[i]] );
        }
    }
    if(typeof arg === 'string'){
        for(var i=0;i<len;i++){
            var val = array[i][arg];
            result[val] ? ( result[val].push(array[i]) ): (result[val] = [array[i]]);
        }
    }

    if(typeof arg === 'object'){
        for(var i=0;i<len;i++){
            var is = true;
            for(var j in arg){

                if(arg[j] !== array[i][j]){
                    is = false;
                    break;
                }
            }
            result[is] ? (result[is].push(array[i])) : (result[is] =[ array[i] ]);
        }
    }
    return result;
}

// _.countBy([{name:1},{name:1},{name:2},{hehe:1,age:1}],{name:1});

_.invoke = function(array,callback,args){
    var ret = [];
    var newArg = [];
    for(var i= 2,len=arguments.length;i<len;i++){
        newArg.push(arguments[i]);
    }

    for(var key in array){
        var item = array[key];
        var temp ;
        if(typeof callback === 'string'){
            temp = item[callback]();
        }else if(typeof callback === 'function'){
            temp = callback.apply(array[key], newArg);
        }
        ret.push(temp);

    }
    return ret;
}


_.map=function(collections,arg){
    var ret = [];
    for (var i in collections) {

        ret.push(Base.getValue(collections[i], arg));
    }
    return ret;
}

_.max = function(collections,arg){
    var maxItem;
    var maxValue;
    var currentValue;
    for(var i in collections){

       if(!maxItem) {
           maxItem = collections[i];
           continue;
       }
       maxValue = Base.getValue(maxItem,arg);
       currentValue = Base.getValue(collections[i],arg);
       if(currentValue > maxValue){
           maxItem = collections[i];
       }
    }
    return maxItem;

}
_.min = function(collections,arg){
    var minItem;
    var minValue;
    var currentValue;
    for(var i in collections){

        if(!minItem) {
            minItem = collections[i];
            continue;
        }
        minValue = Base.getValue(minItem,arg);
        currentValue = Base.getValue(collections[i],arg);
        if(currentValue < minValue){
            minItem = collections[i];
        }
    }
    return minItem;

}
_.pluck = function(collections,property){
    var ret = [];
    for(var i in collections){
        ret.push(collections[i][property]);
    }
    return ret;
}
// previousValue, currentValue, index, array
_.reduce = function(array,callback){
    var result //= array[0];
    for(var i in array){
        if(!result){
            result = array[i];
        }else{
            result = callback(result,array[i],i,array);
        }
    }
    return result;
}
_.foldl = _.reduce;
// previousValue, currentValue, index, array
_.reduceRight = function(array,callback){
    var result ;//= array[0];
    for(var len = array.length,i=len-1;i>=0;i--){
        if(!result){
            result = array[i];
        }else{
            result = callback(result,array[i],i,array);
        }
    }
    return result;
}
_.foldR = _.reduceRight;
_.reject = function(collection,arg) {
    var ret = [];
    for(var i in collection){
        if(Base.isMatch(collection[i],arg)){
            ret.push(collection[i]);
        }
    }
    return ret;
}
_.sample = function(collection,size){
    var ret = [];
    var len = collection.length;
    if(!size)size = 1;
    size = (+size) >len? len: (+size);
    var cloneCollection = Base.makeArray(collection);
    for(var i = size-1;i>=0;i--){
        var index = Math.floor(Math.random()* (len));
        ret.push(cloneCollection[index]);
        cloneCollection.splice(index,1);
        len--;
    }
    return ret;
}
_.shuffle = function(collections){
    var ret = [];
    var len = collections.length;
    var index = -1;
    for(var i in collections){
        index++;

        var key = Math.floor(Math.random() * index);
        ret[index] = ret[key];
        ret[key] = collections[i];
    }
}
_.size = function(collections){
    var type = typeof collections;
    var len = 0;

    if(type === 'string' || type === '[object Array]' ){
        len= collections.length;
    }else{
        for(var i in collections){
            len++;
        }
    }
    return len;
}
_.some = function(arr,arg){
    var isOK = 0;
    if(typeof arg === 'function' && typeof arg(1)==='boolean'){
        isOK = arr.filter(function(v){
            return v !== undefined || v !== null;
        }).length;
    }

    if(typeof arg === 'string'){
        isOK =  arr.filter(function(v){
            return v.hasOwnProperty(arg);
        }).length;
    }
    if(typeof arg === 'object'){
        for(var i= 0,len=arr.length;i<len;i++){
            var isTrue = 1;
            for(var key in arg){
                if(arg[key] !== arr[i][key]){
                    isTrue = 0;
                    break;
                }
            }
            if(isTrue){
                isOK = 1;
                break;
            }
        }
    }
    return !!isOK;

}
function isAllNum(array,key){
    var is = ok;
    for(var i in array){
        if(typeof  array[i] !== 'number'){
            is = false;
            break;
        }
    }
    return is;
}
_.sortBy = function(collections,callback){
    var newArray = [];
    var newKv = [];

    // 这里暂时只考虑数组和字符串

    if(typeof collections === 'string'){
        return collections.split('').sort();
    }else if(typeof  collections === '[object Array]'){
        if(isAllNum(collections)){
            return collections.sort(function(a,b){
                return a-b;
            })
        }else{
            return collections.sort();
        }
    }
}
_.toArray = function(collections){
    var ret = [];
    for(var i in collections){
        ret.push(collections[i]);
    }
    return ret;
}
function whereInArray(arrSmall,arrBig){
    var is = true;
    for(var i in arrSmall){
        if(!arrBig.index(arrSmall[i])){
            is = false;
            break;
        }
    }
    return is;
}
function whereIsIn (item,arg){
    var isOk = true;

    for(var i in arg){
        if(typeof arg[i] ==='[object Array]' && !whereInArray(arg[i],item[i])){
            isOk = false;
            break;
        }else if(arg[i] !== item[i]){
            isOk = false;
            break;
        }
    }
    return isOk;
}
_.where = function(collection,arg){
    var ret = [];
    // 原方法也只支持数组
    for(var i in collection){
        if(whereIsIn(collection[i],arg)){
            ret.push(collection[i]);
        }

    }
    return ret;
}
_.after = function(n,func){

}
_.bind = function(func,thisArg,arg){

    func.apply(this,arg);
}
_.delay = function(func,wait){
    var len = arguments.length;
    var arg = [];
    for(var i=2;i<len;i++){
        arg.push(arguments[i]);
    }
    setTimeout(function(){
        func.apply(this,arg)
    },wait);
}
_.once = function(func){

    var has = 0;
    return function(){
        if(has){
            return;
        }
        func.apply(this,arguments);
        has = 1;
    }
}
_.functions = function(object){
    var re = [];
    for(var i in object){
        if(typeof object[i] === 'function'){
            re.push(i);
        }
    }
    return re;
}
_.merge = function(oBase,oSource){
    for(var i in oSource){
        oBase[i] = oSource[i];
    }
    return oBase;
}
_.assign = function(obj, sources, callback) {
	var args = arguments;
	var len = args.length;
	var forLen = len;
	var realCallback;
	var result = {};

	if (typeof args[len - 1] === 'function') {
		forLen = len - 1;
		realCallback = args[len - 1];
	}
	for (var i = 0; i < forLen; i++) {
		var val = args[i];
		for (var j in val) {
			result[j] = realCallback ? realCallback(val[j]): val[j];
		}
	}
	return result;
}
function baseClone(value,isDeep){
    var valueType = typeof value;


    if(valueType === 'undefined'){
        return value;
    }else if(valueType === 'object'){

        var realType = toString.call(value);
        if(realType === '[object Array]'){

            if(isDeep){
                return new Array(value);
            }else{
                return value;
            }

        }else if(realType === '[object RegExp]'){
            return new RegExp(value);
        }
        return new Object(value);
    }
    return value;
}

_.clone = function(value,isDeep,callback){
    if(callback){
        return callback(value);
    }
    return baseClone(value,isDeep);
}




_.create = function(objBase,objProp){
    for(var i in objProp){
        objBase[i] = objProp[i];
    }
    return objBase;
}
_.defaults = function(objBase,objProp){
    for(var i in objProp){
        if( !objBase.hasOwnProperty(i) ){
            objBase[i] = objProp[i]
        }
    }
    return;
}
_.findKey = function(obj,arg){
    var re ;
    for(var i in obj){
       if( Base.isMatch(obj[i],arg)) {
           re = i;
           break;
       }
    }
    return re;
}

_.forIn = function(object,callback){
    for(var i in object){
        callback(object[i],i);
    }
    return false;
}
_.forOwn = function(object,callback){
    for(var i in object){
        callback( i,object[i] );
    }
    return false;
}
_.has = function(object,key){
    return object.hasOwnProperty(key);
}
_.invert = function(object){
    var re = {};
    var key;
    for(var i in object){
        key = object[i].toString();
        re[key] = i;
    }
    return re;
}
_.isArguments = function(value){
    return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == '[object Object]' || false;
}
_.isArray = function(value){
    return value && toString.call(value) === '[object Array]';
}
_.isBoolean = function(value){
    return value && toString.call(value) === '[object Boolean]';
}
_.isDate = function(value){
    return value && typeof value === 'object' && toString.call(value) === '[object Date]';
}
_.isElement = function(value) {
    return value && typeof value === 'object' && /\[object\sHTML\w+Element\]/.test(toString.call(value));
}
_.isEmpty = function(value){
    if(toString.call(value) === '[object Array]'){
        return !!value.length;
    }
    if(typeof value === 'object'){
        var re = true;
        for(var i in value){
            re = false;
            break;
        }
        return re;
    }
    return !!value;
}
_.isEqual = function(o1,o2,callback){
    if(callback && typeof callback === 'function'){
        return callback(o1,o2);
    }
    if(typeof o1 !== 'object'){
        return o1 === o2;
    }
    for(var i in o1){
        if(o1[i] !== o2[i]){
            // 这里直接删除有些问题
            delete o1[i];
            delete o2[i];
            return false;
           // break;
        }
    }
    for(var i in  o2){
        if(o1[i] !== o2[i]){
            return false;
        }
    }
    return true;

}
_.isFinite = function(value){
    var valueStr = value.toString().trim();
    return /^[(\-)|(\+)]*\d+$/.test(valueStr)
}
_.isFunction = function(value){
    return typeof  value === 'function';
}
_.isNaN = function(value){
    return typeof value === 'number' && isNaN(value);
}
_.isNull = function(value){
    return value === null;
}
_.isNumber = function(value){
    return typeof value === 'number';
}
_.isObject = function(value){
    return typeof value === 'object';
}
_.isPlainObject = function(value){

}
_.isRegExp = function(value){
    return toString.call(value) === '[object RegExp]';
}
_.isString = function(value){
    return typeof value === 'string';
}
_.isUndefined = function(value){
    return typeof value === 'undefined';
}
_.keys = function(value){
    var re = [];
    for(var i in value){
        re.push(i)
    }
    return re;
}
_.mapValues = function(value,arg){
    var re = {};

    for(var i in value){
        Base.getValue(value[i],arg)
        re[i] = arg(value[i]);
    }
    return re;

}
_.omit = function(value,arg){
    var re = {};

    for(var i in value){
        var isAdd = false;
        if( toString.call(arg) === '[object Array]' ){
            isAdd = arg.indexOf(i) === -1;

        }else if(typeof arg === 'string'){

                isAdd = i !== arg;

        }else if(typeof arg === 'function'){
            isAdd = !arg(value[i]);
        }
        if(isAdd){
            re[i] = value[i];
        }

    }
    return re;
}
_.pairs = function(value){
    var re = [];
    for(var i in value){
        re.push([i,value[i]]);
    }
    return re;
}
_.omit = function(value,arg){
    var re = {};

    for(var i in value){
        var isAdd = false;
        if( toString.call(arg) === '[object Array]' ){
            isAdd = arg.indexOf(i) > -1;

        }else if(typeof arg === 'string'){

            isAdd = i === arg;

        }else if(typeof arg === 'function'){
            isAdd = !!arg(value[i]);
        }
        if(isAdd){
            re[i] = value[i];
        }

    }
    return re;
}
_.transform = function(value,callback){
    var re = {};
    for(var i in value){
        re[i] = callback(value,value[i],i);
    }
    return re;
}
_.values = function(value){
    var re = [];
    for(var i in value){
        re.push(value[i]);
    }
    return re;
}

_.constant = function(o){
	return o.valueOf();
}

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


_.identity = function(obj) {
	return obj;
}


_.mixin = function(obj,source) {
	for(var i in obj){
		_[i] = obj[i];
	}
}

var old = _;
_.noConflict = function() {
	window._ = old;
	return this;
}

var old = _;
_.noop = function(obj) {
	return;
}


_.now = function(){
	return new Date().getTime();
}

_.parseInt = function(val,radix) {
	if(typeof val === 'string'){
		val = val.replace(/^0+/g,'');
	}
	return parseInt(val,radix);
}

_.property = function(name){
	return function(object){
		return object[name];
	}
}
_.random = function(min,max,floating){
	var randomNum = Math.random();
	min = +min || 0;
	max = +max || 1;
	if(min % 1 !== 0 || max % 1 !== 0){
		floating = 1;
	}
	randomNum = randomNum * ( max - min ) + min;
	return floating ? randomNum : (Math.floor(randomNum));
}
_.result = function(object,key){
	if(typeof object[key] ==='function'){
		return object[key]();
	}
	return object[key];
}
_.runInContext = function(){
    return lodash;
}
_.template = function(){
    return ;
}
_.times = function(time,callback,arg){
	var array = [];
	if(toString.call(arg) !== '[object Array]'){
		arg = [arg];
	}

	while(time--){
		array.push(callback.apply(this,arg));
	}
}
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
var initNum = 0;
uniqueId = function(per){
	var currentId = ++initNum;
	return '' +  (typeof per === 'string' ? (per + initNum) : initNum);
}
})()
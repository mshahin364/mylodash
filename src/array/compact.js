var _ = lodash || _ || {};

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
## Lodash
Imitate from [lodash](http://lodash.com/docs)


## 了解到新的使用
* indexOf 支持多个参数
* isArguments 

## 发现原库里不合适的地方
* last
## 觉得没有必要
* uniq 不用sort 参数
* object 模块 findLastIndex 感觉没有必要，毕竟各个浏览器for in 的顺序都不一致 https://github.com/lodash/lodash/issues/714

## 看不懂的，感觉也用不着的
* xor 
https://lodash.com/docs#xor

* isNumber
```
function isNumber(value) {
      return typeof value == 'number' ||
        value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }
```
## 有问题的
```
isElement return value && value.nodeType === 1 || false; isElement({nodeType:1}) 得到 true
```
修改为：
```
_.isElement = function(value) {
    return value && typeof value === 'object' && /\[object\sHTML\w+Element\]/.test(toString.call(value));
}
```

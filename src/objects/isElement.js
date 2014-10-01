_.isElement = function(value) {
    return value && typeof value === 'object' && /\[object\sHTML\w+Element\]/.test(toString.call(value));
}
function method1() {
    console.log('method called');
}
var obj = {
    method1
};
obj.method1();


var obj = {
    sum: function(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1,5))
//A função a cima pode ainda mais encurtada
var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));
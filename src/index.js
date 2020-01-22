const $ = require('jquery');


let sayHello = (name) => {
    return "Hello";
}
console.log(sayHello());

$(' h1 ').click(function (e) {
    $(' h1 ').css('background-color', 'pink');
});
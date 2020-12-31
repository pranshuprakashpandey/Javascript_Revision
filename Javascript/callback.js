const myfunc = (callbackfunc) => {
    let value = 50;
    callbackfunc(value);
};

myfunc(function(value) {
    console.log(value);
})



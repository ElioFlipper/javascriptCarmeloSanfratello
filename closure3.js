function multiplyByTwo(a){
    function inner (){
        let number = 2
        console.log(a * number)
    }
    return inner;
}
multiplyByTwo(800)()

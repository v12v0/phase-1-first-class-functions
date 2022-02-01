function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function test (){}

}

function returnsAnAnonymousFunction(){
    return function() {}
}
const rotate = function(a,d,n){
    let e = d % n 
    let r = []
    r.push(...a.slice(e))
    r.push(...a.slice(0,e))
    return r 
}


let a = [1,2,3,4,5]
let d = 16
let n = 5

console.log(rotate(a,d,n))


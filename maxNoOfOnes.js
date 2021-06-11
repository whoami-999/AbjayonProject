let m = [[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]]
let index = 0
let b = 0
let r
for (let i in m){
    c = 0
    for (let j of m[i]){
        if ( j == 1){
            c += 1
        }
    }
    if (c > b){
        b = c
        r = i
    }
}
console.log(r)



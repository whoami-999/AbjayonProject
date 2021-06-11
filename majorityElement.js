const checkMajEl = function(a){
    let m = 0
    let n = a.length
    let d = Math.floor(n/2)
    let index = 0
    for (let i in a){
        let c = 0
        for (let j in a){
            if (a[i] == a[j]){
                c += 1
            }
        }
        if  (c > m){
            m = c
            index = i 
        }
    }
    if (m > d){
        console.log(a[index])
    }else{
        console.log("No Majority Element")
    }
}

let a1 = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let a2 = [3, 3, 4, 2, 4, 4, 2, 4]
checkMajEl(a1)
checkMajEl(a2)

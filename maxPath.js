const maxPath = function(a){
    let s = Math.max(...a[0])
    let v = a.splice(1,a.length)
    let j = a[0].indexOf(s)
    let f = [s]

    for (let i in v ){
        let b = j
        if (b == v[0].length -1){
            c = [b-1,b]
        }else if (b == 0){
            c = [b,b + 1]
        }else{
            c = [b, b-1,b + 1]
        }
    
        let d = []
        let e = []
        for (let j of c){
            d.push(v[i][j])
        }
        e.push(Math.max(...d))
        b = v[i].indexOf(e[0])
        f.push(...e)
    }

    let sum = 0
    let path = ''
    for (let i of f){
        sum+=i
        path += i +'-' 
    }

    console.log(sum)
    console.log(`The maximum sum path is ${path.slice(0,path.length-1)}  `)
}

let a1 = [[10, 10 , 2,  0, 20,  4], [1,  0,  0, 30,  2,  5 ],[0, 10,  4,  0,  2,  0 ],
                   [1 , 0,  2, 20,  0,  4 ]
]
let a2 = [[1,2,3],[9,8,7],[4,5,6]]


maxPath(a1)
maxPath(a2)

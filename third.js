let num = [1,8,7,6,5,]
let temp = 0

for(let i = 0; i<num.length; i++){
    for(let j = i+1; j<num.length; j++){
        if(num[i] > num[j]){
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
}
console.log(num)
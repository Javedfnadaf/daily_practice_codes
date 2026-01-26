// for(let i = 1; i<=10; i++){
//     if(i == 5){
//         continue
//     }
//     console.log(i)
// // }


// let day = 3

// switch(day){
//     case 1:
//         console.log("sunday")
//         break
        
//         case 2:
//             console.log("monday")
//             break

//             case 3:
//                 console.log("tuesday")
//                 break

//                 case 4:
//                     console.log("wednsday")
//                     break

//                     case 5:
//                         console.log("thursday")
//                         break

//                         default:
//                         console.log("invalid syntax")
// }




let str = "javedjaved";
let countJ = 0;
let countA = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "j") {
        countJ++;
    } else if (str[i] === "a") {
        countA++;
    }
}

console.log("j count:", countJ);
console.log("a count:", countA);


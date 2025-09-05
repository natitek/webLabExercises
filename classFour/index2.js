// function oddeven(i){
//     if(i % 2 == 0){
//         return 'even'
//     }
//     else if(i % 2 != 0){
//         return 'odd'
//     }
// }
// console.log(oddeven(4))


// function reverse(word){
//     let w = word;
//     let t = w;
    
//     for(let i = 0; i < w.length; i++){

      
//       console.log(t[w.length - i -1])
//     }
  
// }

// console.log(reverse('car'))


// function largestnum(input){
//     let thearray = input;
//     let largest = 0;
//     input.forEach(element => {
//         if(element > largest){
//             largest = element
//         }
     
        
//     })
//     console.log(largest);
// }

// largestnum([34,12,3,12,44,5])

// function countvowels(inputstring){
//     let count = 0;
//     let thestring = inputstring
//    for(let i  = 0 ; i < inputstring.length ; i++){
//         if(inputstring[i] == 'a' || inputstring[i] == 'e' ||  inputstring[i] == 'i' || inputstring[i] == 'o' || inputstring[i] == 'u'){
//             count++
//         }
//     }
//     console.log(`counted ${count} vowels`)
// }

// countvowels('yyay')


// function multipfunction(num){
//     for(let i = 0 ; i <= num; i++){
//         for(let j = 0; j <= num; j++){
//             console.log(i * j)

//         }
//         console.log('')
//     }

// }

// multipfunction(4)


function removedup(input){
    let unique = [];
   for(let i = 0 ; i < input.length; i++){
    for(let j = 0; j < input.length; j++){
        if(input[i] == input[j]){
            unique.push(input[i]);
            input.pop(input[])
        }
    }
   }

        
}

// function sumofdigits(num){
//    let insidenum = num.toString()
//     let sum = 0;

//     for(let i  = 0; i < insidenum.length; i++){
//        let thenum =  parseInt(insidenum[i])
        
//        sum += thenum;

//     }
//     console.log(sum)
// }
// sumofdigits(456)
// Question 1

// var numone = 1;
// let numtwo = 2;
// const numthree = 3;

// console.log(numone,numtwo,numthree)


// numone = 30;
// numtwo = 40;
// numthree = 45 cant reassign const

// console.log(numone,numtwo,numthree)

//question 2

function scopeDemo(){
    var val1 = 10;
    let val2 = 20;
    if(true){
        let val2 = 30;
        let val1 = 40


        console.log(`inside if block ${val1}`)
        console.log(`inside if block ${val2}`)
    }

      console.log(`outside if block ${val1}`)

      console.log(`outside if block ${val2}`)
}

scopeDemo();


// Question Three

function evenodd(){
    for(let i = 0; i < 5; i++){
    if(i % 2 == 0){
        console.log('even ' + i * 2);
    }
    else{
        console.log('odd ' + i);
    }
}

}

evenodd()

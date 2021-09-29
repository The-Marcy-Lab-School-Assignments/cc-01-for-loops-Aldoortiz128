//1
function countToFifty() {
  for (let i = 1; i < 51; i++){
      console.log ([i]);
  }
}

//2
function countFromOne(x){
 for (i = 1; i <= x; i++) {
 if (Number.isInteger(x)) {
     console.log ([i]);
}
 }
  
}

//3
function threeOrFiveInFifty(){
    for (let i=1; i < 50; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}


//4
function threeOrFive(num){
    for (let i=1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

//5
function triple(numarray){
    let arr = [];
    for (let i = 0; i < numarray.length; i++){
        arr.push(numarray[i]*3)
        ; console.log(arr);}
}


countToFifty();
countFromOne(5);
threeOrFiveInFifty(10);
threeOrFive(5);
triple([3,5,6,4]);
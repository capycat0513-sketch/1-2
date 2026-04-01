const readline = require('readline');

// console.log(readline);
// console.log(process.stdin);
// console.log(process.stout);
// console.log(process)
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('입력하세요', function(ans) {
    console.log(ans);
    if(ans>10){
        console.log('ans는 10보다 큽니다')
    }else{
        console.log('ans는 10보다 작습니다')
    }
    rl.close();
});
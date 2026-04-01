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
    // 나누었을때 나머지가 0이면 짝수
    if(ans>=60&&ans<=100){
        console.log('합격입니다')
    }else{
        console.log('저희 회사와 맞지 않는 인재이신거 같습니다')
    }
    rl.close();
});
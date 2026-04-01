const readline = require('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout    
})

rl.question('숫자 입력', (data)=>{
    let num=1;
    for(;num<=10;num=num+1){
        console.log(`${data}*${num}=${data*num}`);
    }
    console.log(data);
    
    rl.close();
})
// function aa(){
// // 함수선언 es2015 새로나온방법
// // const aa = ()=>
// }
// const aa=()=>{}


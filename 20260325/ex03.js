const num = 5;

if (num >= 30){
    console.log('num은 30 이상');
}
else if (num >=20){
    console.log('num은 20 이상')
}
else if(num >=10){
    console.log('num은 10 이상')
}
else{
    throw new console.error('10 이상의 숫자를 적으세요');
    
}
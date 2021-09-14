function getSqrt(num: number | string){
    if ( typeof num == 'undefined'){
        console.log('Будь-ласка введіть число');
    }
    else if(typeof num !== 'number'){
        console.log('Повинно бути числове значення');
    }
    else if ( num < 0 ){
        console.log('Введіть додатнє число');   
    }
    else {
        let result = Math.sqrt(num)
        console.log(result); 
    }
}

getSqrt('wewe');
getSqrt(9);
getSqrt(-9);
getSqrt();

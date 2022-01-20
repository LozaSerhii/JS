function isEven(numb)
{
    if(typeof numb==='number')
    {
        if(numb %3==true ) 
        {
            return true;
        } 
        else
        return false;
    }
    else{
        throw new Error('Error: parameter type is not a Number');
    }
}


console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven('Content')); // Error: parameter type is not a Number
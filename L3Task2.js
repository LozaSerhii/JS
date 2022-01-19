function f()
{
    var result=0;
    for(item of arguments)
    {
        if(typeof item === 'number')
        {
            result += item;
        }
        else
        {
            throw new Error('Error: parameter type is not a Number');
        }
    }
    return result;
}
 
console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
console.log(f(1,2,'s',4)); // Error: all parameters type should be a Number
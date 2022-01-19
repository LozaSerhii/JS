function f(a,b,c)
{
    var result=0;
    if(typeof a === 'number' && typeof b=== 'number' && typeof c==='number')
    {
        result = (a-b)/c;
    }
    else
    {
        throw new Error('Error: all parameters type should be a Number');
    }
    return result;
}
console.log(f(9,3,2)); // 3
console.log(f('s',9,3)); // Error: all parameters type should be a Number
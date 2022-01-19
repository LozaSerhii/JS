function f(a)
{
    let  result;
    if(typeof a === 'number')
    {
        result = a*a*a;
    }
    else
    {
        throw new Error('Error: parameter type is not a Number');
    }
    return result;
}
 
var res = f(2);
console.log(res);
res = f('Content');
console.log(res);
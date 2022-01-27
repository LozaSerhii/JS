function arrayFill(item,sizeArr)
{
    let result = [];
    if(typeof item === 'number' || typeof item==='string' || typeof item === 'object' || Array.isArray === item)
    {
        if(typeof sizeArr==='number')
        {
            for(i=0;i<sizeArr;i++)
            {
                result.push(item);
            }
            return console.log(result);
        }
        else
            throw new Error('Error: second parameter type should be a number');
    }
    else
    {
        throw new Error('Error: first parameter type should be a number, string, object, array');
    }

};

arrayFill('x',5); // [x,x,x,x,x]
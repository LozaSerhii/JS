function f(arr)
{
    if(Array.isArray(arr) === true)
    {
        if(arr.length !== 0)
        {
            console.log(arr[0]);
            arr.splice(0,1);
            if(arr.length ==1)
            {
                return console.log(arr[0]);
            }
            return f(arr);
        }
        else
        {
            throw new Error('Error: parameter cant be an empty');
        }

    }
    else
    {
        throw new Error('Error: parameter type should be an array');
    }


};

f([1,2,3]);
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
function reverse(arr)
{
    if(Array.isArray(arr)===true)
    {
        if(arr != [])
        {
            let result = [];
            for(let i=arr.length-1;i>=0;i-- )
            {
                result.push(arr[i]);
            }
            return console.log(result);
        }
        else
        throw new Error('Error: first parameter size should be not empty');
    }
    else
    throw new Error('Error: first parameter type should be an array');

};

const arr = [3,2,1];
reverse(arr); // [1,2,3]
function reduceRight(arr, callback,acc) {
	if(Array.isArray(arr) === true )
    {
        if(typeof callback=== 'function')
        {
            if(typeof acc==='number' || typeof acc=== 'string')
            {
                let result = acc;
                for(let i=arr.length-1;i>=0; i--)
                {
                    result = callback( result, arr[i], i, arr);
                }
                return console.log(result);
            }
            else
            {
                throw new Error('Error: acc parameter type should be a string or a number');
            }

        }
        else
        {
            throw new Error('Error: second parameter type should be a function');
        }
    }
    else
    {
        throw new Error('Error: first parameter type should be an array');
    }
}

const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc);
function every(arr, callback) {
	if(Array.isArray(arr) === true )
    {
        if(typeof callback=== 'function')
        {
            for(let i=0;i<arr.length; i++)
            {
                if(!callback(arr[i],i, arr))
                {
                    return console.log(false);
                }
            }
            return console.log(true);
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

every(arr, function (item, i, arr) { 
     return item >=0;
});
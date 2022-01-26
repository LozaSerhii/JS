function forEach(arr, callback) {
	if(Array.isArray(arr) === true)
    {
        if(typeof callback=== 'function')
        {
            for(let i=0;i<arr.length; i++)
            {
                 callback(arr[i],i, arr)
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

forEach(arr, function (item, i, arr) { 
     console.log(item, i, arr);
})

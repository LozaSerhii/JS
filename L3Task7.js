function getDivisors(numb)
{
    var mass = [];
    if(typeof numb === 'number')
    {
        if(numb!==0)
        {
            for(i=1;i<=numb;i++)
            {
                if(numb%i==0)
                {
                    mass.push(i);
                }
            }
            return mass;
        }
        else
        {
            throw new Error('Error: parameter cant be a 0');
        }
    }
    else
    {
        throw new Error('Error: parameter type is not a Number');
    }
};


console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0
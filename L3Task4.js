function f(numbDay)
{
    var result;
    if(typeof numbDay === 'number')
    {
        if(numbDay>0 && numbDay<8)
        {
            switch(numbDay)
            {
                case 1:
                    result = 'Воскресенье';
                    break;
                case 2:
                    result = 'Понедельник';
                    break;
                case 3:
                    result = 'Вторник';
                    break;
                case 4:
                    result = 'Среда';
                    break;
                case 5:
                    result = 'Четверг';
                    break;
                case 6:
                    result = 'Пятница';
                    break;
                case 6:
                    result = 'Субота';
                    break;
            }
        }
        else
        {
            throw new Error('Error: parameter should be in the range of 1 to 7');
        }
    }
    else
    {
        throw new Error('Error: parameter type is not a Number');
    }
    return result;
}

console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
console.log(f(8)); // Error: parameter should be in the range of 1 to 7
console.log(f('1')); // Error: parameter type is not a Number
function isPositive(numb)
{
    if(typeof numb === 'number')
    {
        if(numb>0)
        {
            return true;
        }
        else
            return false;
    }
    else
    {
        throw new Error('Error: parameter type is not a Number');
    }
};

var arr = [1, 2, -4, 3, -9, -1, 7];
var arrNew = [];
var SizeArr = arr.length;
for(var i=0; i<SizeArr; i++)
{
    if(isPositive(arr[i])==true)
    {
        arrNew.push(arr[i]);
    }

}
console.log(arrNew);

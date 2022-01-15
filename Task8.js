var arr = [1,2,3,4];
var result = 0;
for(i=0; i<arr.length;i++)
{
    if(arr[i]%2==false && arr[i]>3)
    {
        result = result + arr[i];
    }
}
console.log(result);
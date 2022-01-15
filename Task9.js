var arr = [1,2,3,4,5,6];
let tempMass = [];
for(i=0; i<arr.length;i++)
{
    for(j=i;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    tempMass.push(arr[i]);
}
console.log(tempMass);
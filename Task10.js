var arr = [6,5,4,3,2,1];
let tempMass = [];
for(i=0; i<arr.length;i++)
{
    for(j=i;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    tempMass.push(arr[i]);
}
console.log(tempMass);
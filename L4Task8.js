
function f(array) {
    var rezult = [];
    (function flat(array) {
      array.forEach(function(item) {
        if (Array.isArray(item)) 
        {
            flat(item);
        }
        else 
        {
            if(typeof item ==='number' || Array.isArray(item)===true)
            {
                rezult.push(item);
            }
            else
            {
                throw new Error('Error: item parameter type should be a number or an array ');
            }       
        }
      });
    })(array);
    if(rezult.length == 0)
    {
        rezult.push(0);
        return console.log(rezult);
    }
    else
    {
        return console.log(rezult);
    }
  }
  const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
  f(arr); // 12
  const arr2 = [[[[[1,2]]]]];
  f(arr2); // 3
  const arr3 = [[[[[1,2]]],2],1];
  f(arr3); // 6
  const arr4 = [[[[[]]]]];
  f(arr4); // 0
  const arr5 = [[[[[],3]]]];
  f(arr5); // 3
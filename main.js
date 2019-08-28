let arr=[1, 5, 7, 3, 4, 5, 2, 1, 5];
let arr1=[];
let count=0;
let arr3=[];
let max=0;
function countNumber() {
    for(let i=0;i<arr.length;i++)
    {
        count=0;
       arr1.push(arr[i]);
       for(let j=0;j<arr.length;j++)
       {
           if(arr1[i]==arr[j])
           {
               count++;
           }
       }
        arr3.push(count);
    }
    return console.log(arr3);
}

function findMax() {
    max=arr3[0];
    let i=0;
    for (i;i<arr3.length;i++)
    {
        if(arr3[i]>max)
        {
            max=arr[i];
        }
    }
    return document.write("So xuat hien nhieu nhat "+max);
}

countNumber();
findMax();
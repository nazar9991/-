const arr = [1,2,5,9,5,3,12,34,55];
function poisk (arr,el){
    for(let i = 0; i<arr.length;i++){ 
        if(arr[i]===el){
            return i;
        }
    }
    return -1;
}
    
function poisk2(arr,el){ 
    let left = -1;
    let right = arr.length;
    while(right-left>1){
        const mid = Math.floor((left+right)/2);
        if(arr[mid]===el){
            return mid;
        }
        if (arr[mid]>el){
            right = mid;
        }else{
            left = mid;


        }
        }
        return -1;
    
}
console.log(poisk(arr,77))
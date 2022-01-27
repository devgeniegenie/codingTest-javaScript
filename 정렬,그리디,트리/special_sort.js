/**
 * Special Sort(구글인터뷰)
 * https://codingdojang.com/scode/414?answer_mode=hide
 **/

const sol = (arr) => {
    let result = arr;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j+1] < 0 && arr[j] > 0){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return result;
}
const arr = [1, 2, 3, -3, -2, 5, 6, -6]
console.log(sol(arr))

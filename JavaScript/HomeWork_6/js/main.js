function filterBy(arr, value) {
    let newArr = [];
    for (let item of arr){
        if (value !== typeof item){
            newArr.push(item);
        }
    }
    return newArr;
}

console.log(filterBy([1, "test", true], "string"));

// function filterBy(arr, value) {
//     let newArr = arr.filter(item => typeof item !== value);
//     return newArr;
// }
//
// console.log(filterBy([1, "test", true], "string"));
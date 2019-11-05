function filterBy (value){
    let arr = [1,"yeah", true];
    for (let i = 0; i <= 2; i++) {
        let typeOf = typeof arr[i];
        let typeOfToString = typeOf.toString();
        console.log(typeOfToString);
        if (value == typeOfToString){
            let newArr = arr.splice(arr.indexOf(typeOf), 1);
            console.log(newArr);
        }
    }

}



// function arrayRemove(arr, value) {
//         arr = [1,"yeah", true];
//     return arr.filter(function(ele){
//         return  ele != typeof value;
//     });
//
// }


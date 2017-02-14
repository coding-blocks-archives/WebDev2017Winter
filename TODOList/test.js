/**
 * Created by championswimmer on 14/02/17.
 */


arr = [1,2,3,4];
obj = {a: 10, b:20, c: []};

function changeData (data, type, method) {
    if (method == 1) {
        if (type == 1) {
            data[2]++;
        } else {
            data.c = [1,2,3];
        }
    } else {
        if (type == 1) {
            data = [6,7,8,9];
        } else {
            data = {a:345, b:234}
        }
    }

}
console.log(arr);
changeData(arr, 1, 1);
console.log(arr);

console.log(arr);
changeData(arr, 1, 2);
console.log(arr);

console.log(obj);
changeData(obj, 2, 1);
console.log(obj);



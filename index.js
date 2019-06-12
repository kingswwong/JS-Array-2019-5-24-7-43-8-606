// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a 为字符串
// b 为数组

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function f() {
    for(let i = 0;i < a.length;i++){
        a[i] = a[i] * 2;
    }
}
f()
console.log(a)

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function f(num) {
    let smb = "";
    switch (num) {
        case 1:
            smb = " ";
            break;
        case 2:
            smb = "+";
            break;
        case 3:
            smb = ",";
            break;
    }
    let temp = "";
    for(let i = 0;i < colors.length - 1;i++){
        temp += colors[i] + smb;
    }
    temp += colors[3];
    return temp;
}
console.log(f(3))

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNum(a,b){
    return b - a;
}
console.log(a.sort(sortNum))

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function f(a) {
    let num = 0;
    let temp = a[0];
    for(let i = 0;i < a.length;i++){
        let count = 0;
        for(let j = i + 1;j < a.length;j++){
            if(a[i] === a[j]){
                count++;
            }
        }
        if(num < count){
            num = count;
            temp = a[i];
        }
    }
    return temp;
}

/**
 * @description :Ordered list
 * @param {num}
 * @return displays the numbers in ordering
  */
const LinkedListData = require('../utility/linkedlist');
let fs = require('fs')
file = fs.readFileSync('../orderedll/file.txt')
let list = new LinkedListData.LinkedList
fileArr = file.toString().split(' ')
console.log(fileArr)
fileArr.forEach(element => {
    list.sortedInsert(parseInt(element))
});
list.printList()

ifFoundAddElseDel = (num) => {
    if (list.findElement(num)) {
        list.deleteElement(num)
    } else {
        console.log("Number not found!")
        list.sortedInsert(num)
    }
    arr = list.getArr()
    fs.writeFileSync("../orderedll/file.txt", arr.join(' '))
    list.printList()
}
module.exports = {
    ifFoundAddElseDel
}
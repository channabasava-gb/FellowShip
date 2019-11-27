/**
* @Execution default cmd>node.js
* @purpose :Read an string and Replace with <<Username>>
*/
exports.stringReplace = () => {
  let input = require("readline-sync");
  str = input.question("Enter the string name ");
  let strLength = str.length;
  if ((strLength > 3 && str >= "a" && str <= "z") ||
    (str >= "A" && str <= "Z")) {
    let str1 = "Hi <<UserName>> how r u";
    console.log(str1);
    let result = str1.replace("<<UserName>>", str);
    console.log(result);
  }
}

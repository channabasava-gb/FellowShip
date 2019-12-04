/****************************************************************************************
* @Execution : default node : cmd> factory.js
* @description :Prints the singletonDesign pattern design
* @overview : designPatterns
* @author : channabasava<channabasavabml@gmail.com>
* @version : 6.9.0
* @since : 13 November 2019
******************************************************************************************/
var mySingleton =(function(){
    //instance stores reference to the singleton
    var instance;
    function init() {
        //singleton
        //private method and variables
        function privateMethod() {
            console.log('i am private');
        }
        var privateVariable = "i am also private";
        var privateRandomNumber = Math.random();
        return {
            //public methods and variables
            publicMethod: function() {
                console.log("the public can seen me!");
            },
            publicProperty: "i am also public",
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };
    return{
        //get the singleton instance if one exists
        //or creat one if it doesn't
        getInstance: function() {
            if (!instance) {
                instance = init()
            }
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber ==singleB.getRandomNumber);
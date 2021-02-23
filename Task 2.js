let obj = {
    key1: "prop1",
    key2: "prop2",
    key3: "prop3"
};

let str = "key4";

//сама функция
function checkKeyInObj(obj, str) {
   if (str in obj) {
            return true;
        }
    
    return false;
}

console.log(checkKeyInObj(obj, str))

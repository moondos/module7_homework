const obj1 = {
    prop1: "1",
    prop2: "2",
    prop3: "3"
};

const obj2 = Object.create(obj1);

obj2.prop4 = "4";
obj2.prop5 = "5";

// Сама функция

function getOwnProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

getOwnProp(obj2);

const person = {
    city: "Moscow",
}

const student = Object.create(person);

student.ownCity = "Piter";
student.old = "25";
student.catName = "Vasily";

function returnKeysAndValues(item){
    for(let key in item){
        if(item.hasOwnProperty(key)){
            console.log(`Ключ: ${key} | Значение: ${item[key]}`);
        }
    }
}

returnKeysAndValues(student);
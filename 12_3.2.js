const antStr = 'third';

const anyObj = {
    first: '1',
    second: '2',
    third: '3',
};

function checkStringInObject(str, obj){
    // console.log(str in obj);

    return str in obj;
};

checkStringInObject(antStr, anyObj);
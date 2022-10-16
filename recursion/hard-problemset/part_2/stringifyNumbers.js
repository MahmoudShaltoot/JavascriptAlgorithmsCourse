/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
    const newObj = {};
    for (let key in obj) {
        if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) newObj[key] = stringifyNumbers(obj[key])
        else if (typeof obj[key] == 'number') newObj[key] = `${obj[key]}`;
        else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

(function main() {
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }

    console.log(stringifyNumbers(obj));

    // console.log(obj);
})();

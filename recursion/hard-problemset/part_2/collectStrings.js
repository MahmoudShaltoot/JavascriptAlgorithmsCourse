// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
  const newArr = [];

  for (let key in obj) {
    if (typeof obj[key] == 'object') newArr.push(...collectStrings(obj[key]));
    else if (typeof obj[key] == 'string') newArr.push(obj[key]);
  }

  return newArr;
}

(function main() {
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
  }
  console.log(collectStrings(obj));
})()
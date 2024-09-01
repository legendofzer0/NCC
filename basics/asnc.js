function similateApiCall(processData) {
  setTimeout(() => {
    console.log("Api Call is Done");
    processData();
  }, 2000);
}
function processData() {
  console.log("Data Processed");
}

function newSimilateApiCall() {
  let sucess = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Api Call is Done");
      resolve();
      if (sucess) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

similateApiCall(processData);
console.log("After Simulate");

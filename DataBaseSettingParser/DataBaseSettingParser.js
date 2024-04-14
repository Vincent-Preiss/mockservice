exports.parse = (settings) => {
  let returnObj = {}; 
  for (const [key, value] of Object.entries(settings)) {
     let innerReturnObj ={}
    for (const [innerKey, innerValue] of Object.entries(value)) {
      if (typeof innerValue === "string") {
        let newInnerValue; 
        if (innerValue.startsWith('[') && innerValue.endsWith(']')) {
          newInnerValue = innerValue.replace('[', '');
          newInnerValue = newInnerValue.replace(']', '');
          newInnerValue = newInnerValue.split(',');
          newInnerValue.map(el => {
            return replaceKeyWordStringsWithKeyWords(el)
          });
           innerReturnObj[innerKey] = newInnerValue;
        }
        else {
          innerReturnObj[innerKey] = replaceKeyWordStringsWithKeyWords(
            innerValue
          );
        }
      }
      else {
        innerReturnObj[innerKey] = innerValue;
      }
    }
    returnObj[key] = innerReturnObj;
  }
  console.log(returnObj)
    return {
      returnObj
    };
}

const replaceKeyWordStringsWithKeyWords = (string) => {
  switch (string) {
    case "true":
      return true; 
    case "String":
      return String; 
    case "Number":
      return Number; 
    default:
      return string; 
  }
}
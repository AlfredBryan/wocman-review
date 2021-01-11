export const normalizeMoney = (value) => {
  let val;
  let testVal = String(parseInt(value));
  if (testVal.length === 4) {
    val = testVal[0] + "K";
  } else if (testVal.length === 5) {
    val = testVal[0] + testVal[1] + "K";
  } else if (testVal.length === 6) {
    val = testVal[0] + testVal[1] + testVal[2] + "K";
  } else if (testVal.length === 7) {
    val = testVal[0] + "M";
  } else if (testVal.length === 8) {
    val = testVal[0] + testVal[1] + "M";
  } else if (testVal.length === 9) {
    val = testVal[0] + testVal[1] + testVal[2] + "M";
  } else if (testVal.length === 10) {
    val = testVal[0] + "B";
  } else if (testVal.length === 11) {
    val = testVal[0] + testVal[1] + "B";
  } else if (testVal.length === 12) {
    val = testVal[0] + testVal[1] + testVal[2] + "B";
  } else if (testVal.length === 13) {
    val = testVal[0] + "T";
  } else if (testVal.length === 14) {
    val = testVal[0] + testVal[1] + "T";
  } else if (testVal.length === 15) {
    val = testVal[0] + testVal[1] + testVal[2] + "T";
  } else {
    val = value;
  }
  return "₦" + val;
};

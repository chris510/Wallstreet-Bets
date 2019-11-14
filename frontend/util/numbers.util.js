export const parseFloatToDollars = (float) => {
  let dollars = "";
  if (float < 0) {
    dollars = parseFloat(-float).toFixed(2);
    dollars = "-$" + parseFloat(-float).toFixed(2);
  } else {
    dollars = parseFloat(float).toFixed(2);
    dollars = "$" + dollars;
  }
  return dollars
}

export const parseFloatToPostNegPercent = (float) => {
  let percent = "0.00%";
  if (float === 0 || float.toFixed(2) === "0.00") {
    percent = parseFloat(float).toFixed(2) + "%";
  } else if (float < 0) {
    percent = "-" + parseFloat(-float).toFixed(2) + "%";
  } else if (float > 0) {
    percent = "+" + parseFloat(float).toFixed(2) + "%";
  }
  return percent;
}

export const parseFloatToPosNegDollars = (float) => {
  let dollars = "$0.00";
  if (float < 0) {
    dollars = parseFloat(-float).toFixed(2);
    dollars = "-$" + dollars;
  } else if (float > 0) {
    dollars = parseFloat(float).toFixed(2);
    dollars = "+$" + dollars;
  } else {
    dollars = "$" + parseFloat(float).toFixed(2);
  }
  return dollars;
}
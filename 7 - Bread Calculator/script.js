function getValues() {
  const quantity = document.getElementById("quantity").value;
  const yeast = document.getElementById("yeast").value;

  const dryYeast = document.getElementById("DryYeast").value;
  const freshYeast = document.getElementById("FreshYeast").value;

  if (yeast == dryYeast) {
    dryToLevain(quantity);
    dryToFresh(quantity);
  } else if (yeast == freshYeast) {
    freshToDry(quantity);
    freshToLevain(quantity);
  } else {
    levainToFresh(quantity);
    levainToDry(quantity);
  }

  //console.log(yeast);
  //console.log(intQuantity);
}

function freshToDry(value) {
  const resultDry = document.getElementById("resultDry");
  const resultFresh = document.getElementById("resultFresh");
  const i = Math.round(value / 3);
  resultDry.innerHTML = i + "g";
  resultFresh.innerHTML = value + "g";
}

function freshToLevain(value) {
  const resultLevain = document.getElementById("resultLevain");
  const resultFresh = document.getElementById("resultFresh");
  const x = Math.round(value * 5);
  resultLevain.innerHTML = x + "g";
  resultFresh.innerHTML = value + "g";
}

function dryToLevain(value) {
  const resultLevain = document.getElementById("resultLevain");
  const resultDry = document.getElementById("resultDry");
  const y = Math.round(value * 15);
  resultLevain.innerHTML = y + "g";
  resultDry.innerHTML = value + "g";
}

function dryToFresh(value) {
  const resultFresh = document.getElementById("resultFresh");
  const resultDry = document.getElementById("resultDry");
  const k = Math.round(value * 3);
  resultFresh.innerHTML = k + "g";
  resultDry.innerHTML = value + "g";
}

function levainToFresh(value) {
  const resultFresh = document.getElementById("resultFresh");
  const resultLevain = document.getElementById("resultLevain");
  const n = Math.round(value / 5);
  resultFresh.innerHTML = n + "g";
  resultLevain.innerHTML = value + "g";
}

function levainToDry(value) {
  const resultLevain = document.getElementById("resultLevain");
  const resultDry = document.getElementById("resultDry");
  const m = Math.round(value / 15);
  resultDry.innerHTML = m + "g";
  resultLevain.innerHTML = value + "g";
}

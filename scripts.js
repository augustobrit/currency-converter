// https://api.exchangeratesapi.io/latest?base=USD
// https://api.exchangeratesapi.io/latest?symbols=USD,GBP

const EXCH_API = "https://api.exchangeratesapi.io/latest?";

const getData = async () => {
  try {
    let res = await fetch(EXCH_API);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

console.log(
  getData()
    .then(data => console.log(data.rates))
    .catch(error => console.log(error.message))
);

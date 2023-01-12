const promise = () => {
  return new Promise((resolve, reject) => {
    const result = fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    // console.log(result); //promise
    result
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

promise()
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    // console.log(res);
    for (let i = 0; i < res.length; i++) {

      let data = []
      data.push(res[i].image)
      data.push(res[i].name)
      data.push(res[i].symbol)
      data.push(res[i].current_price)
      data.push(res[i].total_volume)
      data.push(res[i].price_change_percentage_24h)
      data.push(res[i].market_cap)
      
      createRow(data)  // array of objects
      // createRowNew(res)
    }
  })
  .catch((err) => {
    console.log(err);
  });
  

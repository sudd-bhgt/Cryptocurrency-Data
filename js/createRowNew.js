const createRowNew = (data) => {
    data.forEach(crypto => {
        let row = document.createElement("tr");
        document.getElementById("table").appendChild(row);
        
        let cryptoName = document.createElement("td");
        row.appendChild(cryptoName)
        cryptoName.innerText = crypto.name

        let cryptoSymbol = document.createElement("td");
        row.appendChild(cryptoSymbol)
        cryptoSymbol.innerText = crypto.symbol



    });
}
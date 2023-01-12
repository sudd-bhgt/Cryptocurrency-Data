const createRow = (data) => {
  let row = document.createElement("tr");
  document.getElementById("table").appendChild(row);
  let imageCell = document.createElement("td");
  row.appendChild(imageCell);
  let image = document.createElement("img");
  image.src = data[0];
  imageCell.appendChild(image);

  // let cell1 = document.createElement("td");
  // row.appendChild(cell1);
  // let image = document.createElement("img");
  // image.src = data[0];
  // cell1.appendChild(image);
  // let text = document.createElement('span')
  // cell1.appendChild(text)
  // text.innerText = data[1]

  for (let i = 1; i < data.length; i++) {
    let dataItem = document.createElement("td");
    if (i === 2) {
      dataItem.innerText = data[i];
      dataItem.style.textTransform = "Uppercase";
    } else if (i === 3 || i === 4) {
      dataItem.innerText = `$${data[i]}`;
    } else if (i === 5) {
      dataItem.innerText = parseFloat(data[i]).toFixed(2);
      if (data[i] < 0) {
        dataItem.style.color = "red";
      } else {
        dataItem.style.color = "green";
      }
    } else if (i === 6) {
      dataItem.innerText = `Mkt Cap : $${data[i]}`;
    } else {
      dataItem.innerText = data[i];
    }

    if (i === 3 || i === 4 || i === 5 || i === 6) {
      dataItem.style.textAlign = "right";
    }
    row.appendChild(dataItem);
    // console.log(dataItem);
  }

  
};

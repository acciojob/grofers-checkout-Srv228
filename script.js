const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i].textContent);
  }

  const table = document.querySelector('table');
  const newRow = table.insertRow();
  const newCell = newRow.insertCell();
  newCell.colSpan = 2;
  newCell.style.fontWeight = 'bold';
  newCell.textContent = `Total price: $${total.toFixed(2)}`;
};

getSumBtn.addEventListener('click', getSum);

getSumBtn.addEventListener("click", getSum);
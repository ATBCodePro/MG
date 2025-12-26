function calculateTotal() {
  let items = document.querySelectorAll(".item");
  let qtys = document.querySelectorAll(".qty");
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    let price = Number(items[i].value);
    let quantity = Number(qtys[i].value);
    total += price * quantity;
  }

  document.getElementById("total").innerText = "Total: £" + total;
}

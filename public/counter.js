

let btn = document.querySelectorAll("#btn");
let counter = document.querySelectorAll("#myInput");
    
let total=0;
const list = document.getElementById('storageList');
const total_elem = document.querySelector('.total');
const ordord = document.querySelector('.orderorder');


console.log(counter);
for (let j = 0; j < btn.length; j += 1) {
  btn[j].addEventListener("click", function () {
    let costofdish = btn[j].getAttribute("data-name");
    let costofprice = btn[j].getAttribute("data-price");
    let vlue=counter[j].value * costofprice;
    localStorage.setItem(costofdish,vlue);
  });
}
let btnorder=document.querySelector(".btnorder")
let modal=document.querySelector(".modal")

btnorder.addEventListener("click",function(){
    modal.classList.add("open")


for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let li = document.createElement('li');
    li.textContent = `${key}: ${value}`;
    total += Number(value);
    list.appendChild(li);
}
total_elem.innerHTML=total

})


ordord.addEventListener("click",async function(){

  const order={
    dish:"",
    price:0
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    order.dish += `${key}: ${value},`;
}
order.price=total


CreateOrder(order)

})

async function CreateOrder(obj) {
  console.log(obj)
  const response = await fetch("/history/add", {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body:JSON.stringify(obj)
  });
  if (response.ok === true) {
      const user = await response.json();
      alert(user.message)
      localStorage.clear()
  }
}
let cros=document.getElementsByClassName("cros")
cros[0].addEventListener("click",function(){
  console.log(cros)
  modal.classList.remove("open")
})

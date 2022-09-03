const listaArticulos = document.querySelector('#shopping-list tbody');


function addProduct(e){


  const getElement = e.target.parentElement.parentElement;


const product = {
    id: getElement.querySelector('.product-id').textContent,
    name: getElement.querySelector('.product-name').textContent,
    price: getElement.querySelector('.product-price').textContent
  }

  
  const newElement = document.createElement('tr');

  let quantity = 1;
  let itemPrice = product.price * quantity;

  newElement.innerHTML = `
      <td>${ product.id }</td>
      <td>${ product.name }</td>
      <td>${ product.price }</td>
      <td><input type="number" name="quantity" class="product-quantity form-control" step="any" value="${ quantity }" min="0" /></td>
      <td class="st">${ itemPrice }</td>
      <td><a href="" class="remove-item" id="${ product.id }">X</a></td>
  `;

  

  listaArticulos.appendChild(newElement);
  calculaElTotal();

}


let addThis = document.getElementsByClassName('add-product');

for (let i = 0; i < addThis.length; i++){
  addThis[i].addEventListener('click', addProduct);
}


listaArticulos.addEventListener("input", (e)=>{
  if(e.target.type == "number"){
    let unidades = Number(e.target.value); console.log(unidades);
    
    let tr = e.target.parentNode.parentNode;
    
    let precioUnitario = Number(tr.querySelectorAll("td")[2].textContent);console.log(precioUnitario)
    
    let subTotal = unidades * precioUnitario;console.log(subTotal)
    
    let precioTotal = tr.querySelectorAll("td")[4];
    precioTotal.textContent = subTotal;
     
  }
  
calculaElTotal();
})

function calculaElTotal(){
   let total = 0; 
   let tdsArray = Array.from(listaArticulos.getElementsByClassName("st"));
   tdsArray.forEach(td =>{
   
   total += Number(td.textContent);console.log(total)
   valor_total.textContent = total;
 })
  
}



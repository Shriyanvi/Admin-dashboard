
let productInfo = JSON.parse(localStorage.getItem("product")) || [];

let tasklist1=document.querySelector(".name");
let tasklist2=document.querySelector(".id");
let tasklist3=document.querySelector(".quantity");
let tasklist4=document.querySelector(".price");
let tasklist5=document.querySelector(".delete");

function showProduct(productData) {
    // tasklist.innerHTML = "";

    // Check if there is any product data to display
    // if (productData.length === 0) {
    //     tasklist.innerHTML = "<li>No products available</li>";
    // } else {
        for (let i = 0; i < productData.length; i++) {
            let productItem = productData[i];
            let li = document.createElement("li");
            let li1= document.createElement("li");
            let li2= document.createElement("li");
            let li3= document.createElement("li");
            let li4=document.createElement("li");
            li.innerHTML = `<span class="pname">${productItem.pname}</span>`;
            li1.innerHTML = `<span class="pid">${productItem.pid}</span>`;
            li2.innerHTML =  `<span class="quantity">${productItem.pquantity}</span>`;
            li3.innerHTML =  `<span class="price">${productItem.pprice}</span>`;
            li4.innerHTML =`<span class="delete-btn" ><button type="button" class ="dltBtn">Delete</button></span>`;
            
            tasklist1.appendChild(li);
            tasklist2.appendChild(li1);
            tasklist3.appendChild(li2);
            tasklist4.appendChild(li3);
            tasklist5.appendChild(li4);
        }
    //}
}

// Call the showProduct function to display the product data
showProduct(productInfo);

let deleteBtn = document.querySelector(".dltBtn");

deleteBtn.addEventListener("click" , ()=>{

    let deleteContainer=document.querySelector(".deleteContainer");
    deleteContainer.style.display="block";
})

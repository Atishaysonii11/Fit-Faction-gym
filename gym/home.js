/*const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ebed9ecd2msh15dad67ac14ec70p1883dejsn01d687177e85',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	}
};
let data=[]
let button=document.getElementById('button')
let show=document.getElementById('show')
button.addEventListener("click",function display(){
	fetch(url,options)
	.then((res)=>res.json())
	.then((res)=>{
		data=res;
		show.innerHTML+=`<div class="show" id="show"><span>${data[0]}</span></div>`
		
		
	});
});
*/

// document.addEventListener("DOMContentLoaded", function() {
// 	console.log("hello");
// })

// IIFE- Most important interview question (Immediate Invoke function)
const url='./APIS/exercises.json';
let data=[]
let show=document.getElementById('exercises')
	fetch(url)
	.then((res)=>res.json())
	.then((res)=>{
		data=res;
		console.log(data);
		for(let i=0;i<data.length;i++){
			show.innerHTML+=`
			<div class="part-exercise">
                        <div class="part-img"><img src="${data[i].image}" alt=""></div>
                        <div class="part-name"><h5>${data[i].name}</h5></div>
                    </div>
		`
		}
		
	});
let data1=[]
let first=document.getElementById('first')
let first_name=document.getElementById('first-name')
let first_price=document.getElementById('first_price')
let mybtn=document.getElementById('mybutton')
// let clothes=document.getElementById('clothes')
// let equipments=document.getElementById('equipments')
let mybtn_equip=document.getElementById('mybutton_equip')
const clothes_data="./APIS/clothing.json";
const equipments_data="./APIS/equipments.json";
let productData = document.getElementById("product_data");

(function (){
	getGymWear();
})()


//showing the cart data
function getGymWear() {
	mybtn.style.backgroundColor="#EA377B";
	mybtn_equip.style.backgroundColor="#090D28";
	fetch(clothes_data)
	.then((res)=>res.json())
	.then((res)=>{
		data1=res;
		console.log(data1);
		productData.innerHTML = '';
	if (data1) {
		// Iterate through clothes array
		for(let i=0;i<data1.length;i++){
			productData.innerHTML += `
			<div class="product_inner_data">
			<div class="product_img"><img src="${data1[i].image}" alt=""></div>
			<div class="product_details">
			<div class="product_name"><h5>"${data1[i].name}"</h5></div>
			<div class="product_price"><span>"${data1[i].price}"</span></div>
			</div>
			<div class="Add-to-cart" id="add_to_cart" onclick="order()"><button>Add to Cart</button></div>
			</div>
			`;
		}
	} else {
		console.error('No products available');
}

	})

}
//Api calling and showing onclick gym equipments in the shop section

let data2=[]
function getGymEquipment() {
	mybtn_equip.style.backgroundColor="#EA377B";
	mybtn.style.backgroundColor="#090D28";
	productData.innerHTML = '';
	fetch(equipments_data)
	.then((res)=>res.json())
	.then((res)=>{
		data2=res;
		console.log(data2);
		productData.innerHTML = '';
	if (data2) {
		// Iterate through clothes array
		for(let i=0;i<data2.length;i++){
			let arr=[data2[i].image,data2[i].name,data2[i].price];
			productData.innerHTML += `
			
			<div class="product_inner_data">
			<div class="product_img"><img src="${data2[i].image}" alt=""></div>
			<div class="product_details">
			<div class="product_name"><h5>"${data2[i].name}"</h5></div>
			<div class="product_price"><span>"${data2[i].price}"</span></div>	
			
			</div>
			
			<div class="Add-to-cart" id="add_to_cart" onclick="order(${arr})"><button>Add to Cart</button></div>
			</div>
			`;
		}
	} else {
		console.error('No products Available');
}
});
}





/*ADD TO CART FUNCTIONALITY*/
let store_data=[]
function order(arr){
	localStorage.setItem( "CartData",JSON.stringify(arr))
	
		alert("Your item has been added to the cart");

}

let box=document.getElementById("cart-items");
function orderedItems(){
	box.style.display="block";
	box.classList.toggle('translate-left');
}

(function (){
	DontShow();
})()

function DontShow(){
	box.style.display="none";
}






	



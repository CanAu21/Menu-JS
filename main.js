import menu from "./db.js"


//Adding HTML Elements
// HTML elemanlarını ekleme
const menuContainer = document.querySelector("#menu-container");

// Function that displays elements as soon as the page is loaded
// Sayfa yüklendiği anda elemanları gösteren fonksiyon
document.addEventListener("DOMContentLoaded", ()=>{
    displayMenuItems(menu)
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((item) => 
    `
    <div id='card' class="d-flex gap-3 flex-column flex-md-row">
    <img src="${item.img}" class="img-fluid shadow rounded">
        <div>
            <div class="d-flex justify-content-between my-2">
                <h5>${item.title}</h5>
                <p>${item.price}</p>
            </div>
            <p class="lead">${item.desc}</p>
        </div>
    </div>
    `);

    // delete comma between
    // aralardaki virgülü silme
    displayMenu = displayMenu.join("");
    
    // Accessing html inside div
    // divin içindeki htmle erişme
    menuContainer.innerHTML = displayMenu;
}



// Filter
// filtreleme kısmı
const filterBtns = document.querySelectorAll(".filter-btn");

// click event of each element in the array
// dizideki her bir elemanın tıklanma olayı
filterBtns.forEach((btn) => {
    // click events for button
    // butonların tıklanma olayı
    btn.addEventListener("click",searchCategory)
});

function searchCategory(e){
    
    //getting the category value of the clicked button
    //tıklanılan butonun kategori değerini alma
   const category = e.target.dataset.id;
   

   // Filter elements by category value
   // elemanları kategori değerine göre filtreleme
   const filtredItems =  menu.filter((menuItem)=> {
    if(menuItem.category === category) return menuItem
   })

   // show all filter if all selected
   // hepsi seçildiyse tamamını göster filtresi
   if(category === "all"){
    displayMenuItems(menu);
   }else{
    displayMenuItems(filtredItems)
   }
}
 
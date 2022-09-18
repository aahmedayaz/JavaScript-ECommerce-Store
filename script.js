// Event Listener for Responsive Navbar

let barBtn = document.getElementById('bars');
let list1 = document.getElementById('list1');
barBtn.addEventListener('click' , e => {
    if(list1.classList.contains('show')){
        list1.classList.remove('show');
        barBtn.classList.replace('fa-xmark' , 'fa-bars')
    }else{
        list1.classList.add('show');
        barBtn.classList.replace('fa-bars' , 'fa-xmark')
    }
})

// Event Listener for Side Panel

let cartBtn = document.getElementById('cart-btn')
let sidePanel = document.getElementById('side-panel')
cartBtn.addEventListener('click' , () => {
    if(sidePanel.classList.contains('show')){
        sidePanel.classList.remove('show');
    }else{
        sidePanel.classList.add('show');
    }
})
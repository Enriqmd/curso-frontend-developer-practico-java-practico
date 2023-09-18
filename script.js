const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const  productDetailContainer = document.querySelector('#productDetail');





iconCarMenu.addEventListener('click', toggleAsideCar);
menuEmail.addEventListener('click', toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);
productDetailContainer.addEventListener('click', openProductDetailAside)
productDetailContainer.addEventListener('click', clodeProductDetailAside)

/*
Funcion de desplgue del menu mobile, del shooping cart y menu nav bar
*/

function toggleDesktopMenu(){
    // const isAsideMenuClosed = aside.classList.contains('inactive');

    // if (!isAsideMenuClosed){
    //     aside.classList.add('inactive');
    // };
    
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    // const isAsideMenuClosed = aside.classList.contains('inactive');

    // if (!isAsideMenuClosed){
    //     aside.classList.add('inactive');
    // };

    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function toggleAsideCar(){
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    // if (!isMobileMenuClosed){
    //     mobileMenu.classList.add('inactive');
    // };

    
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

/*
Funcion para abrir los detalles del producto cuando le das click a la foto de los productos.
*/

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
};

function clodeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
   
};


const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name: 'Xbox Series S',
    precio: 350,
    image: 'https://assetsio.reedpopcdn.com/xbox-series-s-review-digitalfoundry-1605259161548.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp,'
    
});

productList.push({
    name: 'Iphone 15 pro max',
    precio: 1000,
    image: "https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960",
    
});







function renderProducts(arra){
    for (Products of arra){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', Products.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        /*
        Estructura de product-info
        */
    
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');
    
    
        const productItemDiv = document.createElement('div');
        productCard.classList.add('product-Item');
        
        const producPrecio = document.createElement('p');
        producPrecio.innerText = '$' + Products.precio;
        const productName = document.createElement('p');
        productName.innerText = Products.name;
    
        
    
        /*
        Estructura del figure
       */
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    /*
    Por aca esta la estructura con appenchild, por contenedors padres e hijos.
    */
    
        productFigure.appendChild(productImgCart);
    
        productItemDiv.append(producPrecio, productName)
    
        producInfo.append(productItemDiv, productFigure);
    
        productCard.append(productImg, producInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProducts(productList);


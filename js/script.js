// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if(buttonMenuMobile) {
    const menu = document.querySelector(".header .inner-menu");
    const overLay = document.querySelector(".header .inner-menu .inner-overlay i");

    buttonMenuMobile.onclick = () => {
        menu.setAttribute("show","yes");
    }
    overLay.onclick = () => {
        menu.setAttribute("show","")
    }
}

const buttonThamGia = document.querySelector(".header .tham-gia");
console.log(buttonThamGia);

// End Button Menu Mobile
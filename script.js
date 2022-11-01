let content1 = document.querySelector('.cont1');
let content2 = document.querySelector('.cont2');
let content3 = document.querySelector('.cont3');
let content4 = document.querySelector('.cont4');
let content5 = document.querySelector('.cont5');

content2.addEventListener('click', ()=>{;
    location.assign(`https://www.techlandbd.com/laptop`);
})

content3.addEventListener('click', ()=>{
    location.assign(`https://www.techlandbd.com/desktop-offers`);
})

content4.addEventListener('click', ()=>{
    location.assign(`https://www.techlandbd.com/offers`);
})


let menuopen = document.querySelector(`.menuopen`);
let menuicon = document.querySelector(`.menuopen i`);
let sidebar = document.querySelector(`.side_bar`);
menuopen.addEventListener('click', ()=>{
sidebar.style.visibility = `visible`;
sidebar.style.opacity = 1;
sidebar.style.left = `${0}rem`;
sidebar.style.zIndex =  5;
menuopen.style.borderColor = `yellow`;
menuicon.style.color = `yellow`;
})

let close = document.querySelector(`.close`);
close.addEventListener(`click`, ()=>{
sidebar.style.visibility = `hidden`;
sidebar.style.opacity = 0;
sidebar.style.left = `${-70}rem`;
sidebar.style.zIndex = 0;
menuopen.style.borderColor = ``;
menuicon.style.color = ``;
})



let open = document.querySelector(`.open`);
let show_menu = document.querySelector(`.inner_content`);
let number2 = 0;

open.addEventListener(`click`, ()=>{
if (number2 == 0){
    show_menu.style.visibility = `visible`;
    show_menu.style.opacity = 1;
    show_menu.style.top = `${2.7}rem`;
    number2++;
}

else{
    show_menu.style.visibility = `hidden`;
    show_menu.style.opacity = 0;
    show_menu.style.top = `${5}rem`;
    number2 = 0;
}
})


let icon = document.querySelectorAll('.list');
let drdp = document.querySelectorAll(`.dropdown_list`);
let rgt = document.querySelectorAll(`.right`);
let drdp_list = document.querySelectorAll(`.Dp`);
let number1 = 0;


for(let i=0; i<icon.length; i++){

icon[i].addEventListener('click',()=>{    
    if (number1 == 0){
        drdp[i].innerHTML = drdp_list[i].innerHTML;
        rgt[i].style.display = 'flex';
        rgt[i].style.padding = '1rem';
        number1++
    }
    else{
        rgt[i].style.display = 'none';
        number1 = 0;
    }
})
}

let overlay = document.querySelector('.overlay');
let cls = document.querySelector(`.cls`);

window.addEventListener('load', ()=>{
overlay.classList.add("overlay_special_css");
})


cls.addEventListener('click', ()=>{
overlay.classList.remove("overlay_special_css");
})



let category_link = [
    `https://www.techlandbd.com/shop-laptop-computer`,
    `https://www.techlandbd.com/processor`,
    `https://www.techlandbd.com/motherboard`,
    `https://www.techlandbd.com/shop-desktop-ram`,
    `https://www.techlandbd.com/solid-state-drive`,
    `https://www.techlandbd.com/computer-keyboard`,
    `https://www.techlandbd.com/solid-state-drive`,
    `https://www.techlandbd.com/computer-keyboard`,
    `https://www.techlandbd.com/shop-computer-mouse`,
    `https://www.techlandbd.com/headphone-speaker/shop-headphones-headsets`,
    `https://www.techlandbd.com/shop-routers`,
    `https://www.techlandbd.com/computer-monitor`,
    `https://www.techlandbd.com/cpu-cooler`,
    `https://www.techlandbd.com/gaming-chair-table`,
    `https://www.techlandbd.com/computer-case`,
    `https://www.techlandbd.com/tv`,
    `https://www.techlandbd.com/printer`,
    `https://www.techlandbd.com/graphics-card`
];

let prod_category = document.querySelectorAll('.prod');

prod_category.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        location.href = category_link[index];
    })
})
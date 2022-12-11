alert("Slowly press the key while search")
let input = document.getElementById('pro-Input');
let content = document.querySelectorAll('.content');
let f_item = document.querySelectorAll('.f-item');
let pro_flex = document.querySelector('.pro-flex');
let swap = pro_flex.innerHTML;

input.addEventListener("keyup", ()=>{
    let inputUp = input.value.toUpperCase();
    content.forEach((item, index)=>{
        let head = document.querySelectorAll('.heading')[index];
        let headUp = head.textContent || head.innerHTML;
        // console.log(headUp.toUpperCase());

        if (headUp.toUpperCase() == inputUp){
            pro_flex.innerHTML = f_item[index].innerHTML;
            pro_flex.classList.add('special');
        }
        else{
            pro_flex.innerHTML = swap;
            pro_flex.classList.remove('special');
        }
    })
})
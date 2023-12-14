var bulb = document.querySelector(".bulb")
var btn = document.querySelector(".btn")
var box = document.querySelector(".box")
var check = true
btn.addEventListener("click", function(){
    if(check==true){
        btn.innerHTML = "OFF"
        btn.style.backgroundColor = "red"
        bulb.style.fill = "yellow"
        check = false
        box.style.justifyContent="flex-end"
    }
    else{
        btn.innerHTML = "ON"
        btn.style.backgroundColor = "green"
        bulb.style.fill = "#fff"
        check = true
        box.style.justifyContent="flex-start"
    }
})
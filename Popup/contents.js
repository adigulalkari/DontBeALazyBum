
const delay_popup = 4*1000;
let timer
const alertBtn  = document.getElementById('sweetalert')

function start(){
    timer = setInterval(function()
    {alert("KEEP your back straight!!!")},
    delay_popup);
}
function stop(){
    clearInterval(timer)
}

    alertBtn.addEventListener('click', function(){
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            start()
        })
    })
    alertBtn.addEventListener('dblclick', function(){
        this.style.backgroundColor= 'red'
        stop()
    })
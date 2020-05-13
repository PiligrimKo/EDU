function add(){
    document.getElementById('dropbox').classList.toggle ('dropbox_active');
}
    
let arrColor = ["0", "1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];  

function randcolor(){
    let Color = "#";
    for (let i = 0; i < 6; i++) {
        Color += '' + arrColor[Math.floor(Math.random() * arrColor.length)];

    }
    btn.style.backgroundColor = (Color);
}

function addMes(){
    let d = document.createElement('div');
    let t = document.getElementById('textar').value;
    
    d.classList.add("textout");
    document.querySelector('#text').appendChild(d);
    d.textContent = t;
}

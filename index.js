let hscore = 0
let gscore = 0
let hscoreEl = document.getElementById("homeScore")
let gscoreEl = document.getElementById("guestScore")


function p1H(){
    hscore += 1;
    hscoreEl.textContent = "" + hscore
}

function p2H(){
    hscore += 2;
    hscoreEl.textContent = "" + hscore
}

function p3H(){
    hscore += 3;
    hscoreEl.textContent = "" + hscore
    
}

function p1G(){
    gscore += 1;
    gscoreEl.textContent = "" + gscore
}

function p2G(){
    gscore += 2;
    gscoreEl.textContent = "" + gscore
}

function p3G(){
    gscore += 3;
    gscoreEl.textContent = "" + gscore
    
}
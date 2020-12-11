var divMain = document.getElementById('mainDiv');

function grade() {
   let whatgrade = Number(input.value)
    
switch (whatgrade){

    case 6:
        divMain.innerHTML = 'שלום כיתה א׳'
        break;
    case 7:
        divMain.innerHTML = 'שלום כיתה ב׳'
        break;
    case 8:
        divMain.innerHTML = 'שלום כיתה ג׳'
        break;
    case 9:
        divMain.innerHTML = 'שלום כיתה ד׳'
        break;
    case 10:
        divMain.innerHTML = 'שלום כיתה ה׳'
        break;
    case 11:
        divMain.innerHTML = 'שלום כיתה ו׳'
        break;
    case 12:
        divMain.innerHTML = 'שלום כיתה ז׳'
        break;
    case 13:
        divMain.innerHTML = 'שלום כיתה ח׳'
        break;
    case 14:
        divMain.innerHTML = 'שלום כיתה ט׳'
    case 15:
        divMain.innerHTML = 'שלום כיתה י׳'
        break;
    case 16:
        divMain.innerHTML = 'שלום כיתה יא׳'
        break;
    case 17:
        divMain.innerHTML = 'שלום כיתה יב׳'
        break;
        default:
            divMain.innerHTML = 'n/v'
}
}

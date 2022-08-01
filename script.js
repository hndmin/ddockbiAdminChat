

function listFocus(){
    console.log("listFocus!!");
    document.getElementById('profile').classList.add('focusOut');
    document.getElementById('list').classList.add('focusIn');
    // document.getElementById('profile').style.height = "10%";
    // document.getElementById('list').style.height = "90%";
}
function focusOff(){
    //document.getElementById('profile').style.height = "50%";
    //document.getElementById('list').style.height = "50%";
    document.getElementById('profile').classList.remove('focusOut');
    document.getElementById('list').classList.remove('focusIn');
}

function showFullImg(){
    document.getElementsByClassName('showFullImg')[0].classList.remove('hide');
    document.getElementsByClassName('showFullImg')[0].classList.add('show');
}
function closeFullImg(){
    console.log("aha!");
    document.getElementsByClassName('showFullImg')[0].classList.remove('show');
    document.getElementsByClassName('showFullImg')[0].classList.add('hide');
    console.log("aha!2");
}
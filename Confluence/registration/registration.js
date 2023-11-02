let buttonWelcome = document.querySelector('#contiueBtn');
let buttonUsername = document.querySelector('#buttonUsername');
let buttonFullName = document.querySelector('#buttonFullName');
let buttonPassword = document.querySelector('#buttonPassword')

buttonWelcome.addEventListener('click', function () {
    let select = document.querySelector('select'); 
    let selectedValue = select.value; 

    if(selectedValue == "") {
        return 0;
    } else if(selectedValue == 1) {
        //buttonWelcome.setAttribute('disabled', '')
        //document.getElementById('inputGroupSelect01').disabled = 1;       
        document.querySelector('#second-card1').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 230px; display: none"
        document.querySelector('#second-card').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 130px; display: flex;"
    } else {
        //buttonWelcome.setAttribute('disabled', '')
        //document.getElementById('inputGroupSelect01').disabled = 1;
        document.querySelector('#second-card').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 130px; display: none;"
        document.querySelector('#second-card1').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 230px; display: flex"       
    }
});

buttonUsername.addEventListener('click', function () {
    let select = document.querySelector('#inputUsername'); 
    let select2 = document.querySelector('#inputEmail');
    let selectedValue = select.value; 
    let selectedValue2 = select2.value;

    if(selectedValue == "" || selectedValue2 == "") {
        return 0;
    } else {
        //buttonUsername.setAttribute('disabled', '')
        //document.getElementById('inputUsername').disabled = 1;
        //document.getElementById('inputEmail').disabled = 1;
        document.querySelector('#second-card2').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 345px; display: flex;"
    }
});

buttonFullName.addEventListener('click', function () {
    let select = document.querySelector('#inputFirstname'); 
    let select2 = document.querySelector('#inputLastname');
    let select3 = document.querySelector('#inputSurname')
    let selectedValue = select.value; 
    let selectedValue2 = select2.value;
    let selectedValue3 = select3.value;

    if(selectedValue == "" || selectedValue2 == "" || selectedValue3 == "") {
        return 0;
    } else {
        //buttonFullName.setAttribute('disabled', '')
        //document.getElementById('inputFirstname').disabled = 1;
        //document.getElementById('inputLastname').disabled = 1;
        //document.getElementById('inputSurname').disabled = 1;
        document.querySelector('#second-card3').style = "background: var(--background-base); border: solid 1px #333341; width: 600px; height: 220px; display: flex;"
    }
});

buttonPassword.addEventListener('click', function () {
    let select = document.querySelector('#passwordFirst'); 
    let select2 = document.querySelector('#passwordSecond');

    let selectedValue = select.value; 
    let selectedValue2 = select2.value;

    if(selectedValue == "" || selectedValue2 == "") {
        return 0;
    } else if(selectedValue == selectedValue2) {
        //buttonPassword.setAttribute('disabled', '')
        //document.getElementById('passwordFirst').disabled = 1;
        //document.getElementById('passwordSecond').disabled = 1;
    } else {
        return 0;
    }
});
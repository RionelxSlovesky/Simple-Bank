const depositAmount = document.getElementById("deposit-amount");
const depositInp = document.getElementById("deposit-inp");
const withdrawAmount = document.getElementById("withdraw-amount");
const withdrawInp = document.getElementById("withdraw-inp");
const balanceAmount = document.getElementById("balance-amount");


// deposit

document.getElementById("deposit-btn").addEventListener("click", function(){

    if(depositInp.value==''){
        return;
    }

    let dAmount = parseInt(depositAmount.innerText.slice(1));

    dAmount = dAmount + parseInt(depositInp.value);

    depositAmount.innerText = '$' + dAmount;

    // balance calculation

    bAmount = parseInt(balanceAmount.innerText.slice(1)) + parseInt(depositInp.value);

    balanceAmount.innerText = '$' + bAmount;

    depositInp.value = '';

})




// withdraw

document.getElementById("withdraw-btn").addEventListener("click", function(){

    if(withdrawInp.value==''){
        return;
    }

    let wAmount = parseInt(withdrawInp.value);

    let bAmount = parseInt(balanceAmount.innerText.slice(1));

    ramount = bAmount - wAmount;

    if(ramount<0) {
        alert("Withdraw cannot be more than Balance");
        withdrawInp.value = '';
        
    }else {

        balanceAmount.innerText = '$' + ramount;

        newWAmount = parseInt(withdrawAmount.innerText.slice(1)) + wAmount; 

        withdrawAmount.innerText = '$' + newWAmount;   
        withdrawInp.value = '';  
    }

    

    

    

})

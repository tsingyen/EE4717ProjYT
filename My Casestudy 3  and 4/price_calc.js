// set value of 0 for the Subtotals
// function init(){
//     document.getElementById("JustJavaSubtotal").value = (0).toFixed(2); // set to 2dp
//
//     document.getElementById("LaitSubtotal").value = (0).toFixed(2); // set to 2dp
//
//     document.getElementById("CappSubtotal").value = (0).toFixed(2); // set to 2dp
//
//     var currentDate = new Date();
//     var currentMonth =  currentDate.getMonth() + 1;
//     document.getElementById("orderdate").value = currentDate.getFullYear() + "-" + currentMonth + "-" + currentDate.getDate(); // set current date to be order date
// }


// Resets Qty and Subtotal values (when user inputs negative and/or decimal quantity)
function resetValues(qty,subtotal){
    qty.value = 0;
    subtotal.value = (0).toFixed(2);
    //subtotal.innerHTML = "Subtotal\n" + "$0.00";
}


// Invoked when user changes option from Single to Double (or vice versa)
function clearExisting(name){
    var idQty = name.substring(0,4) + 'Qty';    // concat first 4 chars of LaitOption or CappOption (ie 'Lait" or 'Capp') with 'Qty'
    var idSubtotal = name.substring(0,4) + 'Subtotal';  // concat first 4 chars of LaitOption or CappOption (ie 'Lait" or 'Capp') with 'Subtotal'
    var input = document.getElementById(idQty);
    var output = document.getElementById(idSubtotal);
    resetValues(input,output);
    grandtotal();
}

// Calculates and updates Just Java subtotal price, given input quantity by user
function calcJustJava(){
    var input = document.getElementById("JustJavaQty");
    var output = document.getElementById("JustJavaSubtotal");
    if (input == null){
        return;
    }
    var val = Number(input.value);

    if (Number.isInteger(val) && val >= 1){
        output.value = (val*2).toFixed(2); // set to 2dp
        //output.innerHTML = "Subtotal\n" + "$" + (output.value).toFixed(2);
    }
    else {
        alert("Please only input integer values from 0 onwards!");
        resetValues(input,output);
    }
    return output.value;
}

// Calculates and updates Cafe au Lait subtotal price, given input quantity by user
function calcLait(){
    var input = document.getElementById("LaitQty");
    var output = document.getElementById("LaitSubtotal");
    if (input == null){
        return;
    }
    var val = Number(input.value);

    if (Number.isInteger(val) && val >= 0){
        if (document.getElementById("SingleLait").checked){
            output.value = (val*2).toFixed(2); // set to 2dp
            //output.innerHTML = "Subtotal\n" + "$" + (output.value).toFixed(2);
        }
        else if (document.getElementById("DoubleLait").checked){
            output.value = (val*3).toFixed(2); // set to 2dp
            //output.innerHTML = "Subtotal\n" + "$" + (output.value).toFixed(2);
        }
        else {
            alert("Please choose either single or double shot for Cafe au Lait!");
            resetValues(input,output);
        }
    }
    else {
        alert("Please only input integer values from 0 onwards!");
        resetValues(input,output);
    }
    return output.value;
}

// Calculates and updates Iced Cappuccino subtotal price, given input quantity by user
function calcCapp(){
    var input = document.getElementById("CappQty");
    var output = document.getElementById("CappSubtotal");
    if (input == null){
        return;
    }
    var val = Number(input.value);

    if (Number.isInteger(val) && val >= 0){
        if (document.getElementById("SingleCapp").checked){
            output.value = (val*4.75).toFixed(2); // set to 2dp
            //output.innerHTML = "Subtotal\n" + "$" + (output.value).toFixed(2);
        }
        else if (document.getElementById("DoubleCapp").checked){
            output.value = (val*5.75).toFixed(2); // set to 2dp
            //output.innerHTML = "Subtotal\n" + "$" + (output.value).toFixed(2);
        }
        else {
            alert("Please choose either single or double shot for Iced Cappuccino!");
            resetValues(input,output);
        }
    }
    else {
        alert("Please only input integer values from 0 onwards!");
        resetValues(input,output);
    }
    return output.value;
}

// Calculates total price, updates after any subtotal price is updated
// function calcTotal(){
//     var JustJavaSubtotal = document.getElementById("JustJavaSubtotal");
//     var LaitSubtotal = document.getElementById("LaitSubtotal");
//     var CappSubtotal = document.getElementById("CappSubtotal");
//     document.getElementById("GrandTotal").value = (Number(JustJavaSubtotal.value) + Number(LaitSubtotal.value) + Number(CappSubtotal.value)).toFixed(2);  // set to 2dp
//
// }


function grandtotal(){
    let JustJavaPrice = calcJustJava();
    let JustLaitPrice = calcLait();
    let JustCappPrice = calcCapp();
    GrandTotal = Number(JustJavaPrice) + Number(JustLaitPrice) + Number(JustCappPrice);
    console.log(JustJavaPrice);
    console.log(JustLaitPrice);
    console.log(JustCappPrice);
    console.log(GrandTotal);
    document.getElementById("GrandTotal").value  = GrandTotal;
}

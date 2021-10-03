<?php
    // create short variable names for input quantities
    $JustJavaQty = $_POST['JustJavaQty'];
    $LaitQty = $_POST['LaitQty'];
    $CappQty = $_POST['CappQty'];

    // create short variable names for subtotal and total prices
    $JustJavaSubtotal = $_POST['JustJavaSubtotal'];
    $LaitSubtotal = $_POST['LaitSubtotal'];
    $CappSubtotal = $_POST['CappSubtotal'];
    $GrandTotal = $_POST['GrandTotal'];

    // create variables for single and double qty and subtotal
    $LaitSQty = 0;
    $LaitDQty = 0;
    $CappSQty = 0;
    $CappDQty = 0;
    $LaitSSubtotal = 0.00;
    $LaitDSubtotal = 0.00;
    $CappSSubtotal = 0.00;
    $CappDSubtotal = 0.00;

    // create short variable names for single/double selection
    $LaitOption = $_POST['LaitOption'];
    $CappOption = $_POST['CappOption'];

//     // create short variable name for date
//     $orderdate = $_POST['orderdate'];



// updates qty and price according to single/double selection
    if ($LaitOption == "LaitsingleOption"){
        $LaitSQty = $LaitQty;
        $LaitSSubtotal = $LaitSubtotal;
    }
    else if ($LaitOption == "LaitdoubleOption"){
        $LaitDQty = $LaitQty;
        $LaitDSubtotal = $LaitSubtotal;
    }

    if ($CappOption == "CappsingleOption"){
        $CappSQty = $CappQty;
        $CappSSubtotal = $CappSubtotal;
    }
    else if ($CappOption == "CappdoubleOption"){
        $CappDQty = $CappQty;
        $CappDSubtotal = $CappSubtotal;
    }


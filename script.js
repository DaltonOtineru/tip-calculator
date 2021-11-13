
function tipAmount(){
    const mealCost = document.getElementById("meal-cost").value;
    const desiredTip = document.getElementById("percentage").value;
    const finalTip = (desiredTip / 100) * mealCost;
    const finalTipFixed = finalTip.toFixed(2);
    document.getElementById("tip").innerHTML = `$${finalTipFixed}`;
    //const desiredTipPercentage = parseFloat(desiredTip) / 100;
    const totalWithTip = parseFloat(finalTip) + parseFloat(mealCost);
    let finalTotal = totalWithTip.toFixed(2);
    document.getElementById("total-with-tip").innerHTML = `$${finalTotal}`;
        if(desiredTip == null || desiredTip == "" || mealCost == null || mealCost == ""){
            alert("Please make a valid entry");
            document.getElementById("total-with-tip").innerHTML = "";
            document.getElementById("tip").innerHTML = "";
        }
    }


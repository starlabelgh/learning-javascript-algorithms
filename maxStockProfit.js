function maxStockProfit(pricesArr) {
    // takes in array of prices as parameter
    // return the max possible profit of the day

    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;

    var changeBuyPrice = true;

    for (var i = 0; i < pricesArr.length; i++){
        if (changeBuyPrice) buyPrice = pricesArr[i];
        sellPrice = pricesArr[i + 1];

        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }else{
            var tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }

    return maxProfit;
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42])

//returns answer = 22
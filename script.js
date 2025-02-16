// script.js
document.getElementById('makerBuy').addEventListener('change', function() {
    document.getElementById('customMakerFeeBuy').disabled = false;
    document.getElementById('customTakerFeeBuy').disabled = true;
});

document.getElementById('takerBuy').addEventListener('change', function() {
    document.getElementById('customMakerFeeBuy').disabled = true;
    document.getElementById('customTakerFeeBuy').disabled = false;
});

document.getElementById('makerSell').addEventListener('change', function() {
    document.getElementById('customMakerFeeSell').disabled = false;
    document.getElementById('customTakerFeeSell').disabled = true;
});

document.getElementById('takerSell').addEventListener('change', function() {
    document.getElementById('customMakerFeeSell').disabled = true;
    document.getElementById('customTakerFeeSell').disabled = false;
});

function calculateProfit() {
    const usdtAmount = parseFloat(document.getElementById('usdtAmount').value) || 0;
    const buyPrice = parseFloat(document.getElementById('buyPrice').value) || 0;
    const sellPrice = parseFloat(document.getElementById('sellPrice').value) || 0;
    const wdFeeBuyToken = parseFloat(document.getElementById('wdFeeBuyToken').value) || 0;
    const wdFeeSellUsdt = parseFloat(document.getElementById('wdFeeSellUsdt').value) || 0;
    const useMakerBuy = document.getElementById('makerBuy').checked;
    const useMakerSell = document.getElementById('makerSell').checked;

    let makerFeeBuy = 0.1;
    let takerFeeBuy = 0.2;
    let makerFeeSell = 0.1;
    let takerFeeSell = 0.2;

    if (useMakerBuy) {
        makerFeeBuy = parseFloat(document.getElementById('customMakerFeeBuy').value) || 0.1;
    } else {
        takerFeeBuy = parseFloat(document.getElementById('customTakerFeeBuy').value) || 0.2;
    }

    if (useMakerSell) {
        makerFeeSell = parseFloat(document.getElementById('customMakerFeeSell').value) || 0.1;
    } else {
        takerFeeSell = parseFloat(document.getElementById('customTakerFeeSell').value) || 0.2;
    }

    const tokenAmount = usdtAmount / buyPrice;

    const buyExchangeFeeRate = useMakerBuy ? makerFeeBuy / 100 : takerFeeBuy / 100;
    const sellExchangeFeeRate = useMakerSell ? makerFeeSell / 100 : takerFeeSell / 100;

    const buyExchangeFee = usdtAmount * buyExchangeFeeRate;
    const sellExchangeFee = (tokenAmount * sellPrice) * sellExchangeFeeRate;

    const totalFee = buyExchangeFee + sellExchangeFee + (wdFeeBuyToken * buyPrice) + wdFeeSellUsdt;

    const buyTotal = usdtAmount;
    const sellTotal = (tokenAmount - wdFeeBuyToken) * sellPrice;

    const grossProfit = sellTotal - buyTotal;
    const netProfit = grossProfit - totalFee;
    const profitPercentage = (netProfit / buyTotal) * 100;

    document.getElementById('tokenAmount').textContent = tokenAmount.toFixed(8) + ' Token';
    document.getElementById('buyTotal').textContent = buyTotal.toFixed(2) + ' USDT';
    document.getElementById('sellTotal').textContent = sellTotal.toFixed(2) + ' USDT';
    document.getElementById('buyExchangeFee').textContent = buyExchangeFee.toFixed(2) + ' USDT';
    document.getElementById('sellExchangeFee').textContent = sellExchangeFee.toFixed(2) + ' USDT';
    document.getElementById('withdrawalFeeBuy').textContent = (wdFeeBuyToken * buyPrice).toFixed(2) + ' USDT';
    document.getElementById('withdrawalFeeSell').textContent = wdFeeSellUsdt.toFixed(2) + ' USDT';
    document.getElementById('totalFee').textContent = totalFee.toFixed(2) + ' USDT';
    document.getElementById('grossProfit').textContent = grossProfit.toFixed(2) + ' USDT';
    document.getElementById('netProfit').textContent = netProfit.toFixed(2) + ' USDT';
    document.getElementById('profitPercentage').textContent = profitPercentage.toFixed(2) + '%';

    const resultsContainer = document.getElementById('results');
    const netProfitContainer = document.getElementById('netProfitContainer');
    const profitStatus = document.getElementById('profitStatus');

    if (netProfit > 0) {
        netProfitContainer.className = 'p-4 border rounded bg-green-50';
        document.getElementById('netProfit').className = 'text-lg font-semibold text-green-600';
        profitStatus.className = 'p-4 rounded text-center font-semibold bg-green-100 text-green-700';
        profitStatus.textContent = 'Menguntungkan ✅';
    } else {
        netProfitContainer.className = 'p-4 border rounded bg-red-50';
        document.getElementById('netProfit').className = 'text-lg font-semibold text-red-600';
        profitStatus.className = 'p-4 rounded text-center font-semibold bg-red-100 text-red-700';
        profitStatus.textContent = 'Tidak Menguntungkan ❌';
    }

    resultsContainer.classList.remove('hidden');
}

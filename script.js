let coins = 0;
document.getElementById("tapButton").addEventListener("click", function() {
    coins++;
    document.getElementById("coinCount").innerText = "Coins: " + coins;
});

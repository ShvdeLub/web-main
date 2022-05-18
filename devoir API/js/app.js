export async function btcPrice() {
    let btc = await fetch('https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=usd', {method: 'get'})
    return btc.json()
}

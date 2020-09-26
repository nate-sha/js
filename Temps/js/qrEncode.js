/*This script takes in a parking voucher number, generate a URL parameter and a QR code for that url*/
const subBTN = document.getElementById('sub-btn')    
const siteUrl = "https://mybch.net/tools/parking-vouchers/"
const param = "bch_park_tickets";
const vouchers = [123456, 654321, 987654, 456789]
const apiCall = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
//2. Generate & encode a url
const voucherUrlArray = vouchers.map(vNum =>
{return  encodeURI(`${apiCall}${siteUrl}?${param}=${vNum}`)
});
console.log(voucherUrlArray)
console.log(voucherUrlArray[0])


//3. Send an API request to get the QR-Code
for (i =0; i <= vouchers.length; i++) {
 let lastqrImg = $("body").find("section:last").append($('<p>'))
 appQr = lastqrImg.append($('<img class="container">').attr("src",voucherUrlArray[i]))
 }
  
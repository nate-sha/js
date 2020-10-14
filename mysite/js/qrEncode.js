/*This script takes in a parking voucher number, generate a URL parameter and a QR code for that url*/
//Define Variables
let siteUrl, qKey, qValue, qUrl, qArray = {} ;
const apiCall = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

$(document).ready(function() {
  $("#subBtn").click( x => {
    $("#output").empty(); 
      siteUrl = $("#siteUrl").val()
      qKey = $("#paramKey").val()
      qValue = $("#paramValue").val().split(",")
  
    $("#csv-file").change(handleFileSelect);
      function handleFileSelect(evt) {
      console.log("Loading")
      var file = evt.target.files[0];
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          console.log("Complete")
          qValue = results;
          console.log(qrValue)
      }})
    }
    qUrl = qValue.map(v =>{
      return  encodeURI(`${apiCall}${siteUrl}${qKey}=${v}`)
    })
    console.log(qUrl)
    newArr = qUrl.map(x => {
      const lastQrImg = $("#output").append($('<block class="w3-center w3-col l4 m3 s2">'))
      lastQrImg.append($('<img class="w3-padding">').attr("src",x))
       })
  })
})


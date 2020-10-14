let tHeader, tHeaderLabel, headerRow  = null;

console.log('Start')
function handleFileSelect(evt) {
  console.log("handle")
  var file = evt.target.files[0];
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log("Complete")
      const fileData = results;
      console.log(fileData)
     //Create Table Header, dynamically
        //Get Labels
          const tHeader = fileData.data[0]
          const tHeaderLabel = Object.keys(tHeader)
          console.log(`Your header labels are: ${tHeaderLabel.join(", ")}`)
        //Generate Table Header
          tHeaderLabel.map(item => {
          const headerRow = $('#dTable').find($("#dHead")).find('#headRow');
          headerRow.append($('<th class="text-center table table-striped">').text(item))
          })
      fileData.data.map(cell => {
        //Add a new row
        const lastRow = $('#dTable').find($("#dbody:last")).append('<tr>');
        //Iterate through
        for (i = 0; i < tHeaderLabel.length; i++) {
          const dValue = Object.values(cell)[i]
          lastRow.append($('<td class="text-center">').text(dValue));
        }
      })
    }
   })
  };
$(document).ready(function(){
  console.log("Hey")
  $("#csv-file").change(handleFileSelect);
})

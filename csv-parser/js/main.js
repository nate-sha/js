  $('#files').parse({
      config: {
      delimiter: "auto",
        complete: displayHTMLTable,
      },
      before: function(file, inputElem)
      {
        console.log("Parsing file...", file);
      },
      error: function(err, file)
      {
        console.log("ERROR:", err, file);
      },
      complete: function()
      {
        console.log("Done with all files");
      }
    });

    function displayHTMLTable(results){
      let table = "<table class='table'>";
      let data = results.data;
      console.log(data)
       
      for(i=0;i<data.length;i++){
        table+= "<tr>";
        let row = data[i];
        let cells = row.join(",").split(",");
  
        for(j=0;j<cells.length;j++){
          table+= "<td>";
          table+= cells[j];
          table+= "</th>";
        }
        table+= "</tr>";
      }
      table+= "</table>";
      $("#parsed_csv_list").html(table);
    }
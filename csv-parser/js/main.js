$( document ).ready(function() {
      console.log( "ready!" );
      $("#submit-file").click(function(){
        var data;
	    $.ajax({
	      type: "GET",  
	       url: "js-tutorials.com_sample_file.csv",
	       dataType: "text",       
	       success: function(response){
        data = $.csv.toArrays(response);
        alert(data[0])
	    	generateHtmlTable(data);
	       }   
	    });   
      })
});



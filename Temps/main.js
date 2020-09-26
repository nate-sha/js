
var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
	}
})
xhr.open("GET", "https://free-nba.p.rapidapi.com/games?page=0&per_page=25");
xhr.setRequestHeader("x-rapidapi-host", "free-nba.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "cfaff25a5bmsh229263eeb9a7d9ap1f21b4jsn5f129d89a3af");

xhr.onload = function() {
  var reqData = JSON.parse(xhr.responseText);
  console.log(reqData)
 reqData.data.map(game => {
  const lastRow = $("#gameTable").find('#gbody:last').append($('<tr>'));
  lastRow.append($('<td>').text(game.date))
  lastRow.append($('<td>').text(game.home_team.full_name))
  lastRow.append($('<td>').text(game.home_team_score))
  lastRow.append($('<td>').text(game.visitor_team.full_name))
  lastRow.append($('<td>').text(game.visitor_team_score))

 })
};
 
xhr.send(data);
$("#userInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#gbody td").filter(function() {
  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
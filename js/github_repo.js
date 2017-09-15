function github_repo() {
	username = $('#github-repos').attr('username')
  githubAPI = "https://api.github.com/users/" + username + "/repos"
	
  link = "https://github.com/" + username
  //Fillout github header with repository link
  $('<h4 class="gh-r-l">Github:<a href='+link+'> /'+username+'</a></h4>').appendTo('.gh-r-h')
	$.getJSON(githubAPI)
  	.done(function(data) {
    			  var items = [];  
						$.each(data, function(i, repo) {
									items.push( '<p class="gh-r-u"><a href="' + repo.html_url + '">' + repo.name + "</a></p>");
            });
						$( "<p/>", {
            		"class" : "gh-r-l",
		   					html: items.join( "" )
						}).appendTo( ".gh-r-d" );
   });   
}
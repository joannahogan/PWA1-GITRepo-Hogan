/******************************************
  Week 3 Assignment: Search Engine Debug
  Joanna Hogan       10 DEC 14
*******************************************/
// Create privatized scope using a self-executing function
(function(){   // Start of function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),  //get results from search form
		searchInput = document.forms[0].search,
		currentSearch = ''
	;

	// Validates search query
	var validate = function(query){  //fixed error: spelling and replaced == with =
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){  //fixed error: changed = to comparison ===//while loop for empty characters
			query = query.substring(1, query.length); //query length of substring
		};
		while(query.charAt(query.length-1) === "") { // while loop if one character
            query = query.substring(0, query.length - 1); //query length of substring
        }; //fixed error: added curly brace
		
		// Check search length, must have 3 characters
		if(query.length < 3){  // If statement for char length under 3
			alert("Your search query is too small, try again.");  //fixed error: closed string "  // User alerted search too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //input for search
			return; 
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){  //fixed error: added curly brace  //declare variable search
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");   //split data from query  //fixed error: changed .join to .split
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {  // for loop with array

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);  //fixed error: changed toLowerCase to camel case

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].toLowerCase();  //fixed error: changed toLowerCase to camel case

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                };
            };  //fixed error: added curly brace
        };  //fixed error: added curly brace
		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length === 0){  //if else statement to show matches or "no results found"  //fixed error: changed = to ===
			noMatch();
		}else{
			showMatches(results); //var showMatches called
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){  // noMatch equals function to give user info on no results
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //title for results
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);  //fixed error: .substring  no camel case
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {  //function to query search results
        var query = searchInput.value;
        validate(query); //fixed error: spelling

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };  //fixed error: added curly brace

})();
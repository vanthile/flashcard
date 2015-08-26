
var myWord = ['bee', 'ant', 'dog', 'cat', 'pig', 'cow', 'rat'
		, 'bat', 'fox', 'eel', 'owl', 'ape', 'doe', 'yak', 
		];

/*
document.write("<table width='260' border='1 align='center'>")
for(i=0; i<myWord.length; i++){
	document.write("<tr><td>" + myWord[i++] + "</td>");
	document.write("<td>" + myWord[i] + "</td></tr>");
	//console.log(myWord[i++]);
}
document.write("</table>");
*/

/*
$(document).ready(function(){

	$('#btn').on('click', function (){
		for(i=0; i<myWord.length; i++){
			$('#myTbl').append('<tr><td>' + myWord[i] + 
				'</td></tr>');
		}

	})
	
})
*/
$(document).ready(function(){

	$('#btn').on('click', function(){
		for(i=0; i<myWord.length; i++){
			$('#st > .clear-both').before('<div class="nd">' + myWord[i] + '</div>');	

		}

	})
})


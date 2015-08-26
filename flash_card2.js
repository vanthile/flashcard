
var myWord = ['bee', 'ant', 'dog', 'cat', 'pig', 'cow', 'rat'
		, 'bat', 'fox', 'eel', 'owl', 'ape', 'doe', 'yak', 
		'elk', 'emu', 'ewe', 'goa', 'gnu', 'hen', 'jay', 'kea',
		'olm', 'ono', 'orc', 'tit', 'zaw', 'zho', 'hog', 'ram',
		'lion', 'kangaroo', 'giraffe', 'hippo', 'camel', 'elephant',
		'panda', 'rabbit', 'zebra', 'bear', 'horse', 'rhino', 'monkey',
		'tiger', 'snake', 'lizard', 'lamp', 'sheep', 'squirel', 'bird'
		];
//var myLeng = myWord.length;
//console.log(myLeng);
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
/*
different bw remove() and empty()
empty(): empty the child of element you name.
remove(): remove the child of element you name and remove that element out of dom.

difference bw before, after, append and prepend
*/

$(document).ready(function(){



	function flashCard(from, to){
		$('#st').empty();
		for(i=from; i<to; i++){
			$('#st').append('<div class="nd">' + myWord[i] + '</div>');	
		}
	}

//$('#btn').on('click', flashCard(0,10));
$('#btn').on('click', function(){
	flashCard(0, 10);
})

$('#btn2').on('click', function(){
	flashCard(10, 20);
})

$('#btn3').on('click', function(){
	flashCard(20, 30);
})

$('#btn4').on('click', function(){
	flashCard(30, 40);
})

$('#btn5').on('click', function(){
	flashCard(40, 50);
})


});





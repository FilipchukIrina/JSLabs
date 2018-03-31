 // var arr=[4,6,7,5,1]
	var n=10, m=10;
	var NumArr = [];
	for (var i=0; i<n; i++)
	{
	NumArr[i] = [];
	for (var j = 0; j < m; j++ )
	{NumArr[i][j]= Math.floor(Math.random()*(100-1))+1 ;}
	}
	
	
var html='<table>';
for (var i=0;i<n;i++){
html+='<tr>'
	for(var j=0; j<m/2; j++)
	{
		html+='<td class="tabl">'+NumArr[i][j]+'</td>';
	}
	for(var k=0; k<m/2; k++)
	{
		html+='<td class="tabl2">'+NumArr[i][m/2-k-1]+'</td>';
	}
	
html+='</tr>'
}
html+='</table>';
 
document.getElementById('xlop').innerHTML=html;
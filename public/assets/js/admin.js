var Food = {
 obj: [{
 name: 'Akshat Vidyarthi',
 food: [{
 type: 'Rice',
 qty: 10
 }, {
 type: 'Dal',
 qty: 5
 }, {
 type: 'Flour',
 qty: 15
 }],
 location: 'Kanpur',
 time: '15:04:54',
 contact: '8425428244'
 },
 {
 name: 'Akash Shukla',
 food: [{
 type: 'Corn',
 qty: 8
 }, {
 type: 'Flour',
 qty: 20
 }, {
 type: 'Rice',
 qty: 12
 }],
 location: 'Lucknow',
 time: '11:19:27',
 contact: '7952843690'
 }
 ]
}
var Money = {
 obj: [{
 name: 'Akshat Vidyarthi',
 company: 'Google',
 email: 'akshat@google.com',
 address: '4-B, Taktakpur, Kanpur',
 phone: '8425428244',
 amt: '150000'
 }, {
 name: 'Akash Shukla',
 company: 'Microsoft',
 email: 'akash@microsoft.com',
 address: '8/54, Panchkula, Lucknow',
 phone: '7952843690',
 amt: '200000'
 }]
}
var Feed = {
 obj: [{ name: 'Akshat Vidyarthi', email: 'akshat@google.com', suggest: 'Great Job Guys!' },
{ name: 'Akash Shukla', email: 'akash@microsoft.com', suggest: 'Keep It Up!' }]
 }
var t = "<tbody>";
for (var i = 0; i < Feed.obj.length; i++) 
{
	t += "<tr>";
	var x = Feed.obj[i];
	for (j in x) 
	{
	t += "<td>" + x[j] + "</td>"; 
	}
	t += "</tr>";
}
t += "</tbody>";
document.getElementById('feed_table').innerHTML += t;

var tx = "<tbody>";
for (var i = 0; i < Inform.obj.length; i++) 
{
	tx += "<tr>";
	var x = Inform.obj[i];
	for (j in x) 
	{
	tx += "<td>" + x[j] + "</td>"; 
	}
	tx += "</tr>";
}
tx += "</tbody>";
document.getElementById('inform_table').innerHTML += tx;

var text = "<tbody>";
for (var i = 0; i < Money.obj.length; i++) 
{
 	text += "<tr>";
 	var x = Money.obj[i];
 	for (j in x) 
 	{
 		if (j == 'amt') 
 		{
 			text += "<td>₹ " + x[j] + "</td>";
 		} 
 		else
 		{
 			text += "<td>" + x[j] + "</td>";
 		}
 	}
 	text += "</tr>";
}
text += "</tbody>";
document.getElementById('money_table').innerHTML += text;

var txt = "<tbody>";
for (var i = 0; i < Food.obj.length; i++) 
{
	txt += "<tr>";
 	var x = Food.obj[i];
 	for (var j in x) 
 	{
 		if (j == 'food') 
 		{
 			var txt2 = "<ul>";
 			var txt3 = "<ul>";
 			for (k in x[j]) 
	 		{
	 			txt2 += "<li>" + x[j][k].type + "</li>";
	 			txt3 += "<li>" + x[j][k].qty + "</li>";
	 		}
	 		txt2 += "</ul>";
	 		txt3 += "</ul>";
	 		txt += "<td>" + txt2 + "</td>" + "<td>" + txt3 + "</td>";
 		} 
 		else 
 			{ 
 				txt += "<td>" + x[j] + "</td>"; 
 			}
 	}
 	txt += "</tr>";
}
txt += "</tbody>";
document.getElementById('food_table').innerHTML += txt; 

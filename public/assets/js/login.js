$('.b').click(function() 
{
	if ($('.b')[0].style.background == 'rgb(255, 255, 255)') 
	{
		alert('User Login Requested');
		$('#logo').attr("src", "assets/user.png");
		$('.b')[0].style.background = 'rgb(0, 0, 0)';
		$('.b')[0].style.color = 'rgb(255, 255, 255)';
		$('.b')[1].style.background = 'rgb(255, 255, 255)';
		$('.b')[1].style.color = 'rgb(0, 0, 0)';
		$('#p').show();
		$('form').attr("action", "/user");
	} 
	else if ($('.b')[1].style.background == 'rgb(255, 255, 255)') 
	{
		alert('Admin Login Requested');
		$('#logo').attr("src", "assets/admin2.png");
		$('.b')[1].style.background = 'rgb(0, 0, 0)';
		$('.b')[1].style.color = 'rgb(255, 255, 255)';
		$('.b')[0].style.background = 'rgb(255, 255, 255)';
		$('.b')[0].style.color = 'rgb(0, 0, 0)';
		$('form').attr("action", "/admin");
		$('#p').hide(); 
	}
});
var f1 = false;
var f2 = false;
var f3 = false;
var f4 = false;
var v1 = document.getElementById("mob");
var v2 = document.getElementById("zip");
var v3 = document.getElementById("mail");
var v4 = document.getElementById("amt");
function validate() 
{
	if (v1.matches(":focus") && /^[0-9]{10}$/.test(v1.value)) 
	{
		v1.style.border = "1px solid green"; 
		f1 = true;
	}
	else if (v1.matches(":focus") && /^[0-9]{10}$/.test(v1.value) == false) 
	{
		v1.style.border = "1px solid red";
		f1 = false;
	}
	v1.addEventListener("blur", function() 
	{
		v1.style.border = "1px solid transparent";
	});
	if (v2.matches(":focus") && /^[0-9]{6}$/.test(v2.value)) 
	{
		v2.style.border = "1px solid green";
		f2 = true;
	} 
	else if (v2.matches(":focus") && /^[0-9]{6}$/.test(v2.value) == false) 
	{
		v2.style.border = "1px solid red";
		f2 = false;
	}
	v2.addEventListener("blur", function() 
	{
		v2.style.border = "1px solid transparent";
	});
	if (v3.matches(":focus") && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v3.value)) 
	{
		v3.style.border = "1px solid green";
		f3 = true;
	} 
	else if (v3.matches(":focus") && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v3.value) == false) 
	{
		{
			v3.style.border = "1px solid red";
			f3 = false;
		}
		v3.addEventListener("blur", function() 
		{
			v3.style.border = "1px solid transparent";
		});
	}
	if (v4.matches(":focus") && /^[0-9]+$/.test(v4.value)) 
	{
		v4.style.border = "1px solid green";
		f4 = true;
	} 
	else if (v4.matches(":focus") && /^[0-9]+$/.test(v4.value) == false) 
	{
		v4.style.border = "1px solid red";
		f4 = false;
	}
	v4.addEventListener("blur", function() 
	{
		v4.style.border = "1px solid transparent";
	}); 
}
function sub() 
{
	var err = document.getElementById("error");
	if (f1 == false) 
	{
		v1.style.border = "1px solid red";
		err.style.display = "block";
		err.innerHTML = "*enter a valid mobile number(only 10 digits)";
		return false;
	} 
	else 
	{
		if (f2 == false) 
		{
			v2.style.border = "1px solid red";
			err.style.display = "block";
			err.innerHTML = "*enter a valid zip code(ony 6 digits)";
			return false;
		} 
		else 
		{
			if (f3 == false) 
			{
				v3.style.border = "1px solid red";
				err.style.display = "block";
				err.innerHTML = "*enter a valid email address";
				return false;
			} 
			else 
			{
				if (f4 == false) 
				{
					v4.style.border = "1px solid red";
					err.style.display = "block";
					err.innerHTML = "*enter a valid amount";
					return false;
				} 
				else 
				{
					err.style.display = "none";
					return true;
}
}
}
}
}
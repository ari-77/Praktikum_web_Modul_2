function reset()
{
	document.getElementsById("textNum1").value = "0";
	document.getElementsById("textNum2").value = "0";
}

function Jumlahkan()
{
	var num1 = Number(document.getElementsById("textNum1").value);
	var num2 = Number(document.getElementsById("textNum2").value);
	var sum = num1 + num2;
	alert (sum);
}
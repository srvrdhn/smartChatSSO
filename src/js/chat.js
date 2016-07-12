// Change this to get the users actual name
var userString = "autoName";
// Change this to get the users actual email
var userEmail = "autoEmail@email.com"
var LHCChatOptions = {};
LHCChatOptions.attr = new Array();

// Change the size of the pop up
LHCChatOptions.opt = {
    widget_height: 190,
    widget_width: 300,
    popup_height: 520,
    popup_width: 500
};


// hide the default username and password through the admin portal
// settings -> live help config -> start chat form settings -> mark as invisible to user
LHCChatOptions.attr_prefill = new Array();

// have to change the settings in the console to hide the default username/email because that js is on their end
// pass in the userString and userEmail vars created earlier into the value field here.
LHCChatOptions.attr_prefill.push({
    'name': 'username',
    'value': userString,
    'show': 'on'
});
LHCChatOptions.attr_prefill.push({
    'name': 'email',
    'value': userEmail,
    'show': 'on'
});


// Log the user info just in case theres some mistake
console.log("The username for this chat is " + userString);
console.log("The email for this chat is " + userEmail);

// Calling the LHC script to have the chat work with our own domain.
(function() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    var refferer = (document.referrer) ? encodeURIComponent(document.referrer) : '';
    var location = (document.location) ? encodeURIComponent(document.location) : '';
    po.src = 'https://smarterppractice.livehelperchat.com/chat/getstatus/(click)/internal/(position)/bottom_right/(check_operator_messages)/true/(top)/350/(units)/pixels/(leaveamessage)/true?r=' + refferer + '&l=' + location;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();

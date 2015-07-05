// zero clipboard, for copying email address
var client = new ZeroClipboard( document.getElementById("copy-email") );
client.on('aftercopy', function(event) {
    $('#copy-message').text('Copied');
    setTimeout(	function() {
	$('#copy-message').text('Copy to clipboard')
    }, 5000);
});

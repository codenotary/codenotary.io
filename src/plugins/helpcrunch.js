/* eslint-disable */

export default ({ app }) => {
	(function(w,d){
		w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];
		function r(){var s=document.createElement('script');s.async=1;s.type='text/javascript';s.src='https://widget.helpcrunch.com/';(d.body||d.head).appendChild(s);}
		if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}
	})(window, document)

	setTimeout(() => {
		HelpCrunch('init', 'codenotary', {
			applicationId: 1,
			applicationSecret: 'QC+9TQzimnvMEvJlkbLfri9Rdhh9ENO15A1c3IrVXbg1RHXjL5JoSh8Mm6WXRljYl280VCueb/wAaU5grmsRQA=='
		})
		HelpCrunch('showChatWidget');
	}, 500)
}

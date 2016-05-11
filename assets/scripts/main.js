$(function($) {
	window.fnames = [];
	window.ftypes = [];
	fnames[0] = 'EMAIL';
	ftypes[0] = 'email';
	fnames[1] = 'ZCODE';
	ftypes[1] = 'text';
	fnames[2] = 'MMERGE2';
	ftypes[2] = 'dropdown';

	$('.btn--submit').click(function() {
		$('#mc_embed_signup h3, #mc_embed_signup form .row').hide();
	});
}(jQuery));
var $mcj = jQuery.noConflict(true);

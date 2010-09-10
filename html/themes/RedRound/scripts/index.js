/*
 *      index.js 5/5/2009
 *      Copyleft 2009 kanesodi <kanesodi@gmail.com>
 *      
 *      Fixed by epsylon3@gmail.com for tfb git
 *      
 *      This file is public domain;
 */

// turn unordened list into tabs
jQuery(document).ready(function(){
	
	//tabs first, because droplisti use ul/li too
	jQuery("#tabs").tabs({ panelTemplate: '<li></li>' });

	//skin buttons
	jQuery("input:submit").button();
	
	//comboboxes
	jQuery('select#searchEngine').droplist({width:100})
		.css('display','inline-block')
		.css('vertical-align','bottom');
	jQuery('select').droplist({autoresize:true,slide:false,height:150});
 
});
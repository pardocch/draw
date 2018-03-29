$(document).ready(function(){
	var num1 = $('#pagebtn1'),
		num2 = $('#pagebtn2'),
		num3 = $('#pagebtn3'),
		num4 = $('#pagebtn4'),
		num5 = $('#pagebtn5'),
		num6 = $('#pagebtn6'),
		num7 = $('#pagebtn7'),
		num8 = $('#pagebtn8'),
		num9 = $('#pagebtn9'),
		num0 = $('#pagebtn0'),
		numclear = $('#pagebtnclear'),
		numenter = $('#pagebtnenter');

	num1.click(function(){
		$('#search-query').val() += '1';
	});
	num2.click(function(){
		$('#search-query').val() += '2';
	});
	num3.click(function(){
		$('#search-query').val() += '3';
	});
	num4.click(function(){
		$('#search-query').val() += '4';
	});
	num5.click(function(){
		$('#search-query').val() += '5';
	});
	num6.click(function(){
		$('#search-query').val() += '6';
	});
	num7.click(function(){
		$('#search-query').val() += '7';
	});
	num8.click(function(){
		$('#search-query').val() += '8';
	});
	num9.click(function(){
		$('#search-query').val() += '9';
	});
	num0.click(function(){
		$('#search-query').val() += '0';
	});
	numclear.click(function(){
		$('#search-query').val() += '';
	});
	numenter.click(function(){
		// $('#search-query').val() += '1';
	});
});
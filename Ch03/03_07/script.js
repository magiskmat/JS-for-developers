
(function() {
	"use strict";
	
	var state = document.getElementById('s-state');
	
	document.addEventListener('DOMContentLoaded', function() {
		document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
		
		var btnEstimate = document.getElementById('btn-estimate');
		
		btnEstimate.disabled = true;
		
		state.addEventListener('change', function() {
		
			if (state.value === '') {
				btnEstimate.disabled = true;
			} else {
				btnEstimate.disabled = false;
			}
		
		});
	});
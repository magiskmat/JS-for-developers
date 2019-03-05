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

function estimateTotal(event) {
	event.preventDefault();
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}
	
	var itemBball = document.getElementById('txt-q-bball').value, 10),
		itemJersey = document.getElementById('txt-q-jersey').value, 10),
		itemPower = document.getElementById('txt-q-power').value, 10),
		shippingState = state.value,
		shippingMethod = document.querySelector('[name=r_method]:checked').value;
		
	

	}
	

	var totalQty = itemBball + itemJersey + itemPower,
		shippingCostPer,
		shippingCost,
		taxFactor = 1,
		estimate,
		totalItemPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower);
	
	if (shippingState === 'CA') {
		taxFactor = 1.075;
	}
	
	switch(shippingMethod) {
		case 'usps' :
			shippingCostPer = 2;
			break;
		case 'ups' :
			shippingCostPer = 3;
			break;
		default :
			shippingCostPer = 0;
			break;
	}
	
	shippingCost = shippingCostPer * totalQty;
		
	estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);
	
	document.getElementById('txt-estimate').value = estimate;
}

})();
$(document).ready(function () {
	var updateOutput = function (e) {
		var list = e.length ? e : $(e.target),
			output = list.data('output');
		if (window.JSON) {
			output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
		} else {
			output.val('JSON browser support required for this demo.');
		}
	};

	// activate Nestable for list 2
	$('#nestable3')
		.nestable({
			group: 1,
		})
		.on('change', updateOutput);

	// output initial serialised data
	updateOutput($('#nestable3').data('output', $('#nestable3-output')));

	$('#nestable3').nestable();
});

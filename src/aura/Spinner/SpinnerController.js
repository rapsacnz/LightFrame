({
	show : function(component, event, helper) {
    var spinner = component.find("spinner");
    $A.util.removeClass(spinner, 'ch-hide');
	},
  hide : function(component, event, helper) {
    var spinner = component.find("spinner");
    $A.util.addClass(spinner, 'ch-hide');
  }
})

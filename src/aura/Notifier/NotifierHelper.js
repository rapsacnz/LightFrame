({

  showSuccessAlert: function(message, component) {
    var alert = component.find('success-alert');
    $A.util.removeClass(alert, 'slds-hide');
    component.set("v.successMessage", message);
  },
  showErrorAlert: function(message, component) {
    var alert = component.find('error-alert');
    $A.util.removeClass(alert, 'slds-hide');
    component.set("v.errorMessage", message);
  },
  showWarningAlert: function(message, component) {
    var alert = component.find('warning-alert');
    $A.util.removeClass(alert, 'slds-hide');
    component.set("v.warningMessage", message);
  },
  hideAlerts: function(component) {
    var error = component.find('error-alert');
    var success = component.find('success-alert');
    var warning = component.find('warning-alert');
    $A.util.addClass(error, 'slds-hide');
    $A.util.addClass(success, 'slds-hide');
    $A.util.addClass(warning, 'slds-hide');
  }
})

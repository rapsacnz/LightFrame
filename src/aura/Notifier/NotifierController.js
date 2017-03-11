({
  handleAlertClose: function(component, event, helper) {
    helper.hideAlerts(component);
  },

  showSuccess: function(component, event, helper) {
    helper.hideAlerts(component);
    var params = event.getParam('arguments');
    if (params) {
      var text = params.text;
      var autoClose = params.autoClose;
      var autoCloseDelay = params.autoCloseDelay;
      helper.showSuccessAlert(text, component);
      if (autoClose == true && autoCloseDelay > 0) {
        window.setTimeout(
          $A.getCallback(function() {
            if (component.isValid()) {
              helper.hideAlerts(component);
            }
          }), autoCloseDelay
        );
      }
    }
  },

  showWarning: function(component, event, helper) {
    helper.hideAlerts(component);
    var params = event.getParam('arguments');
    if (params) {
      var text = params.text;
      var autoClose = params.autoClose;
      var autoCloseDelay = params.autoCloseDelay;
      helper.showWarningAlert(text, component);
      if (autoClose == true && autoCloseDelay > 0) {
        window.setTimeout(
          $A.getCallback(function() {
            if (component.isValid()) {
              helper.hideAlerts(component);
            }
          }), autoCloseDelay
        );
      }
    }
  },

  showError: function(component, event, helper) {
    helper.hideAlerts(component);
    var params = event.getParam('arguments');
    if (params) {
      var text = params.text;
      var autoClose = params.autoClose;
      var autoCloseDelay = params.autoCloseDelay;
      helper.showErrorAlert(text, component);
      if (autoClose == true && autoCloseDelay > 0) {
        window.setTimeout(
          $A.getCallback(function() {
            if (component.isValid()) {
              helper.hideAlerts(component);
            }
          }), autoCloseDelay
        );
      }
    }
  },
})

({
  init : function(component) {
    this.initData(component);
 },
  initData : function(component){
    //override this for any sub component
  },


  showHideSpinner: function(show, component) {
    var spinner = component.getSuper().find('spinner');
    if (show) {
      spinner.show();
    } else {
      spinner.hide();
    }
  },
  showSuccessAlert: function(message, component) {
    var notifier = component.getSuper().find('notifier');
    notifier.showSuccess(message, true, 3000);

  },
  showErrorAlert: function(message, component) {
    var notifier = component.getSuper().find('notifier');
    notifier.showError(message);
  },

  callServerMethod: function(component,apexMethodName,apexParams,successCallBack,errorCallBack) {

    var superSelf = this;

    if (!apexMethodName ){
      superSelf.showErrorAlert("Helper Error: no method name supplied");
      return;
    }

    var action = component.get(apexMethodName);
    if (apexParams){
      action.setParams(apexParams);
    }
    
    action.setCallback(this, function(response) {
      if (component.isValid() && response.getState() === "SUCCESS") {
          
        //hide the spinner if it was showing
        superSelf.showHideSpinner(false,component);
        var result = response.getReturnValue();
        if (result.success) {
          if(successCallBack){
            successCallBack(result);
          }
        } else {
          superSelf.showErrorAlert(result.message, component);
          if(errorCallBack){
            errorCallBack();
          }
        }
      } else if (response.getState() === "ERROR") {
        //hide the spinner if it was showing
        superSelf.showHideSpinner(false,component);
        superSelf.showErrorAlert(JSON.stringify(response.getError()), component);
        if(errorCallBack){
          errorCallBack();
        }
      }
    });
    $A.enqueueAction(action);
  },

})

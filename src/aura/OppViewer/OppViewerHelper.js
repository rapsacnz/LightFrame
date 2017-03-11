({
 
  initData: function(component) {
    this.getOpportunityData(component);
  },

  getOpportunityData: function(component) {
    var self = this;
    self.showHideSpinner(true, component);
    
    this.callServerMethod(
      component,
      "getData",                                       //apexMethodName
      { recordId: component.get("v.opportunityId") },  //apexParams
      function(result) {                               //successCallBack     
        self.showHideSpinner(false, component);
        if (!result.opp || !result.opp.Id) {
          self.showErrorAlert("Opportunity could not be found", component);
          return;
        }
        try {
          var opp = JSON.parse(result.data);
          
          if (!opp || !opp.Id) {
            self.showErrorAlert("Opportunity could not be found", component);
            return;
          }
          component.set("v.opportunity", opp);
        } catch (e) {
          self.showErrorAlert("An error occurred parsing the result: " + JSON.stringify(e), component);
          return;
        }
      },
      null                                            //failure callback
    );
  },

})

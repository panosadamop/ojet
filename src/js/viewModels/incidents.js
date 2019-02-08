/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
/*text!data/data.json is used for loading json file. it is the fourth element as file is the fourth attribute of function*/

define(['ojs/ojcore','knockout', 'jquery', 'text!data/data.json' , 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojlegend', 'ojs/ojchart', 'ojs/ojtoolbar'],
 function(oj, ko, $, file) {
  
    function IncidentsViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

        /*Observable arrays*/

       /* var data=[
                {name: "Pedestrians", items: [22]},
                {name: "Vehicles", items: [55]},
                {name: "Bicycles", items: [36]},
                {name: "Buses", items: [12]},
                {name: "Trains", items: [122]}
            ];*/

       var data= JSON.parse(file);

        self.datasource = ko.observableArray(data);

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);

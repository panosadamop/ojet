/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
 function(oj, ko, $) {
  
    function AboutViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
        self.data = ko.observableArray();
        $.getJSON("https://restcountries.eu/rest/v2/all").
            then(function(countries){
                var tmpArray = [];
                 $.each(countries, function(){
                     tmpArray.push({
                         name: this.name,
                         population: this.population,
                         capital: this.capital
                            });
                        });
                 self.data(tmpArray);

        });
        self.datasource = new oj.ArrayTableDataSource(
            self.data,
            {idAttribute: 'name'}
        );
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new AboutViewModel();
  }
);

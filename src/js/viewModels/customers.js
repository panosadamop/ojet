/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
 function(oj, ko, $, CountryFactory) {

    var viewModel={
        countryCollection: CountryFactory.createCountryCollection(),
        datasource: ko.observable(),
        //called each time the view is shown to the user
        initialize: function(){
            this.datasource(new oj.CollectionTableDataSource(this.countryCollection));
            this.countryCollection.fetch();
        }
    };
    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new ViewModel();
  }
);

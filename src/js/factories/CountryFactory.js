define(['ojs/ojscore']), function(oj){

    var CountryFactory = {
        resourceUrl: "https://restcountries.eu/rest/v2/all",
        //create a single country instance
        createCountryModel: function(){
            var Country = oj.model.extend({
                urlRoot: this.resourceUrl,
                idAttribute: "name"
            });
            return new Country();
        },

        //create country collection:
        createCountryCollection: function(){
            var Countries = oj.Collection.extend({
                url: this.resourceUrl,
                model:this.createCountryModel()
            });
            return new Countries();
        }
    };

    return CountryFactory;

}
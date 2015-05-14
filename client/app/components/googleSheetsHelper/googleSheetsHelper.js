'use strict';

angular.module('myApp.googleSheetsHelper', [])
.service('googleSheetsHelper', [function(){
  this.parse = function(fields, slugs, data){
    return data.feed.entry.map(function(item){
      var scrubed_data = {};
      fields.forEach(function(field){
        scrubed_data[field] = item['gsx$' + field]['$t'];
      });
      return scrubed_data;
    }).map(function(item){
      var slug = '';
      slugs.forEach(function(s){
        slug += ' ' + item[s];
      })
      item.slug = slug.replace(/[^\w\s-]/g, "").trim().toLowerCase().replace(/[-\s]+/g, "-");
      return item;
    }).map(function(item){
      item.image = 'https://googledrive.com/host/0B1VMmT-RhPXQfi1wNmxtMHJ6OUh1bnBYVGZFNDhqcjdSWkpBWGNYaF9HRTZKU3NOTFpldDQ/' + item.image.replace(/[-\s]+/g, "%20");
      return item;
    });
  };
  this.jsonurl = function(key, sheet_number){
    return 'https://spreadsheets.google.com/feeds/list/' + key + '/' + sheet_number + '/public/values?alt=json';
  };
}]);

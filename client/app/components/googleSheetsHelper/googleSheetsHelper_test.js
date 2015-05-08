'use strict';

describe('myApp.googleSheetsHelper module', function() {
  beforeEach(module('myApp.googleSheetsHelper'));

  describe('googleSheetsHelper service', function() {
    it('should return the requested fields', inject(function(googleSheetsHelper) {
      expect(googleSheetsHelper).toEqual('0.1');
    }));
  });
});

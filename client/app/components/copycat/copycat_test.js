'use strict';

describe('myApp.copycat module', function() {
  beforeEach(module('myApp.copycat'));

  describe('copycat service', function() {
    it('should return the requested fields', inject(function(copycat) {
      expect(copycat).toEqual('0.1');
    }));
  });
});

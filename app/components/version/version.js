'use strict';

angular.module('ciqDocs.version', [
  'ciqDocs.version.interpolate-filter',
  'ciqDocs.version.version-directive'
])

.value('version', '0.1');

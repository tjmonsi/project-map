PROJECTMAP.Elements = (function () {
  'use strict';

  function init() {
    PROJECTMAP.Elements.Template = document.getElementById('project-map-app');
    PROJECTMAP.Elements.Loader = document.getElementById('showbox');
    
  }

  return {
    init: init
  };
}());
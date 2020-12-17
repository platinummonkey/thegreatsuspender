/*global ga, gsStorage, gsSession, gsUtils */
// eslint-disable-next-line no-unused-vars
var gsAnalytics = function() {
  'use strict';

  const DIMENSION_VERSION = 'dimension1';
  const DIMENSION_SCREEN_CAPTURE = 'dimension2';
  const DIMENSION_SUSPEND_TIME = 'dimension3';
  const DIMENSION_DONATED = 'dimension4';
  const DIMENSION_DISCARD_AFTER_SUSPEND = 'dimension5';

  const METRIC_SUSPENDED_TAB_COUNT = 'metric1';
  const METRIC_TOTAL_TAB_COUNT = 'metric2';
  const METRIC_TAB_CHECK_TIME_TAKEN = 'metric3';
  const METRIC_TAB_RECOVER_TIME_TAKEN = 'metric4';

  function initAsPromised() {
    return new Promise(function(resolve) {
      // disabled because you never need this, ever.
      resolve();
    });
  }

  function setUserDimensions() {
    // disabled because you never need this, ever.
    return;
  }

  function performStartupReport() {
    // disabled because you never need this, ever.
    return;
  }

  function performVersionReport() {
    // disabled because you never need this, ever.
    return;
  }

  function performPingReport() {
    // disabled because you never need this, ever.
    return;
  }

  function reportPageView(pageName) {
    // disabled because you never need this, ever.
    return;
  }
  function reportEvent(category, action, label) {
    // disabled because you never need this, ever.
    return;
  }
  function reportException(errorMessage) {
    // disabled because you never need this, ever.
    return;
  }
  return {
    initAsPromised,
    performStartupReport,
    performVersionReport,
    performPingReport,
    setUserDimensions,
    reportPageView,
    reportEvent,
    reportException,
  };
};

function init() {
  // disabled because you never need this, ever.
  gsAnalytics = gsAnalytics();
}

if (document.readyState == 'complete') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    init();
  });
}

/*
 * bootstrap-carousel-swipe
 * https://github.com/bassettsj/bootstrap-carousel-swipe
 *
 * Copyright (c) 2014 Steven Bassett <steven.j.bassett@gmail.com>
 * Licensed under the MIT license.
 */
/* global require */
/* global module */
(function(exports, $) {

  'use strict';



  /**
   * Adds the vent listners to any of the the carousels.
   */
  var bootstrapCarouselSwipe = function() {
    return $(function(){
      var Hammer = require('hammerjs');
      var carousel = $('.carousel.slide');
      carousel.each(function() {

        var carouselSwipe = new Hammer(this);
        // Preserve this for function.
        var element = this;
        
        // Add the swipe right event listner.
        carouselSwipe.on('swiperight', function() {
          $(element).carousel('prev');
        });

        // Add the swipe left event listner.
        carouselSwipe.on('swipeleft', function() {
          $(element).carousel('next');
        });

      });

    });

  };

  module.exports = bootstrapCarouselSwipe;

}(typeof exports === 'object' && exports || this, jQuery));

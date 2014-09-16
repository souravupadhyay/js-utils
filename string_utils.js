/*
 * StringUtils
 */

"use strict";

module.exports = {

  setCharAtIndex: function(str, chr, index) {
    return str.substr(0, index) + chr + str.substr(index + 1);
  }

};

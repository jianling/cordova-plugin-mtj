/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


var MTJ = {
    eventStart: function(success, failure, args) {
        var eventId = args[0];
        var eventLabel = args[1];

        console.log("eventStart: " + eventId + ' ' + eventLabel);
    },
    eventEnd: function(success, failure, args) {
        var eventId = args[0];
        var eventLabel = args[1];

        console.log("eventEnd: " + eventId + ' ' + eventLabel);
    },
    logEvent: function(success, failure, args) {
        var eventId = args[0];
        var eventLabel = args[1];

        console.log("logEvent: " + eventId + ' ' + eventLabel);
        window._hmt && _hmt.push(['_trackEvent', 'app', eventId]);
    },
    logEventWithDurationTime: function(success, failure, args) {
        var eventId = args[0];
        var eventLabel = args[1];
        var duration = args[2];

        console.log("logEventWithDurationTime: " + eventId + ' ' + eventLabel + ' ' + duration);
    },
    pageviewStartWithName: function(success, failure, args) {
        var name = args[0];

        console.log("pageviewStartWithName: " + name);
        window._hmt && _hmt.push(['_trackPageview', name]);
    },
    pageviewEndWithName: function(success, failure, args) {
        var name = args[0];

        console.log("pageviewEndWithName: " + name);
    }
};

module.exports = MTJ;

var window._hmt = window._hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?246b1eee96387ca7707b4d9110501e79";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

require("cordova/exec/proxy").add("CDVMTJ", module.exports);

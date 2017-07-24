/**
 * Baidu MTJ plugin for Cordova / Phonegap
 */
package com.baidu;


import com.baidu.mobstat.StatService;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

public class CDVMTJ extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext)
            throws JSONException {
        if (action.equals("eventStart")) {
            String eventId = args.getString(0);
            String eventLabel = args.getString(1);

            StatService.onEventStart(cordova.getActivity(), eventId, eventLabel);
        }
        else if (action.equals("eventEnd")) {
            String eventId = args.getString(0);
            String eventLabel = args.getString(1);

            StatService.onEventEnd(cordova.getActivity(), eventId, eventLabel);
        }
        else if (action.equals("logEvent")) {
            String eventId = args.getString(0);
            String eventLabel = args.getString(1);

            StatService.onEvent(cordova.getActivity(), eventId, eventLabel);
        }
        else if (action.equals("logEventWithDurationTime")) {
            String eventId = args.getString(0);
            String eventLabel = args.getString(1);
            Long duration = args.getLong(2);

            StatService.onEventDuration(cordova.getActivity(), eventId, eventLabel, duration);
        }
        else if (action.equals("pageviewStartWithName")) {
            String pageName = args.getString(0);

            StatService.onPageStart(cordova.getActivity(), pageName);
        }
        else if (action.equals("pageviewEndWithName")) {
            String pageName = args.getString(0);

            StatService.onPageEnd(cordova.getActivity(), pageName);
        }
        else {
            return false;
        }

        return true;
    }

}

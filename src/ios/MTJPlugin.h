#import <Cordova/CDV.h>
#import <CoreLocation/CoreLocation.h>

@interface CDVMTJ : CDVPlugin
@property (nonatomic) CDVPluginResult *result;

- (void)eventStart:(CDVInvokedUrlCommand*)command;

- (void)eventEnd:(CDVInvokedUrlCommand*)command;

- (void)logEvent:(CDVInvokedUrlCommand*)command;

- (void)logEventWithDurationTime:(CDVInvokedUrlCommand*)command;

- (void)pageviewStartWithName:(CDVInvokedUrlCommand*)command;

- (void)pageviewEndWithName:(CDVInvokedUrlCommand*)command;

@end
#import "MTJPlugin.h"
#import "BaiduMobStat.h"

@implementation CDVMTJ{
}

- (void)eventStart:(CDVInvokedUrlCommand*)command {
    NSString *eventStart = [command.arguments objectAtIndex:0];
    NSString *eventLabel = [command.arguments objectAtIndex:1];
    [[BaiduMobStat defaultStat] eventStart:eventStart eventLabel:eventLabel];
}

- (void)eventEnd:(CDVInvokedUrlCommand*)command {
    NSString *eventStart = [command.arguments objectAtIndex:0];
    NSString *eventLabel = [command.arguments objectAtIndex:1];
    [[BaiduMobStat defaultStat] eventStart:eventStart eventLabel:eventLabel];
}

- (void)logEvent:(CDVInvokedUrlCommand*)command {
    NSString *eventStart = [command.arguments objectAtIndex:0];
    NSString *eventLabel = [command.arguments objectAtIndex:1];
    [[BaiduMobStat defaultStat] eventStart:eventStart eventLabel:eventLabel];
}

- (void)logEventWithDurationTime:(CDVInvokedUrlCommand*)command {
    NSString *eventStart = [command.arguments objectAtIndex:0];
    NSString *eventLabel = [command.arguments objectAtIndex:1];
    unsigned long durationTime = [command.arguments objectAtIndex:2];
    [[BaiduMobStat defaultStat] logEventWithDurationTime:eventStart eventLabel:eventLabel durationTime:durationTime];
}

- (void)pageviewStartWithName:(CDVInvokedUrlCommand*)command {
    NSString *name = [command.arguments objectAtIndex:0];
    [[BaiduMobStat defaultStat] pageviewStartWithName:name];
}

- (void)pageviewEndWithName:(CDVInvokedUrlCommand*)command {
    NSString *name = [command.arguments objectAtIndex:0];
    [[BaiduMobStat defaultStat] pageviewEndWithName:name];
}

@end



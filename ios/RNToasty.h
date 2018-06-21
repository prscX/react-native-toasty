
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import "UIView+Toast.h"

@interface RNToasty : NSObject <RCTBridgeModule>

@end
  

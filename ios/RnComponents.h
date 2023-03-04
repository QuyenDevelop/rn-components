
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnComponentsSpec.h"

@interface RnComponents : NSObject <NativeRnComponentsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnComponents : NSObject <RCTBridgeModule>
#endif

@end

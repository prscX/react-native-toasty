
#import "RNToasty.h"
#import "RCTUtils.h"

@implementation RNToasty

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(Show:(NSDictionary *)props) {
    NSNumber *type = [props objectForKey: @"type"];
    
    NSString *title = [props objectForKey: @"title"];
    NSNumber *titleSize = [props objectForKey: @"titleSize"];
    NSString *titleColor = [props objectForKey: @"titleColor"];
    
    NSNumber *duration = [props objectForKey: @"duration"];
    NSString *tintColor = [props objectForKey: @"tintColor"];
    
    NSNumber *withIcon = [props objectForKey: @"withIcon"];
    NSDictionary *icon = [props objectForKey: @"icon"];
    UIImage *drawable = nil;
    
    NSString *position = [props objectForKey: @"position"];
    
    CSToastStyle *style = [[CSToastStyle alloc] initWithDefaultStyle];
    
    if (icon != nil && [icon count] > 0 && [withIcon intValue] == 1) {
        drawable = [RNImageHelper GenerateImage: icon];
    }
    if (tintColor != nil && [tintColor length] > 0) {
        style.backgroundColor = [RNImageHelper ColorFromHexCode: tintColor];
    }
    if (drawable != nil) {
        style.imageSize = drawable.size;
    }
    if (titleColor != nil && [titleColor length] > 0) {
        style.titleColor = [RNImageHelper ColorFromHexCode: titleColor];
    }
    if (titleSize != nil && ![titleSize isEqual:@0]) {
        style.messageFont = [UIFont systemFontOfSize: [titleSize intValue]];
    }

    if(duration != nil) {
           duration = duration.intValue == 0 ? [NSNumber numberWithFloat:1.0] : [NSNumber numberWithFloat:3.0];
    }
    
    const NSString *toastPosition = [self getPosition: position];
    
    UIWindow *window = [[UIApplication sharedApplication] keyWindow];

    // toast with all possible options
    [window
     makeToast: title
     duration: duration.floatValue
     position: toastPosition
     title: nil
     image: drawable
     style: style
     completion:^(BOOL didTap) {
      if (didTap) {
          NSLog(@"completion from tap");
      } else {
          NSLog(@"completion without tap");
      }
    }];
}

- (const NSString *__strong) getPosition: (NSString *)position {
    if([position isEqualToString:@"top"]) {
        return CSToastPositionTop;
    } else if([position isEqualToString:@"center"]) {
        return CSToastPositionCenter;
    } else {
        return CSToastPositionBottom;
    }
}

@end
  


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
        drawable = [self generateVectorIcon: icon];
    }
    if (tintColor != nil && [tintColor length] > 0) {
        style.backgroundColor = [RNToasty ColorFromHexCode: tintColor];
    }
    if (drawable != nil) {
        style.imageSize = drawable.size;
    }
    if (titleColor != nil && [titleColor length] > 0) {
        style.titleColor = [RNToasty ColorFromHexCode: titleColor];
    }
    if (titleSize != nil && ![titleSize isEqual:@0]) {
        style.messageFont = [UIFont systemFontOfSize: [titleSize intValue]];
    }

    const NSString *toastPosition = [self getPosition: position];
    
    UIWindow *window = [[UIApplication sharedApplication] keyWindow];

    // toast with all possible options
    [window
     makeToast: title
     duration: 3.0
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

- (UIImage *) generateVectorIcon: (NSDictionary *) icon {
    NSString *family = [icon objectForKey: @"family"];
    NSString *name = [icon objectForKey: @"name"];
    NSString *glyph = [icon objectForKey: @"glyph"];
    NSNumber *size = [icon objectForKey: @"size"];
    NSString *color = [icon objectForKey: @"color"];
    
    if (name != nil && [name length] > 0 && [name containsString: @"."]) {
        return [UIImage imageNamed: name];
    }
    
    UIColor *uiColor = [RNToasty ColorFromHexCode: color];
    CGFloat screenScale = RCTScreenScale();
    
    UIFont *font = [UIFont fontWithName:family size:[size floatValue]];
    NSAttributedString *attributedString = [[NSAttributedString alloc] initWithString:glyph attributes:@{NSFontAttributeName: font, NSForegroundColorAttributeName: uiColor}];
    
    CGSize iconSize = [attributedString size];
    UIGraphicsBeginImageContextWithOptions(iconSize, NO, 0.0);
    [attributedString drawAtPoint:CGPointMake(0, 0)];
    
    UIImage *iconImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return iconImage;
}


+ (UIColor *) ColorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}

@end
  

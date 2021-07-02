
package ui.toasty;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.lang.reflect.Method;
import java.util.Map;

import android.util.Log;
import android.annotation.TargetApi;
import android.graphics.Canvas;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Rect;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.content.res.Resources;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.DrawableContainer;
import com.facebook.react.views.text.ReactFontManager;

import android.os.StrictMode;

import android.graphics.Color;
import android.view.Gravity;
import android.widget.Toast;

import es.dmoral.toasty.Toasty;

public class RNToastyModule extends ReactContextBaseJavaModule {

  public RNToastyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNToasty";
  }

  @ReactMethod
  public void Show(final ReadableMap props) {

    Toasty.Config config = Toasty.Config.getInstance();

    int type = props.getInt("type");

    String title = props.getString("title");
    int titleSize = props.getInt("titleSize");
    String titleColor = props.getString("titleColor");

    int duration = props.getInt("duration");
    String tintColor = props.getString("tintColor");

    boolean withIcon = props.getBoolean("withIcon");
    ReadableMap icon = props.hasKey("icon") ? props.getMap("icon") : null;
    
    String fontFamily = props.getString("fontFamily");

    String position = props.getString("position");
    int offsetX = props.getInt("offsetX");
    int offsetY = props.getInt("offsetY");

    Drawable iconDrawable = null;

    if (withIcon) {
      if (icon != null && icon.toHashMap().size() > 0) {
        try {
          Class<?> clazz = Class.forName("prscx.imagehelper.RNImageHelperModule"); //Controller A or B
          Class params[] = {ReadableMap.class};
          Method method = clazz.getDeclaredMethod("GenerateImage", params);

          iconDrawable = (Drawable) method.invoke(null, icon);
        } catch (Exception e) {
          Log.d("", "");
        }
      }
    }

    if (titleSize != 0) {
      config.setTextSize(titleSize);
    }

    if(fontFamily.length() > 0) {
      Typeface typeface = Typeface.createFromAsset(getCurrentActivity().getAssets(),"fonts/" + fontFamily + ".ttf");
      config.setToastTypeface(typeface);
    }

    config.apply(); // required

    Toast toast = null;

    if (tintColor.length() <= 0 && icon == null ) {
      switch (type) {
        case 0:
          toast = Toasty.normal(getCurrentActivity(), title, duration);
          break;
        case 1:
          toast = Toasty.info(getCurrentActivity(), title, duration, withIcon);
          break;
        case 2:
          toast = Toasty.success(getCurrentActivity(), title, duration, withIcon);
          break;
        case 3:
          toast = Toasty.warning(getCurrentActivity(), title, duration, withIcon);
          break;
        case 4:
          toast = Toasty.error(getCurrentActivity(), title, duration, withIcon);
          break;
      }
    } else {
      toast = Toasty.custom(getCurrentActivity(), title, iconDrawable, Color.parseColor(tintColor), Color.parseColor(titleColor), duration, withIcon, true);
    }

    if(toast != null) {
      toast.setGravity(getGravity((position)), offsetX, offsetY);
      toast.show();
    }
  }

  private int getGravity(String gravity) {
    switch(gravity) {
      case "top":
        return Gravity.TOP;
      case "center":
        return Gravity.CENTER;
      case "bottom":
      default:
        return Gravity.BOTTOM;
    }
  };
}


package ui.toasty;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import android.graphics.Color;
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
    int type = props.getInt("type");

    String title = props.getString("title");
    int titleSize = props.getInt("titleSize");
    String titleColor = props.getString("titleColor");

    int duration = props.getInt("duration");
    String tintColor = props.getString("tintColor");

    boolean withIcon = props.getBoolean("withIcon");

    if (tintColor.length() <= 0) {
      switch (type) {
        case 0:
          Toasty.normal(getCurrentActivity(), title, duration).show();
          break;
        case 1:
          Toasty.info(getCurrentActivity(), title, duration, withIcon).show();
          break;
        case 2:
          Toasty.success(getCurrentActivity(), title, duration, withIcon).show();
          break;
        case 3:
          Toasty.warning(getCurrentActivity(), title, duration, withIcon).show();
          break;
        case 4:
          Toasty.error(getCurrentActivity(), title, duration, withIcon).show();
          break;
      }
    } else {
      Toasty.custom(getCurrentActivity(), title, null, Color.parseColor(tintColor), duration, withIcon, true).show();
    }
  }
}
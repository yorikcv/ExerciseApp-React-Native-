package com.exerciseapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import android.content.Context;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    
    public void allowRTL(Context context) {
        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
        sharedI18nUtilInstance.allowRTL(context, true);
    }    

    @Override
    protected String getMainComponentName() {
        return "exerciseapp";
    }


}


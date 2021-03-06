package com.meeroskiin;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return Arrays.<ReactPackage>asList(
                new VectorIconsPackage(),
                new MapsPackage(),
                new ReactNativeConfigPackage(),
                new LocationServicesDialogBoxPackage(),
                new SnackbarPackage()
          );
        }
      };

    protected List<ReactPackage> getPackages() {
          // Add additional packages you require here
          // No need to add RnnPackage and MainReactPackage
          return Arrays.<ReactPackage>asList(
              new MapsPackage(),
              new ReactNativeConfigPackage(),
              new VectorIconsPackage(),
              new LocationServicesDialogBoxPackage(),
              new SnackbarPackage()
          );
     }

    @Override
        public List<ReactPackage> createAdditionalReactPackages() {
           return getPackages();
        }

  @Override
       public boolean isDebug() {
           // Make sure you are using BuildConfig from your own application
           return BuildConfig.DEBUG;
       }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

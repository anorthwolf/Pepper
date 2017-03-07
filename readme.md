# Tamale Native

Tamale native cross-platform application. 

### Setup Steps
* Clone the repository
* Install NativeScript
    ``` sh
    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
* Open commandline
* Go to project folder
* Run the following command in commandline
    ```sh
    $ npm install
    ```
* Add target platform
    ``` sh
    $ tns platform add ios
    $ tns platform add android
    ```

### Build application
Run the following command in commandline.
* Build on IOS platform
    ``` sh
    $ tns build ios
    ```
* Build on Android platform
    ``` sh
    $ tns build android
    ```

### Run application
Run the following command in commandline.
* IOS:
    ``` sh
    $ tns run ios
    ```
* Android:
    ``` sh
    $ tns run android
    ```

### Run application with livesync
Run the following command in commandline.
* IOS:
    ``` sh
    $ tns run ios --watch
    ```
* Android:
    ``` sh
    $ tns run android --watch
    ```

### Debug application
Run the following command in commandline.
* IOS:
    ``` sh
    $ tns debug ios
    ```
* Android:
    ``` sh
    $ tns debug android
    ```

### Debug application with livesync
Run the following command in commandline.
* IOS:
    ``` sh
    $ tns debug ios --watch
    ```
* Android:
    ``` sh
    $ tns debug android --watch
    ```
    
### Run/Debug application on emulator
Run the following command in commandline (take IOS as an example).
* Run application
    ``` sh
    $ tns run ios --emulator
    ```
* Run application with livesync:
    ``` sh
    $ tns run ios --emulator --watch
    ```
* Debug application
    ``` sh
    $ tns debug ios --emulator
    ```
* Debug application with livesync:
    ``` sh
    $ tns debug ios --emulator --watch
    ```

### Run/Debug application with physical connected device
To run/debug with a physical device:
* Connect the device with developing machine with a physical cable
* Run the following command in commandline (take running application on IOS as an example). Do NOT use --emulator flag.
    ``` sh
    $ tns run ios
    ```
Note: if there is no physical connected device, simply run/debug the application without --emulator will still run/debug the application on the emulator by default.

### Folder Structure
```
./
 |-- app                           * application source file
 |-- hooks                          * NativeScript CLI hooks that can preprocess TypeCode to JavaScript Code
 |-- lib                            * NativeScript libraries
 |-- node_modules                   * application npm module dependencies
 |-- packages                       * application commercial 3rd party libraries
 |-- platforms                      * platform code that NativeScript needs to be the application
 |-- karma.conf.js                  * application unit testing configuration file
 |-- package.json                   * application configuraion details
 |-- reference.d.ts                 * TypeScript declaration files
 |-- tsconfig.json                  * TypeScript configuration
 ```
 
### History
 Version 1, 2016.12.05, yu.zhang@advent.com
 * 1st commit
 * add application setup steps for MacOS environment
 * add folder structure introduction
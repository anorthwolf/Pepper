# app folder

All application source code are loacated here.
    
### Folder structure
```
app/
 |-- App_Resources                          * application resources
 |    |-- Android                           * application resources for Android
 |    |-- iOS                               * application resources for iOS
 |
 |-- business
 |    |-- auth.service.ts                   * authentication service
 |    |-- *.ts                              * other service file, do NOT create sub-folder for it
 |
 |-- components                             * shared compoents
 |    |-- login-form                        * login-form component (feature) folder
 |    |    |-- login-form.html              * login-form component HTML template (view)
 |    |    |-- login-form.scss              * login-form component styling
 |    |    |-- login-form.spec.ts           * login-form component unit testing
 |    |    |-- login-form.ts                * login-form component class (definition)
 |    |
 |    |-- **                                * other components/features
 |    |
 |    |-- components.module.ts              * shared components module
 |
 |-- constants
 |    |-- app.events.ts                     * application event constants
 |
 |-- core                                   * application global services, components, and pipes
 |    |-- components                        * singleton global components
 |    |    |-- nav-bar                      * nativigation-bar component
 |    |    |    |-- nav-bar.html            * nav-bar component HTML template (view)
 |    |    |    |-- nav-bar.scss            * nav-bar component styling
 |    |    |    |-- nav-bar.spec.ts         * nav-bar component unit testing
 |    |    |    |-- nav-bar.ts              * nav-bar component class (definition)  
 |    |    |-- **                           * other singleton global components
 |    |
 |    |-- services                          * core services
 |    |    |-- logger.ts                    * global logging service
 |    |    |-- exception-helper.ts          * global exception handler
 |    |
 |-- directives                             * shared directives
 | 
 |-- models                                 * shared data model classes
 |    |-- user.ts                           * user model
 |    |-- *.ts                              * other model definitions 
 |
 |-- pages                                  * page modules
 |    |-- login-page                        * login-page navigatable components
 |    |    |-- login-page.html              * login-page component HTML template (view)
 |    |    |-- login-page.scss              * login-page component styling
 |    |    |-- login-page.spec.ts           * login-page component unit testing
 |    |    |-- login-page.ts                * login-page component class (definition)
 |    |    |-- login.module.ts              * login feature module
 |    |    |-- login-routing.module.ts      * login feature routing module
 |    |
 |    |-- **                                * other feature modules
 |
 |-- pipes                                  * shared pipes
 |  
 |-- resources                              * application resources
 |    |-- fonts                             * application fonts
 |    |-- icons                             * application icons
 |    |-- _**.scss                          * Advent styling library code, ask yu.zhang@advent.com
 |
 |-- app.android.scss                       * application andorid specific styling
 |-- app.component.ts/html/scss/spec.ts     * application root component
 |-- app.ios.scss                           * application ios specific styling
 |-- app.module.ts                          * application root module
 |-- app.scss                               * application main styling, shared by ios and android
 |-- app-routing.module.ts                  * application routing module
 |-- main.ts                                * application bootstraping logic
 |-- package.json                           * application dependencies
 |-- reference.d.ts                         * NativeScript autocompletion and compilation
 ```

 ### History
 Version 1, 2016.12.05, yu.zhang@advent.com
 * 1st commit
 * add folder structure full description
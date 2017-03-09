$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "cucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openBrowser()"
});
formatter.result({
  "duration": 2755440017,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 1721603310,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 26054882,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #u_0_v\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ThinkPad-T430\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-64-generic\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20170201180315, version\u003d, platform\u003dLINUX, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d15745, browserVersion\u003d51.0.1, platformVersion\u003d4.4.0-64-generic, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dlinux}]\nSession ID: e84dd385-451f-40d4-aabe-8c79a29caead\n*** Element info: {Using\u003did, value\u003du_0_v}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat cucumberJava.cucumberJava.loginButton(cucumberJava.java:27)\n\tat ✽.Then Login button should exits(cucumberJava/cucumberJava.feature:9)\n",
  "status": "failed"
});
});
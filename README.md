# Bintray-Upload

## Objective

automate [Bintray](http://bintray.com) file upload for many files.

## Usage

Create file `bintray-config.js` with content like below:

	// configuration
	// this is javascript module, not JSON to allow comments
	exports.config = {
	  user_name: "laanayabdrzak",
	  api_key:"ba636be90099ed1",
	  account_or_organization:"laanayabdrzak",
	  repository:"RxConnectivityState",
	  package_name:"rxconnectivitystate",
	  version_name:"1.0.0",
	  file_target_path:"" //#"0_1_0"
	};
	
then run from directory where are files to upload

	node path/to/bintray-upload.js
	
or		

	coffee path/to/bintray-upload.coffee
	
use generate line like below in `.sh` or `.cmd` file

     curl -T bintray-upload.coffee -ulaanayabdrzak:ba636be90099ed1 https://api.bintray.com/content/undefined/RxConnectivityState/rxconnectivitystate/1.0.0/

     curl -T bintray-upload.js -ulaanayabdrzak:ba636be90099ed1 https://api.bintray.com/content/undefined/RxConnectivityState/rxconnectivitystate/1.0.0/

### How to get curl on Windows ?

Get with [msysgit](http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git)
 ([git for Windows](http://msysgit.github.io/)) or from <http://curl.haxx.se/download.html>

### How to get API_KEY ?

From [Bintray User Guide](https://bintray.com/docs/bintrayuserguide.html)

> API Keys

> An API Key is a code for identifying, authenticating and authorizing a specific user’s access and activities using API tools in Bintray. Current functionality allows each user to use only one API Key at any given time but the feature of allowing multiple API Keys to each user is coming soon!

> To acquire an API Key for your user account:

>     1. Access your own User Profile.

>     2. Click the Edit button under your username.

>     3. Select the API Key tab.

>     4. If there is no API Key displayed, click the Generate One link.

>     The new API Key is displayed (it is already saved in the system).

## Developing

nodejs, coffee

### Tools

Created with [Nodeclipse v0.5](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

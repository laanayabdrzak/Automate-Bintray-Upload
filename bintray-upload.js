// Generated by CoffeeScript 1.6.3
(function() {
  var config, console, file, files, folder, fs, _i, _len;

  config = {
    user_name: "laanayabdrzak",
    api_key: "ba636be90099ed1",
    account_or_organization: "laanayabdrzak",
    repository: "RxConnectivityState",
    package_name: "rxconnectivitystate",
    version_name: "1.0.0",
    file_target_path: ""
  };

  fs = require('fs');

  console = require('console');

  config = (require("./bintray-config")).config;

  console.log(config);

  folder = process.cwd();

  files = fs.readdirSync(folder);

  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    console.log("curl -T %s -u%s:%s https://api.bintray.com/content/%s/%s/%s/%s/%s", file, config.user_name, config.api_key, config.account__or_organization, config.repository, config.package_name, config.version_name, config.file_target_path);
  }

}).call(this);

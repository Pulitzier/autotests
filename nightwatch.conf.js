module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "page_objects",
  "globals_path" : "./globals",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-3.8.1.jar",
    "log_path" : "",
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },
  "live_output": false,
  "test_settings" : {
    "default" : {
      "launch_url" : "http://127.0.0.1/",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "acceptSslCerts": true,
        "javascriptEnabled": true
      }
    },
    "phantomjs" : {
      "desiredCapabilities" : {
        "browserName" : "phantom",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "/path/to/phantomjs",
        "phantomjs.cli.args" : []
      }
    }
  }
}
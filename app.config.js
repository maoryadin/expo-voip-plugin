const {
    withInfoPlist,
    withPlugins,
  } = require("expo/config-plugins");
  
  const withCustomVoip = (config) => {
    return withInfoPlist(config, (config) => {
      let content = config.modResults.UIBackgroundModes;
      
      // if voip is not already in the array, add it
      if (!content?.includes("voip")) {
      content?.push("voip");
      config.modResults.UIBackgroundModes = content;
      }
      return config;
    });
  };
  
  const withCustomPlugin = (config) => {
    return withPlugins(config, [withCustomVoip]);
  };
  
  /// Use the plugin
  module.exports = withCustomPlugin;

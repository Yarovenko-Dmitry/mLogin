module.exports = {
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nrwl/nx"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nrwl/nx/typescript"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    }
  ]
}

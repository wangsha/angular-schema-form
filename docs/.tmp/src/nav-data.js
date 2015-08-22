angular.module('docApp').value('DOCS_NAVIGATION', {
  "guide": {
    "id": "guide",
    "name": "Guide",
    "navGroups": [
      {
        "name": "Guide",
        "type": "groups",
        "href": "guide",
        "navItems": [
          {
            "name": "howToUse",
            "type": "",
            "href": "guide/howToUse"
          }
        ]
      }
    ]
  },
  "api": {
    "id": "api",
    "name": "API",
    "navGroups": [
      {
        "name": "schemaForm",
        "type": "groups",
        "href": "api/schemaForm",
        "navItems": [
          {
            "name": "directive",
            "type": "section",
            "href": "api/schemaForm/directive"
          },
          {
            "name": "sfField",
            "type": "directive",
            "href": "api/schemaForm/directive/sfField"
          }
        ]
      },
      {
        "name": "services",
        "type": "groups",
        "href": "api/services",
        "navItems": [
          {
            "name": "service",
            "type": "section",
            "href": "api/services/service"
          },
          {
            "name": "sfSelect",
            "type": "service",
            "href": "api/services/service/sfSelect"
          }
        ]
      }
    ]
  }
});

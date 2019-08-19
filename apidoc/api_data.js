define({ "api": [  {    "type": "post",    "url": "/found",    "title": "1 Create new `found` option",    "name": "CreateFound",    "group": "Found",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "field",            "description": "<p>Field to store</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "inserted_id",            "description": "<p>String of <code>_id</code> inserted</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Error 4xx",            "type": "Array",            "optional": false,            "field": "err",            "description": "<p>Error object</p>"          }        ]      }    },    "filename": "src/found/api.js",    "groupTitle": "Found"  },  {    "type": "delete",    "url": "/found/:id",    "title": "4 Delete specific `found` option",    "name": "DeleteFound",    "group": "Found",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Error 4xx",            "type": "Array",            "optional": false,            "field": "err",            "description": "<p>Error object</p>"          }        ]      }    },    "filename": "src/found/api.js",    "groupTitle": "Found"  },  {    "type": "get",    "url": "/found",    "title": "2 Read all `found` options",    "name": "ReadAllFound",    "group": "Found",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "registers",            "description": "<p>Array of all registers found</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "register.field",            "description": "<p>Field value</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Error 4xx",            "type": "Array",            "optional": false,            "field": "err",            "description": "<p>Error object</p>"          }        ]      }    },    "filename": "src/found/api.js",    "groupTitle": "Found"  },  {    "type": "get",    "url": "/found/:id",    "title": "2.1 Read specific `found` option",    "name": "ReadFound",    "group": "Found",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "register",            "description": "<p>Object of specific register</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "register.field",            "description": "<p>Field value</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Error 4xx",            "type": "Array",            "optional": false,            "field": "err",            "description": "<p>Error object</p>"          }        ]      }    },    "filename": "src/found/api.js",    "groupTitle": "Found"  },  {    "type": "put",    "url": "/found/:id",    "title": "3 Update specific `found` option",    "name": "UpdateFound",    "group": "Found",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "field",            "description": "<p>Field to update</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "updated",            "description": "<p>Object with updated fields</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "success",            "description": ""          },          {            "group": "Error 4xx",            "type": "Array",            "optional": false,            "field": "err",            "description": "<p>Error object</p>"          }        ]      }    },    "filename": "src/found/api.js",    "groupTitle": "Found"  }] });

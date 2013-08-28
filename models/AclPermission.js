var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AclPermissionSchema = new Schema({
	"id": {
        "type": ObjectId,
        "index": true
    },
	"permission_name": {
        "type": String,
        "required": true,
        "unique": true,
        "lowercase": true,
        "trim": true,
        "index": true
    },
	"is_active": {
		"type": Boolean,
		"required": true,
		"default": false,
        "index": true
	},
	"timestamp_added": {
		"type": Date,
		"default": Date.now,
		"required": false,
        "index": true
	},
	"timestamp_modified": {
		"type": Date,
		"default": Date.now,
		"required": false,
        "index": true
	},
	"timestamp_deactivated": {
		"type": Date,
		"required": false,
        "index": true
	}
}, {
	"autoIndex": false
});

//AclPermissionSchema.index({"permission_name": 1, "is_active": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
module.exports = mongoose.model("AclPermission", AclPermissionSchema);

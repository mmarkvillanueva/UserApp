/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/dxc/test/UserApp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/dxc/test/UserApp/test/integration/pages/Worklist",
	"com/dxc/test/UserApp/test/integration/pages/Object",
	"com/dxc/test/UserApp/test/integration/pages/NotFound",
	"com/dxc/test/UserApp/test/integration/pages/Browser",
	"com/dxc/test/UserApp/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.dxc.test.UserApp.view."
	});

	sap.ui.require([
		"com/dxc/test/UserApp/test/integration/WorklistJourney",
		"com/dxc/test/UserApp/test/integration/ObjectJourney",
		"com/dxc/test/UserApp/test/integration/NavigationJourney",
		"com/dxc/test/UserApp/test/integration/NotFoundJourney",
		"com/dxc/test/UserApp/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
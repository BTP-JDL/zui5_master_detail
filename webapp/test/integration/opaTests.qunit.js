/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"co/com/jdl/zui5_master_detail/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});

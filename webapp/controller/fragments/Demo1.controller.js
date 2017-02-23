sap.ui.define(["be/wl/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(BaseController, JSONModel,MessageToast) {
	"use strict";
	return BaseController.extend("be.wl.controller.fragments.Demo1", {
		onBeforeShow: function(parent, fragment, callback, data) {
			this.parent = parent;
			this.fragment = fragment;
			this.callback = callback;

			var dialogmodel = new JSONModel({
				title: data.title
			});
			this.fragment.setModel(dialogmodel, "ui");

		},
		onEventInFragment:function(evt){
			MessageToast.show("Message triggered from fragment controller");
		},
		onClose: function() {
			this.fragment.close();
			this.callback.call(this.parent);
		}
	});
});
import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $scope) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
    }

    $onInit () {
        addBooleanParameter(this, "disabled", false);
        addBooleanParameter(this, "required");
    }

    _updateIndeterminateState (model) {
        this.checkboxElement.prop("indeterminate", model === null);
    }

    $postLink () {
        addBooleanParameter(this, "required");
        this.checkboxElement = this.$element.find("input");

        // $watch is required because there is no other way
        // to be notified when the value has changed from the
        // outside
        this.$scope.$watch("$ctrl.model", (newValue) =>
            this._updateIndeterminateState(newValue)
        );
    }

}

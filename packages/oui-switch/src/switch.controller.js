import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $scope) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
    }

    $onInit () {
        this.$element.addClass("oui-switch");
        addBooleanParameter(this, "disabled", false);
        addBooleanParameter(this, "required");
    }
}

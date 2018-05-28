
describe("ouiSwitch", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.switch"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject(_TestUtils_ => {
        TestUtils = _TestUtils_;
    }));

    function getSwitchInputElement (element) {
        return element[0].querySelector("input[type=checkbox]");
    }

    function getSwitchDescriptionElement (element) {
        return element[0].querySelector(".oui-switch__description");
    }

    describe("Component", () => {

        describe("input checkbox", () => {
            it("should display a input element", () => {
                const element = TestUtils.compileTemplate("<oui-switch></oui-switch>");
                expect(getSwitchInputElement(element)).toBeTruthy();
            });
        });

        describe("description attribute", () => {
            it("should display the switch's description", () => {
                const element = TestUtils.compileTemplate("<oui-switch description=\"test\"></oui-switch>");

                const descriptionSwitchElement = getSwitchDescriptionElement(element);
                expect(angular.element(descriptionSwitchElement).html()).toBe("test");
            });
        });

        describe("model attribute", () => {
            it("should display an unchecked switch when no model", () => {
                const element = TestUtils.compileTemplate("<oui-switch></oui-switch>");

                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);
                expect($checkboxElement.prop("checked")).toBe(false);
            });

            it("should display a on switch when true", () => {
                const element = TestUtils.compileTemplate("<oui-switch model=\"$ctrl.checked\"></oui-switch>", {
                    checked: true
                });

                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);
                expect($checkboxElement.prop("checked")).toBe(true);
            });

            it("should display a an off switch when false", () => {
                const element = TestUtils.compileTemplate("<oui-switch model=\"$ctrl.checked\"></oui-switch>", {
                    checked: false
                });

                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);
                expect($checkboxElement.prop("checked")).toBe(false);
            });

            it("should be updated when clicked", () => {
                const context = {
                    currentModel: false
                };

                const element = TestUtils.compileTemplate("<oui-switch model=\"$ctrl.currentModel\"></oui-switch>", context);
                const $ctrl = TestUtils.getElementController(element);

                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                $checkboxElement.prop("checked", true);
                $checkboxElement.triggerHandler("click");

                expect($ctrl.currentModel).toBe(true);
            });
        });

        describe("disabled attribute", () => {
            it("should display an active switch when no attribute", () => {
                const element = TestUtils.compileTemplate("<oui-switch></oui-switch>");

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(false);
            });

            it("should display a disabled switch when defined but no value", () => {
                const element = TestUtils.compileTemplate("<oui-switch disabled></oui-switch>");

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(true);
            });

            it("should display a disabled switch when true", () => {
                const element = TestUtils.compileTemplate("<oui-switch disabled=\"$ctrl.disabled\"></oui-switch>", {
                    disabled: true
                });

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("disabled")).toBe(true);
            });
        });

        describe("on-change attribute", () => {
            it("should trigger callback when the switch is clicked", () => {
                const onChangeSpy = jasmine.createSpy("onChangeSpy");

                const element = TestUtils.compileTemplate("<oui-switch on-change=\"$ctrl.onChange(modelValue)\"></oui-switch>", {
                    onChange: onChangeSpy
                });

                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                $checkboxElement.prop("checked", true);
                $checkboxElement.triggerHandler("click");

                expect(onChangeSpy).toHaveBeenCalledWith(true);
            });
        });

        describe("Validation", () => {
            it("should apply a required validation with the required attribute without value", () => {
                const element = TestUtils.compileTemplate("<oui-switch required></oui-switch>");

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("required")).toBe(true);
            });

            it("should apply a required validation with the required attribute when true", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    `, {
                    isRequired: true
                });

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("required")).toBe(true);
            });

            it("should apply a required validation with the required attribute when true", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    `, {
                    isRequired: false
                });

                const checkboxElement = getSwitchInputElement(element);
                expect(angular.element(checkboxElement).prop("required")).toBe(false);
            });

            it("should be done if required attribute is defined", () => {
                const element = TestUtils.compileTemplate(`<form name="form">
                        <oui-switch required="$ctrl.isRequired"></oui-switch>
                    </form>
                    `, {
                    isRequired: true
                });

                const form = element.scope().form;
                const checkboxElement = getSwitchInputElement(element);
                const $checkboxElement = angular.element(checkboxElement);

                expect(form.$valid).toBeFalsy();

                $checkboxElement.prop("checked", true);
                $checkboxElement.triggerHandler("click");
                expect(form.$valid).toBeTruthy();
            });
        });
    });
});

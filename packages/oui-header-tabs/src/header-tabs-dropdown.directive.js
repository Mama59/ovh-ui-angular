import template from "./header-tabs-dropdown.html";

export default () => {
    "ngInject";

    return {
        restrict: "E",
        template,
        replace: true,
        transclude: true,
        scope: {
            text: "@"
        }
    };
};

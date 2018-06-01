import template from "./header-tabs-divider.html";

export default () => {
    "ngInject";

    return {
        restrict: "E",
        template,
        replace: true
    };
};

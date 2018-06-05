import controller from "./tile.controller";
import template from "./tile.html";

export default {
    template,
    controller,
    bindings: {
        title: "@",
        legend: "@?",
        loading: "<?"
    },
    transclude: true
};

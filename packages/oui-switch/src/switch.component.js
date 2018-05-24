import controller from "./switch.controller.js";
import template from "./switch.html";

export default {
    bindings: {
        label: "@?",
        helpText: "@?",
        checked: "<?",
        model: "=?",
        disabled: "<?",
        required: "<?",
        onChange: "&?"
    },
    controller,
    template
};

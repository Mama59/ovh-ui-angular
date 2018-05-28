import controller from "./switch.controller.js";
import template from "./switch.html";

export default {
    bindings: {
        id: "@?",
        name: "@?",
        label: "@?",
        description: "@?",
        checked: "<?",
        model: "=?",
        disabled: "<?",
        required: "<?",
        onChange: "&?"
    },
    controller,
    template
};

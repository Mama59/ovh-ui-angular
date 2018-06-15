import Dropdown from "./dropdown.component.js";
import DropdownContent from "./dropdown-content.directive.js";
import DropdownTrigger from "./dropdown-trigger.directive.js";

export default angular
    .module("oui.dropdown", [])
    .component("ouiDropdown", Dropdown)
    .directive("ouiDropdownContent", DropdownContent)
    .directive("ouiDropdownTrigger", DropdownTrigger)
    .name;

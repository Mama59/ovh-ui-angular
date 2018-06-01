import HeaderTabs from "./header-tabs.component";
import HeaderTabsDivider from "./header-tabs-divider.directive";
import HeaderTabsDropdown from "./header-tabs-dropdown.directive";
import HeaderTabsItem from "./header-tabs-item.component";

angular.module("oui.header-tabs", [])
    .component("ouiHeaderTabs", HeaderTabs)
    .directive("ouiHeaderTabsDivider", HeaderTabsDivider)
    .directive("ouiHeaderTabsDropdown", HeaderTabsDropdown)
    .component("ouiHeaderTabsItem", HeaderTabsItem);

export default class {
    constructor ($attrs, $element, $scope, $timeout, $window) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $onInit () {
        this.scroll = {
            begin: 0,
            end: 0
        };
    }

    $onDestroy () {
        angular.element(this._tabsElement).off("scroll");
        angular.element(this.$window).off("resize");
    }

    $postLink () {
        this._tabsElement = this.$element[0].querySelector(".oui-header-tabs__container");

        this.$timeout(() => {
            angular.element(this._tabsElement).on("scroll", event => this._checkScroll(event));
            angular.element(this.$window).on("resize", event => this._checkScroll(event));
        });

        const initialTimeout = 500;
        this.$timeout(() => {
            this.scroll.end = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth;
        }, initialTimeout);
    }

    scrollToLeft () {
        this._scroll("left");
    }

    scrollToRight () {
        this._scroll("right");
    }

    _checkScroll (e) {
        e.preventDefault();
        this.scroll.begin = this._tabsElement.scrollLeft;
        this.scroll.end = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth - this._tabsElement.scrollLeft;
        this.$scope.$digest();
    }

    _scroll (direction) {
        const tabsList = [].slice.call(this._tabsElement.querySelectorAll(":scope > .oui-header-tabs__item"));
        const tabsStart = this._tabsElement.scrollLeft;
        const tabsEnd = tabsStart + this._tabsElement.offsetWidth;

        let itemGutter = 0;
        if (tabsList && tabsList.length > 1) {
            itemGutter = tabsList[1].offsetLeft - (tabsList[0].offsetLeft + tabsList[0].offsetWidth);
        }

        let itemToGo;
        for (const item of tabsList) {
            if (direction === "right" && item.offsetLeft <= tabsEnd + itemGutter) {
                itemToGo = item;
            } else if (direction === "left" && item.offsetLeft < tabsStart) {
                itemToGo = item;
            } else {
                break;
            }
        }
        this._scrollToItem(direction, itemToGo);
    }

    _scrollToItem (direction, item) {
        const duration = 500;
        const stepDuration = 15;
        const stepMargin = 20;
        const step = this._tabsElement.scrollWidth / (duration / stepDuration);

        const itemStart = item.offsetLeft;
        const itemEnd = itemStart + item.offsetWidth;
        const tabsWidth = this._tabsElement.offsetWidth;

        const interval = setInterval(() => {
            const tabsStart = this._tabsElement.scrollLeft;
            const tabsEnd = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth - this._tabsElement.scrollLeft;
            const screenEnd = tabsStart + this._tabsElement.offsetWidth;

            if (direction === "right" && tabsEnd > 0 && (tabsStart + step < itemStart || itemEnd > screenEnd)) {
                this._tabsElement.scrollLeft += step;
            } else if (direction === "left" && tabsStart > 0 && (screenEnd - step > itemEnd || itemStart < tabsStart - step)) {
                this._tabsElement.scrollLeft -= step;
            } else {
                if (direction === "right") {
                    this._tabsElement.scrollLeft = tabsStart <= itemStart ? itemStart - stepMargin : itemEnd - tabsWidth + stepMargin;
                } else {
                    this._tabsElement.scrollLeft = tabsStart >= itemStart ? itemStart - stepMargin : itemEnd - tabsWidth + stepMargin;
                }
                clearInterval(interval);
            }
        }, stepDuration);
    }
}

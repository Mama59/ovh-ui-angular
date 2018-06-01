# Header tabs

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<div class="oui-doc-preview-only-keep-children">
<oui-header-tabs>
  <oui-header-tabs-item
    text="Home 1"
    href="/#">
  </oui-header-tabs-item>
  <oui-header-tabs-item
    text="Home 1 super long le titre de fou mega long qui depasse"
    href="/#">
  </oui-header-tabs-item>
  <oui-header-tabs-item
    text="Header Tabs 2"
    href="/#!/oui-angular/header-tabs"
    active>
  </oui-header-tabs-item>
  <oui-header-tabs-item
    text="Page Header 3"
    href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
    text="External 4"
    href="https://www.ovh.com/"
    external>
  </oui-header-tabs-item>
  <oui-header-tabs-dropdown
    text="Dropdown 5">
    <oui-header-tabs-item
      text="Home Submenu"
      href="/#">
    </oui-header-tabs-item>
    <oui-header-tabs-item
      text="Header-tabs Submenu"
      href="#!/oui-angular/header-tabs">
    </oui-header-tabs-item>
    <oui-header-tabs-divider></oui-header-tabs-divider>
    <oui-header-tabs-item
      text="Page Header"
      href="/#!/oui-angular/page-header">
    </oui-header-tabs-item>
  </oui-header-tabs-dropdown>
  <oui-header-tabs-item
    text="Page Header 6"
    href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 7"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Heade 8r super long le titre de fou"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 9 "
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 10"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 11"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 12"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 13"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 14"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 15"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
  <oui-header-tabs-item
      text="Page Header 16"
      href="/#!/oui-angular/page-header">
  </oui-header-tabs-item>
</oui-header-tabs>
</div>
```

### With dropdown

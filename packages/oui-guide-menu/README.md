# oui-guide-menu

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
<oui-guide-menu text="Guides">
    <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
    <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
    <oui-guide-menu-divider></oui-guide-menu-divider>
    <oui-guide-menu-item text="External link" href="#" external></oui-guide-menu-item>
</oui-guide-menu>
</div>
```


### Guide with sections

```html:preview
<div class="oui-doc-preview-only-keep-children oui-modal-backdrop"
  style="padding: 80px;">
<oui-guide-menu text="Guides">
    <oui-guide-menu-group label="Section 1">
        <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
        <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
    </oui-guide-menu-group>
    <oui-guide-menu-group label="Section 2">
        <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
        <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
    </oui-guide-menu-group>
    <oui-guide-menu-divider></oui-guide-menu-divider>
    <oui-guide-menu-item text="External link" href="#" external></oui-guide-menu-item>
</oui-guide-menu>
</div>
```

## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| text          | string   | @?      | yes              |                        |           | button guide text                |

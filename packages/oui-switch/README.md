# Switch

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.checked = false">
    <oui-switch id="switch" name="switch-name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        model="$ctrl.checked">
    </oui-switch>
</div>
```

### Disabled

```html:preview
<oui-switch
    model="false"
    disabled>
</oui-switch>
<oui-switch
    model="true"
    disabled>
</oui-switch>
```

### On change

```html:preview
<div class="oui-doc-preview-only" style="margin-bottom: 5px;">
    <oui-switch
      text="Normal"
      model="$ctrl.onChangeValue"
      on-change="$ctrl.lastOnChangeValue = modelValue">
    </oui-switch>
</div>
<span>Last onChange value: {{ $ctrl.lastOnChangeValue }}</span>
```

### Validation in form

```html:preview
<form name="form">
  <div ng-init="$ctrl.agree = false">
    <oui-switch text="agree" model="$ctrl.agree" required></oui-switch>
  </div>
  Is this form valid? : {{ form.$valid ? "yes" : "no" }}
</form>
```

## API

| Attribute     | Type                    | Binding | One-time Binding | Values                   | Default | Description
| ----          | ----                    | ----    | ----             | ----                     | ----    | ----
| description   | string                  | @?      |                  |                          |         | description text
| disabled      | boolean                 | <?      |                  |                          | false   | disabled flag
| id            | string                  | @?      | `true`           |                          |         | id attribute of the switch
| model         | nullable&lt;boolean&gt; | =?      |                  | `true`, `false`          |         | current value of the switch
| name          | string                  | @?      | `true`           |                          |         | name attribute of the switch
| on-change     | function                | &?      |                  |                          |         | handler triggered when value has changed
| required      | boolean                 | <?      |                  |                          | false   | `true` if the switch should be on

# Textarea

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Basic

```html:preview
<div ng-init="$ctrl.checked = false">
    <oui-switch
        help-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        model="$ctrl.checked"
        label="Label">
    </oui-switch>
</div>
```

### Disabled

```html:preview
<oui-switch
    help-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    model="true"
    label="Label"
    disabled>
</oui-switch>
<oui-switch
    help-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    model="false"
    label="Label"
    disabled>
</oui-switch>
```

### On change

```html:preview
<oui-switch
  text="Normal"
  model="$ctrl.onChangeValue"
  on-change="$ctrl.lastOnChangeValue = modelValue">
</oui-switch>

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

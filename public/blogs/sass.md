## SASS

### A flavour to setup color variables with -contrast prefix

```scss
@use "sass:math";

$text-white: #fefefe;
$text-black: #0e0e14;
$colors: (
        "bg-1": #dc2fb8,
        "bg-2": yellow,
);

@function text-contrast($n) {
  $color-brightness: round((red($n) * 299) + (green($n) * 587) + math.div(blue($n) * 114, 1000));
  $light-color: round((red($text-white) * 299) + (green($text-white) * 587) + math.div(blue($text-white) * 114, 1000));

  @if abs($color-brightness) < math.div($light-color,2) {
    @return $text-white;
  } @else {
    @return $text-black;
  }
}


:root {
  @each $name, $color in $colors {
    --#{$name}: #{$color};
    --#{$name}-contrast: #{text-contrast($color)};
  }
}

.component {
  background-color: var(--bg-1);
  color: var(--bg-1-contrast);
}
```

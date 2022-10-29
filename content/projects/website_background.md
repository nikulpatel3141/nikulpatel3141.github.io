---
title: "Animated  Background"
date: 2022-10-29T16:03:31+01:00
description: "How I added an animated background to this website"
---


I used [VantaJS](https://www.vantajs.com/) + a [Hugo partial template](https://gohugo.io/templates/partials/) to add this animated birds background to my website.

Hugo (the static site generator I'm using) allows for extensive customisation. Depending on the theme you're using (I'm using [Blowfish](https://nunocoracao.github.io/blowfish/)) you can add custom HTML to your website using a Hugo template.

## HTML/JS

For my theme all I have to do is create a template file. The HTML contents are easy to populate following the VantaJS documentation:

```html
<!-- templates/partials/extend-head.html -->
<div id="vantajs"></div>

<script src="/js/three.min.js"></script>
<script src="/js/vanta.birds.min.js"></script>
<script>
VANTA.BIRDS({
  el: "#vantajs",
  ...
})
</script>
```

## CSS

There is *some* CSS to add that isn't given on the VantaJS website:

```css
/* assets/css/custom.css; Note: this is specific to my theme */

#vantajs {
  position: fixed;
  z-index: -100;
  opacity: 0.5;
  width: 100%; 
  height: 100%;
  top: 0px;
  left: 0px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

```


## Aside

Below you can see how this is implemented in the theme itself. This makes the setup very flexible since `extend-head.html` is also a template.

```html
<!-- themes/blowfish/layouts/partials/head.html -->
...
{{ if templates.Exists "partials/extend-head.html" }}
{{ partialCached "extend-head.html" .Site }}
{{ end }}
...
```

## TODO

The CPU usage is quite high for this animation by default since there are many birds and calls to `window.requestAnimationFrame()`. There are probably workarounds for this, eg limit the number of birds/animations per second.

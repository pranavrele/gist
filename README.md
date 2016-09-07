# Gist: vCard Theme

Welcome to Gist, a simple vCard Theme. Gist is designed to be a central hub for individuals who maintain portfolios and/or blogs  that are decoupled from their central site. 

![Preview Image](http://pranavrele.github.io/gist/src/img/demo.png)

[Live Demo](http://pranavrele.github.io/gist/)

## Get Started

Note1: Use the index.html within the src directory. The index.html outside of src is for demo purposes only. 

Note2: For demo purposes all css and javascript has been minified. However, the full expanded versions are provided within the src directory to be processed however you’d like. 

### Setting Profile Image

To set profile image find the following within the <body> of index.html:

```html
<div class=“profile-image”>
	<img src=“img/profile.png” alt=“”>
</div>
```

Add your profile picture to the img folder. Then either rename it "profile.png" or change the path in the code you found above. It is best to use .png as the extension for circular images as it provides transparent space around the image whereas .jpg will color transparent pixels white.

### Setting Background Image

Add the image you would like to the img folder. Then either rename the image to “background.jpg” or change the file path. The .jpg extension works best here in order to keep file sizes smaller and ensure faster load times.

#### SCSS Method

To set the background image find the following block within: scss/5-base/_layout-base.scss

```css
body {
	background: url(../img/background.jpg) no-repeat center center fixed;
	@include background-size(cover);
}
```

#### CSS Method

To set the background image find the following block within: css/gist.css

```css
body {
  background: url(../img/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
```

### Setting Up Social Sphere

#### Set Links and Icons

First find the following within index.html:

```html
<div class=“social-media”>
```

To change the icon find the third i class in each stack and modify the icon used.

The icon pack used is [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/). Consult the link provided to see what's available.

#### Change Icon Colors

##### SCSS Method

To edit icon colors go to scss/5-base/_layout-base.scss. Find the following:

```css
	/* North */
	.social-n {
		.icon-color {
			@include link-color($gist-red, $gist-light-gray);
		}
	}
	
	/* North West */
	.social-nw {
		.icon-color {
			@include link-color($gist-dark-gray, $gist-light-gray);
		}
	}
	
	/* West */
	.social-w {
		.icon-color {
			@include link-color($gist-light-blue, $gist-light-gray);
		}
	}
	
	/* South West */
	.social-sw {
		.icon-color {
			@include link-color($gist-pink, $gist-light-gray);
		}
	}
	
	/* South */
	.social-s {
		.icon-color {
			@include link-color($gist-blue, $gist-light-gray);
		}
	}
	
	/* South East */
	.social-se {
		.icon-color {
			@include link-color($gist-green, $gist-light-gray);
		}
	}
```

When changing colors either pass a hex value where the current value sits or add the color as a variable in scss/5-base/_variables.scss. Then reference the variable. 

##### CSS Method

To edit icon colors go to css/gist.css. Find the following:

```css
.social-media .social-n .icon-color {
    color: #b72411; }
    .social-media .social-n .icon-color:active, .social-media .social-n .icon-color:focus, .social-media .social-n .icon-color:hover {
      color: #eee; }
.social-media .social-nw .icon-color {
    color: #212121; }
    .social-media .social-nw .icon-color:active, .social-media .social-nw .icon-color:focus, .social-media .social-nw .icon-color:hover {
      color: #eee; }
.social-media .social-w .icon-color {
    color: #32c8de; }
    .social-media .social-w .icon-color:active, .social-media .social-w .icon-color:focus, .social-media .social-w .icon-color:hover {
      color: #eee; }
.social-media .social-sw .icon-color {
    color: #ff61e7; }
    .social-media .social-sw .icon-color:active, .social-media .social-sw .icon-color:focus, .social-media .social-sw .icon-color:hover {
      color: #eee; }
.social-media .social-s .icon-color {
    color: #2196F3; }
    .social-media .social-s .icon-color:active, .social-media .social-s .icon-color:focus, .social-media .social-s .icon-color:hover {
      color: #eee; }
.social-media .social-se .icon-color {
    color: #51d466; }
    .social-media .social-se .icon-color:active, .social-media .social-se .icon-color:focus, .social-media .social-se .icon-color:hover {
      color: #eee; }
```

## Contact Me

If there are any bugs found or would like to request new additions please feel free to send me an [Email](mailto:pranavrele@gmail.com) or send me a message via [Twitter](https://twitter.com/pranavrele).

Feel free to fork this repo and use this as a starting point. Enjoy.

## Thank You

Many thanks to the folks over at [Unsplash](https://unsplash.com) for providing free to use high resolution photos.

## Change Log

### Version 1.0

- Shifted from Bootstrap to Bourbon Neat grid system
- Schema changed to Bottom-Up
- Added Sass support
- Added Profile Name to top to clear up Profile Image
- Added CTA section prior to footer
- Corrected Mobile and Tablet misalignment issues

### Version 0.2

- Added custom button for Unsplash
- Fixed alignment issues with devices in 1024px range

### Version 0.1

- Initial Commit
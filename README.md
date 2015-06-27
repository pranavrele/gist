# Gist: vCard Theme

Welcome to Gist: a simple Bootstrap vCard Theme.

![Preview Image](http://pranavrele.github.io/gist/img/preview.png)

[Live Demo](http://pranavrele.github.io/gist/)

Many thanks to the folks over at [Unsplash](https://unsplash.com) for providing free to use high resolution photos.

## Get Started

### Setting Profile Image

To set profile image find the following within the <body> of index.html:

```html
<!-- Profile Picture - Alter the src path to the approriate file -->
<img class="img-responsive" src="/img/profile.png" alt="">
<!-- Name -->
<h3>Lorem Ipsum</h3>
```

Add your profile picture to the img folder. Then either rename it "profile.png" or change the path in the code you found above. It is best to use .png as the extension for circular images as it provides transparent space around the image whereas .jpg will color transparent pixels white.

There is also an h3-tag underneath. Change it to your name. No need to use all caps as the CSS will handle that. 

### Setting Background Image

To set the background image find the body settings within gist.css:

```css
background-image: url('/img/background.jpg'); /* Insert Background Image */
```

Next add the image you would like to the img folder. Then either rename the image to "background.jpg" or change the file path. The .jpg extension works best here in order to keep file sizes smaller and ensure faster load times.


### Setting Up Social Sphere

To alter the social network satellites around your profile image find the following within index.html:

```html
<div class="orbital">
```
In the current setup the satellites are placed within a semi-circle. To change satellite placement change the name of a given satellite anywhere from s-one to s-eight. The same procedure should be used to add more satellites using the existing "a class="satellites s-number" format as shown below:

```html
<a class="satellites s-three" data-toggle="tooltip" data-placement="bottom" title="Download Theme" href="https://github.com/pranavrele/gist">
```

There is no need to alter the CSS as it is already done for all 8 possible satellites. To figure out which number satellites corresponds to which position find the following within gist.css:

```css
/* CSS for all 8 possible satellites is provided in the event it is preferred or if orientation of the user image is to be changed */
.main .orbital .satellites.s-one { top: 0%; right: 50%; margin-right: -25px } /* North */
.main .orbital .satellites.s-two { top: 50%; right: 0%; margin-right: -25px } /* East */
.main .orbital .satellites.s-three { top: 100%; right: 50%; margin-right: -25px } /* South */
.main .orbital .satellites.s-four { top: 50%; left: 0%; margin-left: -25px } /* West */
.main .orbital .satellites.s-five { top: 85%; right: 14%; margin-right: -25px } /* South East */
.main .orbital .satellites.s-six { top: 15%; right: 14%; margin-right: -25px } /* North East */
.main .orbital .satellites.s-seven { top: 15%; left: 14%; margin-left: -25px } /* North West */
.main .orbital .satellites.s-eight { top: 85%; left: 14%; margin-left: -25px } /* South West */
```

The icon pack used is [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/). Consult the link provided to see what's available.

Each social network has a custom button color scheme associated with it. When changing the icon for a given social network also change the name of the button within the same i-class to reflect the appropriate color scheme as such:

```html
<i class="fa fa-twitter btn-twitter"></i>
``` 

If a social network of your choice is missing a custom color scheme, please feel free to send me an [Email](mailto:pranavrele@gmail.com) or message me via [Twitter](https://twitter.com/pranavrele).

### Setting Up Animations

Animations are derived from [animate.css](https://daneden.github.io/animate.css/). Consult the link provided to see what's available. To implement animations find the following lines within index.html:

Profile Picture:
```html
<div class="col-md-4 animated fadeInLeft">
```

Description:
```html
<div class="col-md-8 col-sm-12 col-xs-12 animated fadeInRight">
```

Footer:
```html
<footer class="footer animated fadeInUp">
```

## Contact Me

If there are any bugs found or would like to request new additions please feel free to send me an [Email](mailto:pranavrele@gmail.com) or send me a message via [Twitter](https://twitter.com/pranavrele).

Feel free to fork this repo and use this as a starting point. Enjoy.

## Change Log

### Version 0.2

- Added custom button for Unsplash
- Fixed alignment issues with devices in 1024px range

### Version 0.1

- Initial Commit  
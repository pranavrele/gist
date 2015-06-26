# Gist: vCard Theme

Welcome to Gist

## Get Started

### Setting Profile Image

To set profile image find the following within the <body>  index.html:

```html
<!-- Profile Picture - Alter the src path to the approriate file -->
<img class="img-responsive" src="/img/profile.png" alt="">
<!-- Name -->
<h3>Lorem Ipsum</h3>
```

Add your profile picture to the img folder. Then either rename it "profile.png" or change the path in the code you found above. It is best to use .png as the extension for circular images as it provides transparent space around the image whereas .jpg will color transparent pixels white.

There is also an <h3> tag underneath. Change it to your name. No need to use all caps as the CSS will handle that. 

### Setting Background Image

To set the background image find the body settings within gist.css:

```css
background-image: url('/img/background.jpg'); /* Insert Background Image */
```

Next add the image you would like to the img folder. Then either rename the image to "background.jpg" or change the file path. The .jpg extension works best here in order to keep file sizes smaller and ensure faster load times.
 
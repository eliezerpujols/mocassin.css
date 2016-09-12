# Mocassin.css

Mocassin.css is a responsive collection of hover effects for Captions, powered by [Sass](http://sass-lang.com/). Each caption is adapt the size of the image.

## Installation

The production code is inside of `dist` folder, you can install it via npm:
```
Wait please
```

Or via Bower:
```
Wait please
```

## Basic Usage

1. Include the stylesheet on your document's:

	Non-responsive file:

	```html
	<head>
		...
		<link rel="stylesheet" href="css/mocassin.css"> <!-- Or *.min.css -->
		...
	</head>
	```

	Responsive file (The caption does not hide in small screen):

	```html
	<head>
		...
		<link rel="stylesheet" href="css/mocassin-r.css"> <!-- Or *.min.css -->
		...
	</head>
	```

	For touch event on touch screens, add:

	```html
	<body>
		...
		...		
		<script src="js/mocassin.js"></script> <!-- Or *.min.js -->
	</body>
	```

2. Add class `mc-item` to the main, `mc-item__image` to the `<img ...>` element, and `mc-item__caption` to the content caption.
	Example:

	```html
	<figure class="mc-item">
		<img class="mc-item__image" src="..." alt="...">
		<figcaption class="mc-item__caption">
			<h3>This is my content!</h3>
		</figcaption>
	</figure>
	```

3. Finally you need to add one of the following class:

	* fadeIn Caption
		* `mc-item--fadeIn`
	* Sliding Caption and Image
		* `mc-item--slideInUp`
		* `mc-item--slideInDown`
		* `mc-item--slideInUpBig`
		* `mc-item--slideInDownBig`
	* Sliding Caption and ScaleIn Image
		* `mc-item--slideInUp-zoomIn`
		* `mc-item--slideInDown-zoomIn`
		* `mc-item--slideInUpBig-zoomIn`
		* `mc-item--slideInDownBig-zoomIn`
	* ScaleOut Image
		* `mc-item--scaleOut`
		* `mc-item--scaleOutUp`
		* `mc-item--scaleOutDown`
	* Sliding Caption and ScaleOut Image
		* `mc-item--slideInUpBig-zoomOut`
		* `mc-item--slideInDownBig-zoomOut`
		* `mc-item--slideInLeftBig-zoomOut`
		* `mc-item--slideInRightBig-zoomOut`
	* Sliding Caption and Image to the 50% (Half)
		* `mc-item--slideInLeftHalf`
		* `mc-item--slideInRightHalf`
	* Flip Out Caption
		* `mc-item--flipOutUp`
		* `mc-item--flipOutDown`
		* `mc-item--flipOutLeft`
		* `mc-item--flipOutRight`

	Example:
	```html
	<figure class="mc-item mc-item--zoomOut">
		<img class="mc-item__image" src="..." alt="...">
		<figcaption class="mc-item__caption">
			<h3>This is my content!</h3>
		</figcaption>
	</figure>
	```

## Custom Builds

Mocassin.css is powered by [Gulp](http://gulpjs.com/), and you can create custom builds. First you'll need Gulp and other dependencies:

```bash
$ cd path/to/mocassin.css/
$ sudo npm install
```

Now, you can eliminate in `mocassin.scss` or `mocassin-r.scss` those effects that do not want, and then run with:

```bash
$ gulp createCSS
```

## Contributing

I only have three rules for submitting a pull request: 1- match the naming convention: [BEM](https://en.bem.info/methodology/), 2- and let us see a demo of submitted effects in CodePen, 3- The PR must aim to `develop` branch and not to `master` branch. The branch of the feature must be started as `feature/feature-name` .

## License

Mocassin.css is licensed under the [MIT](http://opensource.org/licenses/MIT) license.

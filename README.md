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

	* `mc-item--effect-1`
	* `mc-item--effect-2`
		* `mc-item--effect-2b`
		* `mc-item--effect-2c`
		* `mc-item--effect-2d`
	* `mc-item--effect-3`
		* `mc-item--effect-3b`
		* `mc-item--effect-3c`
		* `mc-item--effect-3d`
	* `mc-item--effect-4`
		* `mc-item--effect-4b`
		* `mc-item--effect-4c`
	* `mc-item--effect-5`
		* `mc-item--effect-5b`
		* `mc-item--effect-5c`
		* `mc-item--effect-5d`
	* `mc-item--effect-6`
		* `mc-item--effect-6b`

	Example:
	```
	<figure class="mc-item mc-item--effect-2b">
		<img class="mc-item__image" src="..." alt="...">
		<figcaption class="mc-item__caption">
			<h3>This is my content!</h3>
		</figcaption>
	</figure>
	```

## Custom Builds

Mocassin.css is powered by [Gulp](http://gulpjs.com/), and you can create custom buils. First you'll need Gulp and other dependencies:

```bash
$ cd path/to/mocassin.css/
$ sudo npm install
```

Now, you can eliminate in `mocassin.scss` or `mocassin-r.scss` those effects that do not want, and then run with:

```bash
$ gulp createCSS
```

## Contributing

I only have two rules for submitting a pull request: match the naming convention: [BEM](https://en.bem.info/methodology/), and let us see a demo of submitted effects in CodePen.

## License

Mocassin.css is licensed under the [MIT](http://opensource.org/licenses/MIT) license.

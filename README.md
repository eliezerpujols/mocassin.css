# Mocassin.css
Mocassin.css is a collection of hover effects for Captions, powered by [Sass](http://sass-lang.com/).

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
	Responsive file:
	```
	<head>
		...
		<link rel="stylesheet" href="mocassin.css"> <!-- Or *.min.css -->
		...
	</head>
	```
	Non-responsive file:
	```
	<head>
		...
		<link rel="stylesheet" href="mocassin-nr.css"> <!-- Or *.min.css -->
		...
	</head>
	```
	Or use version hosted by CDNJS:
	```
	Wait please
	```

2. Add class `mc-item` to the main, `mc-item__image` to the `<img ...>` element, and `mc-item__caption` to the content caption.
	Example:
	```
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
`$ cd path/to/mocassin.css/`
`$ sudo npm install`

Now, you can eliminate in `mocassin.scss` or `mocassin-nr.scss` those effects that do not want, and then run with:
`$ gulp createCSS`

## Contributing 
I only have two rules for submitting a pull request: match the naming convention: [BEM](https://en.bem.info/methodology/), and let us see a demo of submitted effects in CodePen.

## Lisence
Mocassin.css is licensed under the [MIT](http://opensource.org/licenses/MIT) license.
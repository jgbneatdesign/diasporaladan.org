var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix
	// .copy('vendor/bower/angular/angular.js', 'resources/assets/js/angular.js')
 //        	.copy('vendor/bower/jquery/dist/jquery.min.js', 'resources/assets/js/jquery.js')

        // .less(['bootstrap.less', 'app.less'])
        .styles([
        		'bootstrap.min.css',
        		'animate.css',
        		'lightbox.min.css',
        		'main.css'])

        .scripts([
        		'jquery.js',
        		'angular.min.js',
        		'angular-animate.min.js',
        		'bootstrap.min.js',
        		'jquery.easing.js',
        		'lightbox.min.js',
        		'form.js',
                 'counter.js',
                 'services.js',
        		'app.js'])

        .version(['css/all.css', 'js/all.js'])
});
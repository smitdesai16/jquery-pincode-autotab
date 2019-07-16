/*
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your Laravel application. By default, we are compiling the Less
| file for our application, as well as publishing vendor resources.
|
| Documentation and install instructions available here: https://laravel.com/docs/5.2/elixir#installation 
*/


var elixir = require('laravel-elixir');

/* Update path to compiled assets */
elixir.config.publicPath = 'dist/';

/* Update path to pre-compiled assets*/
elixir.config.assetsPath = 'src/';

/* Update autoprefix settings */
elixir.config.css.autoprefix.options.browsers.push("last 5 versions");

elixir(function(mix) {
    mix.sass('jquery-pincode-autotab.scss', 'dist/css/jquery-pincode-autotab.min.css');
    mix.scripts('src/js/jquery-pincode-autotab.js', 'dist/js/jquery-pincode-autotab.min.js');
});
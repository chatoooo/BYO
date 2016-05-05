var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');


gulp.task('default', ['webpack', 'static']);

gulp.task('static', function() {
    return gulp.src(['static/**/*'])
       .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function(callback) {
    webpack(webpackConfig, function(err, stats){
        gutil.log(stats.toString());
        callback();
    } )
});

gulp.task('serve', ['static','webpack'], function(callback) {
    var compiler = webpack(webpackConfig);
    var server = new webpackDevServer(compiler,{
        contentBase: './dist',
        hot: true,
        quiet: false,
        noInfo: false,
        stats:{
            colors: true
        },
        publicPath: "/"
    });
    server.listen(8000, '0.0.0.0');
});

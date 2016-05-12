import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';


gulp.task('default', ['webpack', 'static']);

gulp.task('static', () => {
    return gulp.src(['static/**/*'])
       .pipe(gulp.dest('dist'));
});

gulp.task('webpack', (callback) => {
    webpack(webpackConfig, (err, stats) => {
        gutil.log(stats.toString());
        callback();
    } )
});

gulp.task('serve', ['static','webpack'], (callback) => {
    const compiler = webpack(webpackConfig);
    const server = new webpackDevServer(compiler,{
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

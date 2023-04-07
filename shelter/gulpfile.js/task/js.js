const webpack = require('webpack-stream'); // bundling js modules
const merge = require('merge-stream');

// js processing
const js = () => {
    var tasks = $.path.pages.map(page => {
        return $.gulp.src($.path.js.srcPages + page + '/*.js', {sourcemaps: $.app.isDev})
        .pipe($.gp.babel()) // use the latest features of java script
        .pipe(webpack($.app.webpack)) // bundling js modules 
        // .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
        // .pipe(rename({suffix: ".min"}))
        // .pipe(uglify()) // min js file
        .pipe($.gulp.dest($.path.js.destPages + page, {sourcemaps: $.app.isDev}));
    })
    return merge(tasks);
}


module.exports = js;
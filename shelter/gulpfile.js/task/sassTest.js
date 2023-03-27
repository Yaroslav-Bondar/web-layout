merge = require('merge-stream');
// plugins
const sassPrepros = require('gulp-sass')(require('sass'));

let folders = ['main', 'pets'];

const sassTest = () => {
  let tasks = folders.map(element => {
    // , { base: './src/html/' }
    return $.gulp.src('./src/sass/pages/' + element + '/*.{sass,scss}')
        // ... other steps ...
        .pipe($.gp.sassGlob()) // import $.path masks
        .pipe(sassPrepros())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand()) // shortening css properties
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({title: 'main.scss before compression'}))
        .pipe($.gulp.dest('./public/pages/' + element + '/styles', {sourcemaps: $.app.isDev}))
        .pipe($.gp.rename({suffix: ".min"}))
        .pipe($.gp.csso())
        .pipe($.gp.size({title: 'main.scss after compression'}))
        .pipe($.gulp.dest('./public/pages/' + element + '/styles',  {sourcemaps: $.app.isDev}));
    });

    let common = $.gulp.src('./src/sass/common/*.{sass,scss}')
    // ... other steps ...
    .pipe($.gp.sassGlob()) // import $.path masks
    .pipe(sassPrepros())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand()) // shortening css properties
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({title: 'main.scss before compression'}))
    .pipe($.gulp.dest('./public/common/styles', {sourcemaps: $.app.isDev}))
    .pipe($.gp.rename({suffix: ".min"}))
    .pipe($.gp.csso())
    .pipe($.gp.size({title: 'main.scss after compression'}))
    .pipe($.gulp.dest('./public/common/styles', {sourcemaps: $.app.isDev}));

    return merge(tasks, common);
}

module.exports = sassTest;

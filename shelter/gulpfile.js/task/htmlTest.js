var 
// path = require('path'),
merge = require('merge-stream');

var folders = ['pets'];

const htmlTest = () => {
    var tasks = folders.map(element => {
        // , { base: './src/html/' }
        return $.gulp.src('./src/html/pages/' + element + '/*.html')
            // ... other steps ...
            .pipe($.gp.fileInclude())
            .pipe($.gp.webpHtml()) // to select image type in html (source srcset=)
            .pipe($.gp.size({title: 'before compression'}))
            .pipe($.gp.if($.app.isProd, $.gp.htmlmin($.app.htmlmin))) //  launch of the plugin depending on the condition
            .pipe($.gp.size({title: 'after compression'}))
            // .pipe($.gulp.dest($.path.html.dest + '/pages/'))
            .pipe($.gulp.dest('./public/pages/' + element));
    });
    let root = $.gulp.src('./src/html/main/*.html')
    .pipe($.gp.fileInclude())
    .pipe($.gp.webpHtml()) // to select image type in html (source srcset=)
    .pipe($.gp.size({title: 'before compression'}))
    .pipe($.gp.if($.app.isProd, $.gp.htmlmin($.app.htmlmin))) //  launch of the plugin depending on the condition
    .pipe($.gp.size({title: 'after compression'}))
    .pipe($.gulp.dest($.path.html.dest))
    
    return merge(tasks, root);
};

module.exports = htmlTest;
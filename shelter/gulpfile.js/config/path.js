const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,

    pages: ['main', 'pets'],

    html: {
        src: pathSrc + '/html/pages/',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest + '/pages/',
    },

    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest,
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css',
    },

    sass: {
        src: pathSrc + '/sass/pages/',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/pages/',
    },

    js: {
        src: pathSrc + '/js/*.js',
        srcPages: pathSrc + '/js/pages/',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js',
        destPages: pathDest + '/pages/',
    },

    img: {
        src: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/assets/img',
    },

    font: {
        src: pathSrc + "/assets/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/assets/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/assets/font",
    },
}
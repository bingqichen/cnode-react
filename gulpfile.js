const gulp = require('gulp');
const babel = require('gulp-babel');
const replace = require('gulp-replace');

// transform ES6 & JSX
gulp.task('default', () => (
  gulp.src([
    './src/**/*.js'
  ])
    .pipe(babel({
      babelrc: false,
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-runtime',
        [
          'babel-plugin-root-import',
          [
            {
              rootPathPrefix: '~',
              rootPathSuffix: 'src/components'
            }
          ]
        ]
      ]
    }))
    .pipe(replace(/(.*?)require\(.+?\.less.*?\);?(.*?)/gm, '$1$2'))
    .pipe(gulp.dest('server/front'))
));

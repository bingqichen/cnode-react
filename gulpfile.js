const gulp = require('gulp');
const babel = require('gulp-babel');
const through2 = require('through2');

const removeLess = through2.obj((file, enc, cb) => {
  if (file.isNull()) {
    cb(null, file);
  }
  try {
    if (file.isBuffer()) {
      const con = file.contents.toString();
      let con2 = con.replace(/require.*?.less.*/g, '');
      file.contents = new Buffer(con2);
    }
  } catch (e) {
    console.log('ee:', e);
  }
  cb(null, file);
});

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
    .pipe(removeLess)
    .pipe(gulp.dest('server/front'))
));

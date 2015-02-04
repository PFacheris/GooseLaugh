path        = require 'path'
gulp        = require 'gulp'
gutil       = require 'gulp-util'
jade        = require 'gulp-jade'
stylus      = require 'gulp-stylus'
CSSmin      = require 'gulp-minify-css'
browserify  = require 'browserify'
watchify    = require 'watchify'
source      = require 'vinyl-source-stream'
streamify   = require 'gulp-streamify'
rename      = require 'gulp-rename'
uglify      = require 'gulp-uglify'
coffeeify   = require 'coffeeify'
ecstatic    = require 'ecstatic'
plumber     = require 'gulp-plumber'
prefix      = require 'gulp-autoprefixer'
usemin      = require 'gulp-usemin'
wiredep     = require('wiredep').stream
runSequence = require 'run-sequence'
rimraf      = require 'gulp-rimraf'
connect     = require 'gulp-connect'
modRewrite  = require 'connect-modrewrite'
deploy      = require 'gulp-gh-pages'

production = process.env.NODE_ENV is 'production'

paths =
  scripts:
    source: ['./src/coffee/main.coffee']
    watch: './src/coffee/*.coffee'
    destination: './dist/scripts/'
    filename: 'main.js'
  templates:
    source: './src/jade/index.jade'
    watch: './src/jade/*.jade'
    destination: './dist/'
  styles:
    source: './src/stylus/application.styl'
    watch: './src/stylus/*.styl'
    destination: './dist/styles/'
  assets:
    source: './src/assets/**/*'
    watch: './src/assets/**/*'
    destination: './dist/'

handleError = (err) ->
  gutil.log err
  gutil.beep()
  this.emit 'end'

gulp.task 'clean', ->
  # much faster
  pipeline = gulp
    .src './dist', read: false
    .pipe rimraf()


gulp.task 'coffee', ->

  bundle = browserify
    entries: [paths.scripts.source]
    extensions: ['.coffee']

  build = bundle.bundle(debug: not production)
    .on 'error', handleError
    .pipe source paths.scripts.filename

  build
    .pipe gulp.dest paths.scripts.destination

gulp.task 'jade', ->
  pipeline = gulp
    .src paths.templates.source
    .pipe(jade(pretty: not production))
    .on 'error', handleError
    .pipe gulp.dest paths.templates.destination

  pipeline

gulp.task 'usemin', ->
  pipeline = gulp
    .src paths.templates.destination
    .pipe(usemin(
      assetsDir: 'src'
      css: [CSSmin()]
      html: []
      js: [uglify()]
    ))
    .on 'error', handleError

  pipeline

gulp.task 'stylus', ->
  styles = gulp
    .src paths.styles.source
    .pipe(stylus({set: ['include css']}))
    .on 'error', handleError
    .pipe prefix 'last 2 versions', 'Chrome 34', 'Firefox 28', 'iOS 7'

  styles = styles.pipe gulp.dest paths.styles.destination
  styles

gulp.task 'assets', ->
  gulp
    .src paths.assets.source
    .pipe gulp.dest paths.assets.destination

gulp.task 'bower', ->
  gulp
    .src('src/layout.jade')
    .pipe(wiredep(
      directory: './bower_components'
    ))
    .pipe(gulp.dest('src'))

gulp.task 'connect', ->
  connect.server
    root: 'dist'
    livereload: false
    middleware: (connect) ->
      [
        modRewrite ['!\\.html|\\.js|\\.css|\\.png|\\.webm|\\.mp4$ /index.html [L]']
        connect().use(
          '/bower_components',
          connect.static('./bower_components')
        )
        connect.static('src')
      ]

gulp.task "watch", ->
  gulp.watch paths.templates.watch, ['jade']
  gulp.watch paths.scripts.watch, ['coffee']
  gulp.watch paths.styles.watch, ['stylus']
  gulp.watch paths.assets.watch, ['assets']

gulp.task 'build', ->
  if production
    runSequence 'clean', 'bower', ['jade', 'stylus', 'coffee', 'assets'], 'usemin'
  else
    runSequence 'clean', 'bower', ['jade', 'stylus', 'coffee', 'assets']

gulp.task 'deploy', ->
  gulp.src('./dist/**/*').pipe deploy()

gulp.task 'default', ->
  runSequence 'build', ['connect', 'watch']

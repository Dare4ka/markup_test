var gulp       = require('gulp'), //  Gulp
	sass         = require('gulp-sass'), //Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	rename       = require('gulp-rename'), //  для переименования файлов
	autoprefixer = require('gulp-autoprefixer');//  для автоматического добавления префиксов

gulp.task('sass', function(){ 
	return gulp.src(['app/sass/**/*.sass','app/sass/**/*.scss']) 
		.pipe(sass({outputStyle: 'expanded'})) 
		.pipe(autoprefixer(['last 20 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
		.pipe(gulp.dest('app/css')) 
		.pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: 'app' 
		},
		notify: false 
	});
});

gulp.task('scripts', function() {
	return gulp.src('app/libs/jquery-3.3.1.slim.min.js')
		.pipe(gulp.dest('app/js')); 
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {
	gulp.watch('app/sass/**/*.scss', ['sass']); 
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

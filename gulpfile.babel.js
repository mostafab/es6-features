'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    
    console.log(`Transpiling at ${new Date()}`);
    
    const b = babel();
    
    b.on('error', (err) => {
        console.log(err.message);        
    });
    
    gulp.src(['js/es6/*.js'])
    .pipe(b)
    .pipe(gulp.dest('js/build'));
    
});

gulp.task('watch', () => {
   gulp.watch('./js/es6/*.js', ['babel']); 
});

gulp.task('default', ['watch']);
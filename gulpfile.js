const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const spriter = require("gulp-css-spriter");
const jade = require("gulp-jade");
const htmlBeautify = require("gulp-html-beautify");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const cache = require("gulp-cache");
const gutil = require("gulp-util");
const plumber = require("gulp-plumber");
const del = require("del");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;


const pathConfig = {
	"dist": 		"./dist",
	"sass": 		"./src/sass",
	"css": 			"./src/css",
	"jade": 		"./src/jade",
	"html": 		"./src/html",
	"img": 			"./src/img",
	"fonts": 		"./src/fonts"
};

// SASS任务
gulp.task("sass", function () {
	return gulp.src(`${pathConfig.sass}/*.scss`)
				.pipe(plumber())
				.pipe(sass({
					outputStyle: "expanded"
				}).on("error", gutil.log).on("error", gutil.beep))
				.pipe(spriter({
					"spriteSheet": `${pathConfig.dist}/static/img/sprite.png`,
					"pathToSpriteSheetFromCSS": "../img/sprite.png"
				}))
				.pipe(autoprefixer({
					browsers: ["last 4 versions", "> 5%", "IE >= 8"],
					cascade: true,
					remove: true
				}))
				.pipe(gulp.dest(`${pathConfig.css}`));
});

// CSS移动任务
gulp.task("css", ["sass"], function () {
	return gulp.src(`${pathConfig.css}/**/*.css`)
				.pipe(gulp.dest(`${pathConfig.dist}/static/css`));
});



// JADE模板编译
gulp.task("jade", function () {
	return gulp.src(`${pathConfig.jade}/*.jade`)
				.pipe(plumber())
				.pipe(jade({
					pretty: true
				}).on("error", gutil.log).on("error", gutil.beep))
				.pipe(htmlBeautify({
					indent_size: 4,
					indent_char: " ",
					unformatted: true,
					extra_liners: []
				}))
				.pipe(gulp.dest(`${pathConfig.html}`));
});

// HTML移动任务
gulp.task("html", ["jade"], function () {
	return gulp.src(`${pathConfig.html}/*.html`)
				.pipe(gulp.dest(`${pathConfig.dist}`));
});



// IMG图片压缩移动任务
gulp.task("img", function () {
	return gulp.src([`!${pathConfig.img}/spriter/*.{png,jpg,gif,ico}`, `${pathConfig.img}/**/*.{png,jpg,gif,ico}`])
				.pipe(plumber())
				.pipe(cache(imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
				})))
				.pipe(gulp.dest(`${pathConfig.dist}/static/img`));
});



// FONT字体移动任务
gulp.task("fonts", function () {
	return gulp.src(`${pathConfig.fonts}/**/*`)
				.pipe(gulp.dest(`${pathConfig.dist}/static/fonts`));
});



// 删除任务
gulp.task("clean", function (cb) {
	return del([`${pathConfig.dist}`], {
		force: true
	}, cb);
});



// 监控文件任务
gulp.task("watch", function () {
	gulp.watch(`${pathConfig.sass}/**.*.scss`, ["sass"]);
	gulp.watch(`${pathConfig.css}/**/*.css`, ["css"]);
	gulp.watch(`${pathConfig.img}/**/*.{png,jpg,gif,ico}`, ["img"]);
	gulp.watch(`${pathConfig.fonts}/**/*`, ["fonts"]);
	gulp.watch(`${pathConfig.jade}/*.jade`, ["jade"]);
	gulp.watch(`${pathConfig.html}/*.html`, ["html"]);
});



// 服务运行任务
gulp.task("server", function () {
	browserSync.init({
		files: ["**"],
		server: {
			baseDir: "dist",						// 设置服务器的根目录
			index: "person.html"						// 指定默认打开的文件
		},
		port: 3000,									// 指定访问服务器的端口号
		injectChanges: true							// 注入CSS改变
	});

	// 监听文件变化，执行相应任务

	gulp.watch(`${pathConfig.sass}/**/*.scss`, ["sass"]);
	gulp.watch(`${pathConfig.css}/**/*.css`, ["css"]);
	gulp.watch(`${pathConfig.img}/**/*.{png,jpg,gif,ico}`, ["img"]);
	gulp.watch(`${pathConfig.fonts}/**/*`, ["fonts"]);
	gulp.watch(`${pathConfig.jade}/**/*.jade`, ["jade"]);
	gulp.watch(`${pathConfig.html}/*.html`, ["html"]).on("change", reload);

});

gulp.task("default", ["clean"], function () {
	gulp.start("css", "html", "img", "fonts", "server");
});


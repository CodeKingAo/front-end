// vue cli_3 config by wangyong
module.exports = {
	publicPath: "./", //root
	outputDir: "dist", //root name
	assetsDir: "source", //source name
	lintOnSave: false, // close esLint
	productionSourceMap: false, //close SourceMap
	devServer: {
		open: true,
		port: 8878
	},
	transpileDependencies: [
		'vue-echarts',
		'resize-detector'
	]
};
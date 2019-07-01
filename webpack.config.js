path = require('path');
webpack = require("webpack");
HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: [
	'./src/main.ts','bootstrap'
  ],  
  resolve: {
	extensions: ['.ts', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
        rules: [
	{
		test: /\.html$/,
		loader: 'html-loader'
	},
	{
        test: /\.(json|png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|cur)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
    },
	{
		test: /\.(scss|sass)$/,
		use: [
			'to-string-loader',
			{ 
				loader: 'css-loader', 
				options: { 
					sourceMap: true 
				} 
			},
			{
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
			{ 
				loader: 'sass-loader', 
				options: { 
					sourceMap: true 
				} 
			}			
		],
		include: path.resolve(__dirname, './src/app')
	},
	{ test: /\.css$/, use: ['to-string-loader','style-loader','css-loader'] },
	{
		test: /\.ts$/,
		use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
	},
	{
		test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
	},
	{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
    }
   ]},
  plugins:[
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" }),
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, './src/index.html')
	})
  ]
};
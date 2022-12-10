const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    resolve: {
        extensions: [".js", ".jsx", "json", ".ts", ".tsx", "css"]
    },
    devServer: {
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
              test: /\.tsx?$/i,
              use: 'ts-loader',
              exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|pdf|docx)$/i, 
                use: ['file-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
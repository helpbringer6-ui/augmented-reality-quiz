const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/main.js',
    output: {
        // Output bundle file
        filename: 'bundle.js',
        // Output path for the bundle
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        // Static file serving directory
        contentBase: path.join(__dirname, 'dist'),
        // Enable gzip compression
        compress: true,
        // Port for the dev server
        port: 9000,
    },
    module: {
        rules: [
            {
                // Transpile JavaScript files
                test: /.js$/, 
                // Exclude node_modules directory
                exclude: /node_modules/, 
                use: {
                    // Use Babel loader for transpilation
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
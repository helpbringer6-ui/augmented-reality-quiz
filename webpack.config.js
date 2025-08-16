const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './src/main.js',
    output: {
        // Output bundle file
        filename: 'bundle.js',
        // Output path for the bundle
        path: path.resolve(__dirname, 'dist'), // Path for the output bundle
    },
    devServer: {
        // Directory for serving static files
        contentBase: path.join(__dirname, 'dist'),
        // Enable gzip compression
        compress: true,
        // Port for the development server
        port: 9000,
    },
    module: {
        rules: [
            {
                // Transpile JavaScript files
                test: /\.js$/, 
                // Exclude node_modules directory
                exclude: /node_modules/, 
                use: {
                    // Use Babel loader for transpilation
                    loader: 'babel-loader',
                },
            },
            {
                // Process CSS files
                test: /\.css$/, 
                // Exclude node_modules directory
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
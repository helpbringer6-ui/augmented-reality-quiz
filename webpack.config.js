const path = require('path');

module.exports = {
    // Einstiegspunkt für die Anwendung
    entry: './src/main.js',
    output: {
        // Ausgabebündeldatei
        filename: 'bundle.js',
        // Ausgabepfad für das Bündel
        path: path.resolve(__dirname, 'dist'), // Pfad zur Ausgabe des Bundles
    },
    devServer: {
        // Verzeichnis für die Bereitstellung statischer Dateien
        contentBase: path.join(__dirname, 'dist'),
        // Gzip-Kompression aktivieren
        compress: true,
        // Port für den Entwicklungsserver
        port: 9000,
    },
    module: {
        rules: [
            {
                // JavaScript-Dateien transpilieren
                test: /\.js$/, 
                // Verzeichnis node_modules ausschließen
                exclude: /node_modules/, 
                use: {
                    // Babel-Loader für die Transpilation verwenden
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
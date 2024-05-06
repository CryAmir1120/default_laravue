const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: 'Noto Sans JP',
                serif: 'Noto Serif JP',
                arial: 'Arial'
            },
            fontSize: {
                8: "8px",
                10: "10px",
                12: "12px",
                14: "14px",
                16: "16px",
                18: "18px",
                20: "20px",
                24: "24px",
            },
            maxWidth: {
                container: '1920px'
            },
            colors: {
                cblack: "#111936",
                gblack: "#1a223f",
                cgreen: '#51d124',
                cteal: '#0ca789',
                crose: '#f4559d',
                corange: '#fac710',
                cindigo: '#414bb2',
                cblue: '#2f4d8f',
                lightBlue: '#ecf0ff',
                bblue: '#075985',
                lblue: '#2563eb',
                cgray: '#e9ecef',
                cborder: '#dee2e6'
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
    ],
};

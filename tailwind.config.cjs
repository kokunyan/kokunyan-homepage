/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                japanese: [
                    "'ヒラギノ角ゴ ProN'",
                    "'Hiragino Kaku Gothic ProN'",
                    "'游ゴシック'",
                    "'游ゴシック体'",
                    'YuGothic',
                    "'Yu Gothic'",
                    "'メイリオ'",
                    'Meiryo',
                    "'ＭＳ ゴシック'",
                    "'MS Gothic'",
                    "'HiraKakuProN-W3'",
                    "'TakaoExゴシック'",
                    "'TakaoExGothic'",
                    "'MotoyaLCedar'",
                    "'Droid Sans Japanese'",
                    'sans-serif',
                ],
            },
        },
        colors: {
            'deep-purple': '#181921',
            lightning: '#DED1ED',
            'lightning-cloud': '#D2B9FB',
            black: 'black',
            white: 'white',
            mainbg: '#2D3748',
            navbar: '#D9D9D9',
            aqua: '#03e9f4',
            red: '#ff3e00',
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#f3f4f6',

                    secondary: '#9ca3af',

                    accent: '#a1c7f4',

                    neutral: '#292524',

                    'base-100': '#1c1917',

                    info: '#a1b5f2',

                    success: '#bef264',

                    warning: '#a3660f',

                    error: '#fc5a68',
                    error: '#fc5a68',
                },
            },
        ],
    },
}

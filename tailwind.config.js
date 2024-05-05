/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    'DEFAULT': "#0a7c8a",
                    'light': "#eafffc",
                    'dark': "#01404b",
                    '50': '#eafffc',
                    '100': '#c9fff8',
                    '200': '#9afff6',
                    '300': '#55fff2',
                    '400': '#09fff9',
                    '500': '#00e7ed',
                    '600': '#00b8c7',
                    '700': '#0092a0',
                    '800': '#0a7c8a',
                    '900': '#0d5e6c',
                    '950': '#01404b',
                },
                secondary: {
                    'DEFAULT': "#00b4e4",
                    'light': "#def5ff",
                    'dark': "#012169",
                    '50': '#effbff',
                    '100': '#def5ff',
                    '200': '#b6eeff',
                    '300': '#75e4ff',
                    '400': '#2cd7ff',
                    '500': '#00b4e4',
                    '600': '#009dd4',
                    '700': '#007dab',
                    '800': '#00698d',
                    '900': '#065774',
                    '950': '#012169',
                },
                red: {
                    'DEFAULT': "#ea5b5e",
                    'light': "#E6F5FF",
                    'dark': "#7b2123",
                    '50': '#fef2f2',
                    '100': '#fde3e4',
                    '200': '#fccccd',
                    '300': '#f8a9ab',
                    '400': '#f2777a',
                    '500': '#ea5b5e',
                    '600': '#d52d31',
                    '700': '#b32225',
                    '800': '#942022',
                    '900': '#7b2123',
                    '950': '#430c0d',
                },
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '68': '17rem',
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
                '96': '24rem',
                '100': '25rem',
                '110': '27.5rem',
                '112': '28rem',
                '120': '30rem',
                '140': '35rem',
            },
            borderRadius: {
                '4xl': "2rem"
            },
            boxShadow: {
                'tabbar': ' 0 -6px 10px 0px rgba(0, 0, 0, 0.05)',
            },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
                '2xl': '1350px',
            },
        },
        transitionProperty: {
            'height': 'height',
            'width': 'width',
            'spacing': 'margin, padding',
        },
        screens: {
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1240px',
            '2xl': '1350px',
        },

    },
    variants: {
        space: ['responsive', 'direction'],
        extend: {},
    },
    plugins: [],
}


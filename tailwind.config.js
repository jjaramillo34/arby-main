const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            dark: '#2a221c',
            primary: '#d71920',
            primaryVariant: '#ac1319',
        },
        fontFamily: {
            // 'sans': ['ui-sans-serif', 'system-ui', ...],
            // 'serif': ['ui-serif', 'Georgia', ...],
            // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
            // 'display': ['Oswald', ...],
            // 'body': ['Open Sans', ...],
            'league-gothic': 'League Gothic',
            'league-gothic-regular': 'League Gothic-Regular',
            'league-gothic-condensed-regular': 'League Gothic-Condensed Regular',
            'league-gothic-italic': 'League Gothic-Italic',
            'league-gothic-condensed-italic': 'League Gothic-Condensed Italic',
            'rockwell': 'Rockwell',
            'rockwell-bold': 'RockwellBold',
            'helvetica': 'Helvetica'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

import colors from 'vuetify/es5/util/colors'

export default {
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#C5ACF2',
                accent: colors.grey.darken3,
                secondary: '#E3469A',
                grey: '#BDBDBD',
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
            },
            light: {
                primary: '#543887',
                secondary: '#E3469A',
                grey: '#BDBDBD',
                lightPrimary: '#C5ACF2',
                lightGrey: '#F5F5F5',
                blue: '#45C6D4',
                backLight: '#F8F4FF',
            }
        }
    },
}

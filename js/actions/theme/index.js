import Types from '../types'

const onThemeChange = (theme) => {
    return {type: Types.THEME_CHANGE, theme: theme}
}


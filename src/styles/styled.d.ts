import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      id: string

      background_primary: string
      background_secondary: string

      text: string
      title: string
      lines: string
      hover: string

      purple_dark: string
      yellow_medium: string
      text_alternative: string
    }
  }
}

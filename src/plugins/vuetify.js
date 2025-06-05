import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: true,
        colors: {
          background: '#121212',
          primary: '#7747ff',
          secondary: '#ffffff',
        },
      },
    },
  },
})
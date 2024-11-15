/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      light: 'monokai',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      'docker'

    ],
    transformers: [
      // ...
    ],
  }
})
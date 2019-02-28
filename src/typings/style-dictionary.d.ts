declare module 'style-dictionary' {
  export function extend (filename: string): StyleDictionary.StyleDictionary
}

declare namespace StyleDictionary {
  class StyleDictionary {
    buildAllPlatforms (): void
  }
}

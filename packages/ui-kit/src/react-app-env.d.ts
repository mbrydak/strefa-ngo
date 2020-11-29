/// <reference types="react-scripts" />

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface MomentMatchers extends import('@emotion/jest').EmotionMatchers {}
  }
}

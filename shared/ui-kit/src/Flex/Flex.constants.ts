export const alignItemsKeys = ['baseline', 'center', 'flex-end', 'flex-start', 'stretch'] as const;
export const justifyContentKeys = ['center', 'flex-end', 'flex-start', 'space-around', 'space-between'] as const;
export const flexDirectionKeys = ['column', 'column-reverse', 'row', 'row-reverse'] as const;

export type AlignItems = typeof alignItemsKeys[number];
export type JustifyContent = typeof justifyContentKeys[number];
export type FlexDirection = typeof flexDirectionKeys[number];

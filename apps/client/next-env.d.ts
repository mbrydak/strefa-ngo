/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@sn/ui-kit/declarations" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_MOCKING: 'enabled' | 'disabled';
  }
}

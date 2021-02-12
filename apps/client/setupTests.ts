/// <reference types="@sn/ui-kit/declarations" />

import '@testing-library/jest-dom';

import { createSerializer, matchers } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

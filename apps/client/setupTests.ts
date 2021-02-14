import '@testing-library/jest-dom';

import { createSerializer, matchers } from '@emotion/jest';

import { createTestingServer } from '@sn/api';

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

const server = createTestingServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

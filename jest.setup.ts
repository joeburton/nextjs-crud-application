import '@testing-library/jest-dom/extend-expect';
import 'isomorphic-unfetch';
import { server } from './mocks/server';

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
  // uncomment to view msw logs
  // server.printHandlers();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

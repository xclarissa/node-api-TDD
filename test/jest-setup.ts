import { SetupServer } from '@src/server';
import supertest from 'supertest';
//antes de todos os testes da app
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});

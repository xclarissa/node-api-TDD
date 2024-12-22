//até versao 16 do node 
// declare namespace NodeJS {
//   interface Global {
//     testRequest: import("supertest").SuperTest<import("supertest").Test>;
//   }
// }

//depois da versao 16
declare var testRequest: import('supertest/lib/agent');
// import('supertest').SuperTest<import('supertest').Test>;


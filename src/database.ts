import config, { IConfig } from 'config';
import { connect as mongooseConnect, connection } from 'mongoose';

//conectar banco de dados
const dbConfig: IConfig = config.get('App.database');

export const connect = async (): Promise<void> => {
  await mongooseConnect(dbConfig.get('mongoUrl'));
};

//finaliza banco de dados
export const close = (): Promise<void> => connection.close();
import { SetOptions, createClient } from 'redis';
import config from '../config';

const redisClient = createClient({
  url: config.redis.url,
});

const redisPubClient = createClient({
  url: config.redis.url,
});
const redisSubClient = createClient({
  url: config.redis.url,
});

redisClient.on('error', error => console.log('RedisError', error));
// eslint-disable-next-line no-unused-vars
redisClient.on('connect', error => console.log('redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisSubClient.connect();
  await redisPubClient.connect();
};

const disconnect = async (): Promise<void> => {
  await redisClient.quit();
  await redisSubClient.quit();
  await redisPubClient.quit();
};

const set = async (
  key: string,
  value: string,
  options?: SetOptions
): Promise<void> => {
  await redisClient.set(key, value, options);
};
const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};
const del = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

const setAccessToken = async (userId: string, token: string): Promise<void> => {
  const key = `access-token:${userId}`;
  await redisClient.set(key, token, {
    EX: Number(config.redis.expires_in),
  });
};
const getAccessToken = async (userId: string): Promise<string | null> => {
  const key = `access-token:${userId}`;
  return await redisClient.get(key);
};
const delAccessToken = async (userId: string): Promise<void> => {
  const key = `access-token:${userId}`;
  await redisClient.del(key);
};

export const RedisClient = {
  set,
  get,
  del,
  connect,
  disconnect,
  setAccessToken,
  getAccessToken,
  delAccessToken,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.publish.bind(redisSubClient),
};

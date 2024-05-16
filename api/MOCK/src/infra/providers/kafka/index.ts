import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['crucial-dory-14701-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'Y3J1Y2lhbC1kb3J5LTE0NzAxJE2h4lLj-Ib9ao0BNmY6iKOqpc975LggjCFi7mE',
      password: 'MzY4ZDM3ZTMtZDhkOC00OGY4LTg5OTMtYmVkMWM1NmJkMDA2'
  },
  logLevel: logLevel.ERROR,
});

export { kafka }
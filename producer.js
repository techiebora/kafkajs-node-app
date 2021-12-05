const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

// const admin = kafka.admin();

const producer = kafka.producer();

const run = async () => {
  //   await kafka.listTopics();
  // Producing
  await producer.connect();
  await producer.send({
    topic: "birth-topic",
    messages: [{ value: " birth user 3" }],
  });
  await producer.send({
    topic: "birth-topic",
    messages: [{ value: " birth user 4" }],
  });
};

run().catch(console.error);

const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const admin = kafka.admin();
const run = async () => {
  const create_topic = await kafka.admin().createTopics({
    timeout: 5000,
    topics: [
      {
        topic: "new1-topic",
      },
    ],
  });
  console.log("Topic CREATED--->" + create_topic);
};
run().catch(console.error);

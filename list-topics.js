const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const admin = kafka.admin();
const run = async () => {
  console.log("kafka topics - start");
  const topics = await kafka.admin().listTopics();
  console.log(topics);
  console.log("kafka topics - end");
};
run().catch(console.error);

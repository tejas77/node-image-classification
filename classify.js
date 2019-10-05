//TensorFlow.js is an open-source hardware-accelerated JavaScript library
//for training and deploying machine learning models.
const tf = require('@tensorflow/tfjs');
//MobileNet : pre-trained model for TensorFlow.js
const mobilenet = require('@tensorflow-models/mobilenet');
//The module provides native TensorFlow execution
//in backend JavaScript applications under the Node.js runtime.
const tfnode = require('@tensorflow/tfjs-node');
//The fs module provides an API for interacting with the file system.
const fs = require('fs');

const readImage = path => {
  //reads the entire contents of a file.
  //readFileSync() is synchronous and blocks execution until finished.
  const imageBuffer = fs.readFileSync(path);
  //Given the encoded bytes of an image,
  //it returns a 3D or 4D tensor of the decoded image. Supports BMP, GIF, JPEG and PNG formats.
  const tfimage = tfnode.node.decodeImage(imageBuffer);
  return tfimage;
}

const imageClassification = async path => {
  const image = readImage(path);
  // Load the model.
  const mobilenetModel = await mobilenet.load();
  // Classify the image.
  const predictions = await mobilenetModel.classify(image);
  console.log('Classification Results:', predictions);
}

if (process.argv.length !== 3) throw new Error('Incorrect arguments: node classify.js <IMAGE_FILE>');

imageClassification(process.argv[2]);

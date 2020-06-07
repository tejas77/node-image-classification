# Image Classification : Machine Learning in Node.js with TensorFlow.js
A simple example on Image Classification in Node.js with TensorFlow.js

#### Check out the [Medium Post](https://medium.com/@happytejasrathod/image-classification-machine-learning-in-node-js-with-tensorflow-js-dd8e20ba5024) for detailed explanation.

## Getting Started
With current Machine Learning Tutorials running towards Python and TensorFlow, I was finding a route in a language which is close to my work, as it has so much use in life than other languages, the language I am talking about is JavaScript. From Back-End Servers (Node.js) to Front-End Web (React) and even Mobile-Platforms (React-Native), JavaScript is a language that is being used by many coding geeks and to learning a whole new language, just for machine learning is tiresome for any programmer. So I thought to bring machine learning to my own space and my language.

>Sure, it's a challenge but why not to take a different path.

## Installation

Open it in GitHub Desktop or git clone the repository or download the zip & extract the project.

Open the terminal in the project folder and type `npm install`.

## Testing

Go to the project folder, and Open the Terminal to that path.

I have added an image that I have clicked and uploaded it in the repository. It’s an image of a Cute Baby Rabbit. You can use any image you have, just paste it in the project folder and give the name as the argument.

<img src="https://github.com/tejas77/node-image-classification/blob/master/rabbit.jpg" height="400" width="300">

- Run the file **_(classify.js)_** with an image file as an argument.

```
node classify.js rabbit.jpg
```

- The result will be shown in the Terminal as :
```
Classification Results: [
  {
    className: 'Angora, Angora rabbit',
    probability: 0.9488762617111206
  },
  { className: 'hamster', probability: 0.023957064375281334 },
  {
    className: 'guinea pig, Cavia cobaya',
    probability: 0.016880817711353302
  }
]
```

### Thank you
- Give a star if you find this repository helpful.
## Author 

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)

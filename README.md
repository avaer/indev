Minecraft-style terrain generation seeded noise functions.

```
const indev = require('indev');

const generator = indev({seed: 'lol'});
const simplexGenerator = generator.simplex({
  min: 0,
  max: 1,
  frequency: 0.01,
  octaves: 8
});
const value1 = simplexGenerator.in2D(100, 100);

const uniformGenerator = generator.uniform({
  min: 0,
  max: 1,
  frequency: 0.01,
  octaves: 8
});
const value2 = uniformGenerator.in2D(100, 100);

```

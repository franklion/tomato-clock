## Use Array.includes for Multiple Criteria

```
function test(fruit) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']

  if (redFruits.includes(fruit)) {
    console.log('red)
  }
}
```

## Less Nesting, Return Early

```
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']

  if (!fruit) throw new Error('No fruit!')

  if (redFruits.includes(fruit)) {
    console.log('red)

    if (quantity > 10) {
      console.log('big qnantity')
    }
  }
}
```

```
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']

  if (!fruit) throw new Error('No fruit!')
  if (!redFruits.includes(fruit)) return;

  console.log('red)

  if (quantity > 10) {
    console.log('big qnantity')
  }
}
```

## Use Default Function Parameters and Destructuring

```
function test(fruit, quantity = 1) {
  if (!fruit) return;

  console.log(`We have ${quantity} ${fruit}!`)
}
```

```
function test({ name = 'frank'} = {}) {
 console.log(name)
}
```

## Favor Map / Object literal than Switch Statement

```
const fruitColor = {
  red: ['red', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
}

function test(color) {
  return fruitColor[color] || []
}
```

```
const fruitColor = new Map()
  .set('red', ['red', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum'])

function test(color) {
  return fruitColor.get(color) || []
}
```

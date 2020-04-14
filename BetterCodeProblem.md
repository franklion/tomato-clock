## Use Array.includes for Multiple Criteria

```
function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {
    console.log('red')
  }
}
```

```
function test() {

}
```

## Less Nesting, Return Early

```
function test(fruit, quantity) {
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']

  if (fruit) {

    if (redFruits.includes(fruit)) {
      console.log('red)

      if (quantity > 10) {
        console.log('big qnantity')
      }
    }
  } else {
    throw new Error('No fruit!')
  }
}
```

## Use Default Function Parameters and Destructuring

```
function test(fruit, quantity) {
  if (!fruit) return;
  const q = quantity || 1

  console.log(`We have ${q} ${fruit}!`)
}
```

```
function test(fruit) {
  if (fruit && fruit.name) {
    console.log(fruit.name)
  } else {
    console.log('unknown)
  }
}
```

## Favor Map / Object literal than Switch Statement

```
function test(color) {
  switch (color) {
    case 'red:
      return ['apple', 'strawberry]
    case 'yellow:
      return ['banana', 'pineapple']
    case 'purple':
      return ['grape, 'plum']
    default:
      return []
  }
}
```

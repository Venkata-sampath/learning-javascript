# Projects related to DOM

## projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1 solution
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click', function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```

## project 2 solution

```javascript
const form = document.querySelector('form');
// if form not used and directly access height and weight, the values will be empty

form.addEventListener('submit', function (e) {
  e.preventDefault() // stops the default behaviour of form submit action
  // input needs to be converted to int for better experience
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height * height)* 10000).toFixed(2);
    let weightClass = ''
    if(bmi<18.6){
      weightClass = 'Under Weight'
    }else if(bmi>18.6 && bmi<24.9){
      weightClass = 'Normal Weight'
    }else{
      weightClass = 'Over Weight'
    }
    result.innerHTML = `<span>Your BMI :${bmi}</span> <br> <span>Result : ${weightClass}</span>`;
  }
});
```
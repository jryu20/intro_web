let unchecked_total = 45; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

let dice_roll = null;

// Add 12 event listeners.

const boxes = document.getElementsByTagName('td');
const checkboxes = document.getElementsByTagName('input');

for (let i = 0; i < 9; ++i) {
  boxes[i].addEventListener('click', function() {
    checkboxes[i + 1].checked = !checkboxes[i + 1].checked;
  })
}

const roll_dice_btn = document.getElementsByTagName('input')[0];
const submit_btn = document.getElementsByTagName('input')[10];
const dice_result = document.getElementsByTagName('span')[0];
const finish_btn = document.getElementsByTagName('input')[11];

function load() {
  roll_dice_btn.disabled = false;
  submit_btn.disabled = true;
}

window.onload = load;

roll_dice_btn.addEventListener('click', function() {
  roll_dice();
});

submit_btn.addEventListener('click', function() {
  submit();
})

finish_btn.addEventListener('click', function() {
  finish();
})


function roll_dice() {
  // Roll dice, inject text, disable / enable buttons.
  roll_dice_btn.disabled = true;
  submit_btn.disabled = false;

  let dice_1, dice_2;
  dice_1 = Math.floor(1 + 6 * Math.random());
  dice_2 = Math.floor(1 + 6 * Math.random());
  dice_roll = dice_1 + dice_2;
  dice_result.innerHTML = `${dice_1} + ${dice_2} = ${dice_roll}`;
}

function roll_die() {
  // Roll single die, inject text, disable / enable buttons.
  roll_dice_btn.disabled = true;
  submit_btn.disabled = false;

  dice_roll = Math.floor(1 + 6 * Math.random());
  dice_result.innerHTML = `${dice_roll}`;
}


function sum_checked_values() {
  let sum = 0;
  for (let i = 0; i < 9; ++i) {
    if (checkboxes[i + 1].checked === true) {
      sum += (i + 1);
    }
  }
  return sum;
}

function submit() {

  // Deal with invalid submission.
  sum = sum_checked_values();
  if (sum !== dice_roll) {
    alert('The total of the boxes you selected does not match the dice roll. Please make another selection and try again.');
  }

  // Deal with valid submission...
  else {
    for (let i = 0; i < 9; ++i) {
      if (checkboxes[i + 1].checked === true) {
        checkboxes[i + 1].checked = false;
        checkboxes[i + 1].disabled = true;
        unchecked_total -= (i + 1);
      }
    }

    // Delete text, disable / enable buttons and checkboxes.
    submit_btn.disabled = true;
    roll_dice_btn.disabled = false;
    dice_result.innerHTML = null;
  }

  // Change to rolling one die if appropriate.
  if (unchecked_total <= 6) {
    roll_dice_btn.addEventListener('click', function() {
      roll_die();
    });
  }

}

function finish() {
  submit_btn.disabled = true;
  roll_dice_btn.disabled = true;
  finish_btn.disabled = true;
  alert(`Your score is ${unchecked_total}`);

  const request = new XMLHttpRequest();

  request.onload = function() {
    if (this.status === 200) {
      window.location.assign("scores.php");
    }
  };

  request.open('POST', 'score.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(`score=${unchecked_total}`);

}

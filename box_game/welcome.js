let user = get_username();
let text = document.getElementsByTagName('input')[0];
let button = document.getElementsByTagName('input')[1];

if (user !== "") {
  text.defaultValue = user;

}

text.addEventListener('keyup', function(e) {
  if (e.key === "Enter") {
    submit_check();
  }
});

button.addEventListener('click', function() {
  submit_check();
});


function submit_check() {
  let alert_message = ""
  let special_char = {
    " ": "spaces",
    ",": "commas",
    ";": "semicolons",
    "=": "equal signs",
    "&": "ampersands"
  };
  let error_count = 0;
  let third_error = false;


  let normal_char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*()-_+[]{}:'|`~<.>/?  ,;=&"

  if (text.value.length < 5) {
    alert_message += "Username must be 5 characters or longer.";
    alert_message += "\n";
    error_count++;
  }

  if (text.value.length > 40) {
    alert_message += "Username cannot be longer than 40 characters.";
    alert_message += "\n";
    error_count++;
  }

  for (const char of Object.keys(special_char)) {
    if (text.value.indexOf(char) !== -1) {

      alert_message += "Username cannot contain " + special_char[char] + ".";
      alert_message += "\n";
      error_count++;
    }
  }

  if (error_count === 0) {
    let char_arr = text.value.split("");
    for (const char2 of char_arr) {
      if (normal_char.indexOf(char2) === -1) {
        alert("Username can only use characters from the following string: \n abcdefghijklmnopqrstuvwxyz \n ABCDEFGHIJKLMNOPQRSTUVWXYZ \n 0123456789 \n !@#$%^*()-_+[]{}:'|`~<.>/?");
        third_error = true;
      }
    }
  }


  if (error_count > 0) {
    alert(alert_message);
  }

  function hour_in_future() {
    let hour_in_future = new Date();
    hour_in_future.setMinutes(hour_in_future.getMinutes() + 60);
    return hour_in_future.toUTCString();
  }

  if (error_count === 0 && third_error === false) {
    document.cookie = `username=${text.value}; expires=${hour_in_future()}`;
    window.location.assign('shut_the_box.php');
    
  }

}

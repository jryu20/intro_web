let all_cookies = document.cookie;
function get_username() {
  let counter = 0;
  const nvs = all_cookies.split('; ');
  for (const nv of nvs) {
    if (nv.startsWith('username=')) {
      counter++;
      return nv.substring(9);
    }
  } 
  
  if (counter === 0) {
    return "";
  } 
}

window.onload = get_username;
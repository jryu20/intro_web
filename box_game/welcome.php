#!/usr/local/bin/php
<?php 
  session_save_path(__DIR__.'/sessions/');
  session_name('shutTheBox');
  session_start();

  $welcome = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];
  if(!($welcome)) {
    header('Location: login.php');
  }

?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title> Shut The Box </title>
    <script src="username.js" defer></script>
    <script src="welcome.js" defer></script>
  </head>

  <body>
    <header>
      <h1> Welcome! Ready to play "Shut the Box"? </h1>
    </header>

    <main>
      <section>
        <h2> Choose a username </h2>
        <p> So that we can post your score(s), please choose a username. </p>
        <fieldset>
          <label for="textbox"> Username: </label>
          <input id="textbox" type="text">
          <input type="button" value="Submit">
        </fieldset>

      </section>
    </main>

    <footer>
      <hr>
      <small>
        &copy; Jun Ryu, 2022
      </small>
    </footer>

  </body>

</html>

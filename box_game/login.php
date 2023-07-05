#!/usr/local/bin/php
<?php 
  session_save_path(__DIR__.'/sessions/');
  session_name('shutTheBox');
  session_start();

  $incorr_submiss = false;
  if(isset($_POST['passwordSubmitted'])) {
    validate($_POST['passwordSubmitted'], $incorr_submiss);
  }

  function validate($submiss, &$incorr_submiss) {
    $file = fopen('h_password.txt', 'r') or die('Unable to find the hashed password.');
    $hashed_password = fgets($file);
    $hashed_password = trim($hashed_password);
    $hashed_submiss = hash('md2', $submiss);

    if ($hashed_password !== $hashed_submiss) {
      $_SESSION['loggedin'] = false;
      $incorr_submiss = true;
    }
    else {
      $_SESSION['loggedin'] = true;
      header('Location: welcome.php');
      exit;
    }

    fclose($file);
  }
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title> Shut The Box </title>
  </head>

  <body>
    <header>
      <h1> Welcome! Ready to play "Shut the Box"? </h1>
    </header>

    <main>
      <section>
        <h2> Login </h2>
        <p> In order to play, you need the password. </p>
        <p> If you know it, please enter it below and login. </p>
        <fieldset>
          <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="passwordEntry"> Password: </label>
            <input id="passwordEntry" type="password" name="passwordSubmitted">
            <input type="submit" value="Login">
          </form>
        </fieldset>

        <?php 
          if($incorr_submiss) {
            echo '<p>Invalid password!</p>';
          }
        ?>

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
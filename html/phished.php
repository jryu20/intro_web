#!/usr/local/bin/php

<!DOCTYPE html>

<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title> Phished </title>
  </head>

  <body>
    <header>
      <h1> HAHAHA </h1>
    </header>

    <main>
      <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <section>
          <p>
          	<?php echo "You just got phished!!!"; 
              echo "<br>";
              echo "Your password is ";
          		if(isset($_POST['password'])){echo $_POST['password'];}
          	?>
          </p>

        </section>
      </form>

    </main>

    <footer>
      <hr>
      <small>
        &copy; Jun Ryu, 2022
      </small>
    </footer>

  </body>

</html>

#!/usr/local/bin/php

<!DOCTYPE html>

<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title> Interesting </title>
  </head>

  <body>
    <header>
      <h1> Welcome to site with interesting content </h1>
    </header>

    <main>
      <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <section>

          <h2> Welcome </h2>
          <p>
          	<?php echo 'Welcome ';	
          		if(isset($_POST['username'])){echo $_POST['username'];}
          	?>
          </p>

        </section>
      </form>


      <section>
        <h2> Recent posts by users </h2>
        <p> niceGuy666 said, "check out my
          <a href="holiday1.html" target="_blank" rel="opener">holiday</a>
          <a href="holiday2.html" target="_blank" rel="opener">pictures</a>!"
        </p>

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

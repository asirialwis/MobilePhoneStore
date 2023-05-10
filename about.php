<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- add a title (a) -->
    <title>My Shopping Cart</title>
    <link rel="stylesheet" href="Styles/styles.css" />
    <script src="JS/myScript.js"></script>
  </head>
  <body>
    <!-- add a logo (b) -->

    <img
      class="logo"
      src="images/Shpoing_cart.png"
      alt="ShopCart"
      width="200px"
      height="200px"
    />

    <header>
      <!-- add a header (c)-->

      <h3>Shopping Cart</h3>
      <!-- add a sub-header (c) -->
      <h4>The online shopping store</h4>
    </header>

    <!-- add a horizontal line (d)-->
    <hr />
    <!-- add a horizontal menu (e) -->
    <ul class="navbar">
      <li><a href="index.html"> Home</a></li>
      <li><a href="news.html"> News</a></li>
      <li><a href="register.html"> Contact</a></li>
      <li><a href="about.php"> About</a></li>
    </ul>
    <center>
  <?php 
      // Add constant 

      define("Comp_name","ABC Mobiles" );
      echo  "<center>"."<h2>".Comp_name. "</h2>"."</center>" ;
  
      echo "This page is mainly about the ".Comp_name."web site";
      echo "<br>";

      $sold = 75;
      $total = 100;

      echo "<h2>Shopping Cart Details</h2><br>";
      echo "<h4>Number Of Sold Items".$sold."</h4>";
      echo "<h4>Number Of Total Items".$total."</h4>";

      //---------------------implimenting the function find percentage--------------------------
      function findPercentage(){
          $GLOBALS['percentage'] = ($GLOBALS['sold'] / $GLOBALS['total']) * 100;
      }

      //calling the function 
      findPercentage();

      //print the output of the function
      echo "<h3>"."Percentage of Sold Items-".$percentage ."%<br></h3>";
   
    


      $today = "Today is ".date("l");
      echo "<h3>".$today."</h3>";
      
      $c = date("Y-m-d");
      $currentDay = date_create($c);
      $shipDay = date_create("2019-09-21");

      $diff = date_diff($currentDay,$shipDay);

      echo "<h4> Number of days remaining for shipping - ".$diff->format("%R%a days")."</h4>";

      if($diff->format("%R%a") > 0){
        $status = "To be Shipped";
      }
      else{
        $status = "Shipped";
      }
      echo "<h4><br>For ".$c."  24 items has ".$status."</h4>";
  


  
  ?>
    </center>

   
          
    <!-- add a horizontal line (d)-->
    <hr />
    <!-- add a footer (g)-->
    <footer>
      <p>Created By: Asiri Alwis</p>
      <a href="http://courseweb.sliit.lk/">Visit Our Course </a>
    </footer>
  </body>
</html>
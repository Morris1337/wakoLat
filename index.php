<?php
session_start();
$current_file_name = basename($_SERVER["PHP_SELF"]);
  include ('usermanagement/config.php');
  include ('config.php');
  // SESSION CHECK SET OR NOT
if (!isset($_SESSION['username'])) {
  unset($_SESSION['username']);
  $_SESSION['usericonblinkdecide'] = "usericonblink";
} else {
  $_SESSION['username'] = $_SESSION['username'];
  $_SESSION['usericonblinkdecide'] = "usericonblinknone";
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 "> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <meta charset="utf-8">
    <title><?php echo $lang['maintitle'] ?></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  ================================================== -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- Favicons
  ================================================== -->
  <link rel="shortcut icon" href="images/favicon.ico">
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

  <!-- CSS
  ================================================== -->

  <link rel="stylesheet" href="stylesheets/base.css">
  <link rel="stylesheet" href="stylesheets/style.css">

   <!-- Modernizr
  ================================================== -->
    <script src="javascripts/modernizr.js"></script>
    
    
</head>
<style>

.usericonblinknone{
  animation:none;
}

.usericonblink {
    animation:blinkingIcon 2.5s infinite;
}
@keyframes blinkingIcon{
    0%{     opacity: 0;   }
    5%{     opacity: 0.1; }
    10%{    opacity: 0.2; }
    15%{    opacity: 0.3; }
    20%{    opacity: 0.4; }
    25%{    opacity: 0.5; }
    30%{    opacity: 0.6; }
    35%{    opacity: 0.7; }
    40%{    opacity: 0.8; }
    45%{    opacity: 0.9; }
    50%{    opacity: 1.0; }
    55%{    opacity: 0.9; }
    60%{    opacity: 0.8; }
    65%{    opacity: 0.7; }
    70%{    opacity: 0.6; }
    75%{    opacity: 0.5; }
    80%{    opacity: 0.4; }
    85%{    opacity: 0.3; }
    90%{    opacity: 0.2; }
    95%{    opacity: 0.1; }
    100%{   opacity: 0;   }
    
}
</style>

<body>



<div id="main-wrapper">

        <!-- main navigation -->
    <div class="menusurround">
      <div class="header-inner d-none d-lg-flex flex-container space-between social-icons">
        <a class="<?php echo $_SESSION['usericonblinkdecide']?>" id="usericonactivepassive" href="usermanagement/index.php"><img class="usericon" src="images/usericon/usericon.png"/></a>
        <input id="menu-toggle" type="checkbox">
        <label id="menu-label" for="menu-toggle">
          <img class="languagemain" src="<?php echo $lang['langmainselect']?>"/>
        </label>
        <div id="collapse-menu">
          <a href="<?php echo $current_file_name."?".$lang["index_option2_link"]?>"><img class="language" src="<?php echo $lang['lang2select']?>"></a>
          <a href="<?php echo $current_file_name."?".$lang["index_option3_link"]?>"><img class="language" src="<?php echo $lang['lang3select']?>"></a>
        </div>  
      </div>

        <nav>
          <img class="menuIcon" src="images/icons/menu/free-icon-menu-1828853.png" alt="menuIcon">
          <div id="menu" class="menu">
            <ul id="mainnav" class=" mainnav level-1 slide-nav">
              <li class="has-subnav">
                <a><?php echo $lang['info_dropdown']?></a>
                <ul class="level-2">
                  <li><a href="<?php echo $lang['staff_marker']?>"><?php echo $lang['staff_link']?></a></li>
                  <li><a href="<?php echo $lang['calendar_marker']?>"><?php echo $lang['calendar_link']?></a></li>
                  <li><a href="<?php echo $lang['posts_marker']?>"><?php echo $lang['publications_link']?></a></li>
                </ul>
              </li>
              <li class="no-subnav">
                <a href="<?php echo $lang['training_marker']?>"><?php echo $lang['training_link']?></a>
              </li>
              <li class="no-subnav">
                <a href="#about-marker"><?php echo $lang['about_link']?></a>
              </li>
              <li class="no-subnav">
                <a href="#media-marker"><?php echo $lang['media_link']?></a>
              </li>
              <li class="no-subnav">
                <a href="#important-marker"><?php echo $lang['important_link']?></a>
              </li>
              <li class="no-subnav">
                <a href="#blog-marker"><?php echo $lang['content_link']?></a>
              </li>
              <li class="no-subnav">
                <a href="#contact-marker"><?php echo $lang['contact_link']?></a>
              </li>
            </ul>
          </div>
        </nav>
      <!-- end menu -->   
                    <!-- add logo --> 
                   
      <a href="<?php echo $lang['home_marker']?>"><img class="logo-image" src="images/logo/Logo-design_FunCatchers_2020_Agness_black.jpg"></a>
                    
                    <!-- end logo --> 
                    
    </div><!-- /main navigation --> 



    
    <!-- Home Section - Camera Slider
      ================================================== -->  
      <section id="home-section" class="section-wrapper very-top-padding">


            


          
                
          
              <div class="fluid_container">



          
                <div class="camera_wrap pattern_10" id="camera_wrap_1">

          
                      <!-- slide -->
                      <div data-src="images/homesection/kikbox.jpg">
                      <div class="camera_caption moveFromRight">
                          <?php echo $lang['sportsactivities']?>
              </div>
                  </div><!-- /slide -->
                
                      <!-- slide -->
                      <div data-src="images/homesection/running.jpg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['holidays']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                      <div data-src="images/homesection/K-1.jpg">
                      <div class="camera_caption fadeFromTop">
                          <?php echo $lang['meetings']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                      <div data-src="images/homesection/Sportadiena.jpeg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['movie']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                  <!--//<div data-src="images/homesection/orientation.jpg">
                      <div class="camera_caption moveFromRight">
                          <?php echo $lang['orientation']?>
                      </div>
                  </div>--><!-- /slide -->
                    
                      <!-- slide -->
                  <!--//<div data-src="images/homesection/more.jpg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['andmore']?>
                      </div>
                  </div>--><!-- /slide -->
        
                  </div><!-- /camera_wrap_1 -->
      
              </div><!-- /fluid_container -->
        <br class="clear">
          
        </section>
    <!-- End Home Section - Camera Slider
      ================================================== --> 
      
       
    <!-- About Section
      ================================================== -->
    <section id="about-section" class="section-wrapper about-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
            
                      <!-- uncomment items below for shadows -->
                <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                    <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> 
            
                       <div class="container">
                    
                              <h2 class="section-title"><?php echo $lang['maintitle']?><br /><span><?php echo $lang['funformany']?></span></h2>
                
                          <p class="section-text2"><?php echo $lang['aboutfuncat']?></p>
                                    
                                 </div>
                        
                  <!-- slider -->
                            <ul id="about_slider">
                                        <li><img src="images/logo/FunCatchers_logo_design_2020okt.png" width="300px" alt="slide"></li>
                                        <li><img src="images/logo/FunCatchers_logo_design_2020okt_white.png" width="300px" alt="slide"></li> 
                      </ul><!-- /slider -->
                                
                                
                                <div class="container pt25">            
                                
                                <!-- featured -->
                                <div class="row">
                                
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['weorganize']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['sportsevents']?><br>
                                        <?php echo $lang['childrensport']?>
                                        </p>
                
                                </div>
                      
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['weimprove']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['thequalityoflife']?><br>
                                        <?php echo $lang['childrencomprehensive']?>
                                        </p>
                
                                </div>
                                
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['wedevelop']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['thinkpositive']?><br>
                                        <?php echo $lang['childrencomprehensivephysical']?> 
                                        </p>
                                </div>
                                

                                </div>
                                <!-- /featured -->

                      </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End About Section
      ================================================== -->
      
    





    <!-- Twitter Section
      ================================================== -->
      <section class="margintop30"><!-- add main section background here -->
              <img src="images/logo/FunCatchers_logo_design_2020okt_logo_white2.png">
                        
                <!-- uncomment items below for shadows -->
              <!-- <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> -->  
                  <!-- <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> -->
    </section>
    <!-- End Twitter Section
      ================================================== -->
      



  <a id="media-marker" class="anchor"></a>
    
<!-- Добавил фотки с инстаграмма -->

    <!-- Instagram Photo -->
    <section>
        <nav>
            <div class="margintop50">
                <h2 class="section-title"><?php echo $lang['ourphotos']?> <br><span><?php echo $lang['toseemore']?></span></h2>
            </div>
            <div class="displaygridcenter">
            <iframe class="instagramPhoto" src='https://widgets.sociablekit.com/instagram-feed/iframe/156295' frameborder='0' width='1000px' height='550px'></iframe>            </div>
            </div>
        </nav>
    </section>

    
    <a id="important-marker" class="anchor"></a>
    
    
    <!-- Important Section
      ================================================== -->
      <section id="portfolio-section" class="section-wrapper portfolio-section"><!-- add main section background here -->
          <div class="background-inner1 "><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                   <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> 
                   <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                   <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">








    
    
    
    
    <a id="services-marker" class="anchor"></a>
    
    <!-- Services Section
      ================================================== -->
      <section id="services-section" class="section-wrapper services-section"><!-- add main section background here -->
        <div class="background-inner1"><!-- add parallax background -->
            <div class="background-inner3"><!-- add background color css to this div -->
              <div class="section-inner"><!-- add background pattern css to this div -->
                      
              <!-- uncomment items below for shadows -->
            <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> 
                <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">
              
                   
              
                        <h2 class="section-title"><?php echo $lang['important']?><br /><span><?php echo $lang['payattention']?></span></h2>
                
            
                
                <!-- Перенесено с верхру чутка ниже и изменен css -->
                        <!-- services row-->
                       
                          <div class="row2">
                  
                              <div class="four columns">
                                <div class="service text-center">
                                    <h2 class="serv"><i class="icon-user-add icon"></i><?php echo $lang['becomeamember']?></h2>
                                      <button><a href="docs/fileForParents/Документ для родителей.docx" download><?php echo $lang['download']?></a> </button>
                                </div>
                              </div>
                        
                                        
                         
                              <div class="four columns">
                                <div class="service text-center">
                                <a href="<?php echo $lang['chat_marker']?>">
                                    <h2 class="serv"><i class="icon-chat icon"></i><?php echo $lang['chat']?></h2>
                                  </a>
                                    <p><?php echo $lang['userschat']?><img height="30px" src="images/usericon/usericon.png"/></p>
                                </div>
                              </div>
                                
                        
                              <div class="four columns">
                                <div class="service">
                                <a href="<?php echo $lang['calendar_marker']?>">
                                    <h2 class="serv"><i class="icon-calendar icon"></i><?php echo $lang['calendar']?></h2>
                                  </a>
                                      <p><?php echo $lang['calendarinfo']?></p>
                                </div>
                              </div>
                    

                              <div class="four columns">
                                <div class="service">
                                <a href="<?php echo $lang['posts_marker']?>">
                                    <h2 class="serv"><i class="icon-newspaper icon"></i><?php echo $lang['publications']?></h2>
                                  </a>
                                      <p><?php echo $lang['pubdata']?></p>
                                </div>
                              </div>
                    
                            
                                
                                    
                                      
                              <div class="four columns">
                                <div class="service">
                                <a href="<?php echo $lang['challenges_marker']?>">
                                    <h2 class="serv"><i class="icon-star icon"></i><?php echo $lang['challenge']?></h2>
                                  </a>
                                      <p><?php echo $lang['userschallenge']?><img height="30px" src="images/usericon/usericon.png"/></p>
                                </div>
                            </div>
                       
                          </div><!-- /services row-->


                         
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Instagram Section
      ================================================== -->
    
    
    <!-- Twitter Section
      ================================================== -->
        <section><!-- add main section background here -->
              <img src="images/logo/FunCatchers_logo_design_2020okt_logo_white2.png">
                        
                <!-- uncomment items below for shadows -->
              <!-- <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> -->  
                  <!-- <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> -->
    </section>
    <!-- End Twitter Section
      ================================================== -->
      



  
      
      
   
      
    
      
      
      
    
    
    <a id="blog-marker" class="anchor"></a>
    
   
    
    <!-- Blog Section
      ================================================== -->
        <section id="blog-section" class="section-wrapper blog-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">    
    
                <div class="container">
                <h2 class="section-title"><?php echo $lang['content']?><br /><span><?php echo $lang['getitdone']?></span></h2>
                
                    
                  <!-- left column -->
                  <div class="eleven columns">

                    <!-- Раздел блога изменил, убрал твич и поставил видосы с Ютуба -->

                    <!-- blog entry --> 
                    <article class="post regular-post-type">
            
                        <h2 class="entry-title">
                            Video no musiem pasakumiem</h2>
                            <nav class="youtubu">
                                <div class="youtubu1">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qmseR2qLohs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
                                </div>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hSkKeh0LqDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3Q7NgE7qVUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </nav>
                  </article><!-- /blog entry --> 
        
        
            </div><!-- /left column -->

            <div id="radioheart-player"
     class="foursquare-black"
     data-stream="https://listen.myrh.ru/id063680"
     data-autostart="false"
     data-volume="0.5"
     data-logo="https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg"
     data-playtext="Нажмите play для начала воспроизведения"
>
    <div class="player-wrapper">
        <div class="logo" id="radioheart-player-logo" title=""></div>
        <div class="player-elements">
            <div class="controls">
                <div class="play" id="radioheart-player-play">
                    <i class="fa fa-play"></i>
                </div>
                <div class="pause hidden" id="radioheart-player-pause">
                    <i class="fa fa-stop"></i>
                </div>
            </div>
            <div class="sound-control">
                <div class="volume-control">
                    <div class="volume" id="radioheart-player-volume"></div>
                </div>
            </div>
            <div class="current-song marquee"
                 id="radioheart-player-current-song"
                 data-marquee=""
            >
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>

<script src="https://player.radioheart.ru/js/app.js"></script>
<link type="text/css" rel="stylesheet" href="https://player.radioheart.ru/css/app.css">
                
    
                  <!-- sidebar -->
                  <aside class="five columns">
                    
                
                    <div class="widget-box">
                        <div class="widget-box-content">
                            <h3><?php echo $lang['info']?></h3>
    
                            <p><?php echo $lang['weinvite']?></p> 
                           </div>
                    </div>
                
                    <div class="widget-box">
                        <div class="widget-box-content">
                            <h3><?php echo $lang['links']?></h3>
                            <ul>
                                <li><a href="https://www.facebook.com/groups/FunCatchersLV/" target="blank"><?php echo $lang['facebook']?></a></li>
                                <li><a href="https://www.instagram.com/funcatcherslv/" target="blank"><?php echo $lang['instagram']?></a></li>
                                <li><a href="https://www.tiktok.com/@funcatchers" target="blank"><?php echo $lang['tiktok']?></a></li>
                                <li><a href="https://www.youtube.com/channel/UCO05D9hP0CTgfCi5J-FB9fA" target="blank"><?php echo $lang['youtube']?></a></li>
                                <li><a href="https://www.twitch.tv/funcatcherslv" target="blank"><?php echo $lang['twitch']?></a></li>            
                            </ul>
                        </div>
                    </div>
                
                    
                        
                        
                
                      
            </aside><!-- /sidebar -->
    
              </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Blog Section
      ================================================== -->
      
     
    
    
    <a id="contact-marker" class="anchor"></a>
    
    <!-- Contact Section
      ================================================== -->
        <section id="contact-section" class="section-wrapper contact-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">               
                    
                    <h2 class="section-title"><?php echo $lang['getatus']?><br /><span><?php echo $lang['dontworry']?></span></h2>
                
                        <iframe width="100%" height="472" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.55237427337!2d24.376128415282334!3d56.92220060866286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e932c4ea294ce5%3A0x55aa989f71adca83!2sZah%C4%81rija%20Stopija%20iela%2C%20Upeslejas%2C%20Stopi%C5%86u%20novads%2C%20LV-2118!5e0!3m2!1slv!2slv!4v1624448159500!5m2!1slv!2slv" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


                
                
                    
        
                  <div class="container">
            
                  <!-- left column -->
                  <div class="eleven columns">
    
                  <h2 class="chunk mb20"><?php echo $lang['quickcontact']?></h2>
                
                    <!-- form -->
                    <div id="contactWrapper">
                        <form action="mail.php" method="post" autocomplete="off" id="contactform">
                       <div class="stage">
                            <label for="name"><small><?php echo $lang['mailname']?> <em>*</em></small></label>
                            <input type="text" name="name" id="name" value="" class="required"  aria-required="true" />
                         </div>
    
                            <div class="stage">
                                <label for="email"><small><?php echo $lang['mailemail']?> <em>*</em></small></label>
                                <input type="text" name="email" id="email" value="" class="required email"  aria-required="true" />
                            </div>
    
                            <div class="stage">
                                <label for="subject"><small><?php echo $lang['mailsubject']?> <em>*</em></small></label>
                                <input type="text" name="subject" id="subject" value="" class="required"  aria-required="true" />
                            </div>
    
                            <div class="stage">
                                <label for="body"><small><?php echo $lang['mailmessage']?> <em>*</em></small></label>
                                <textarea rows="8" name="message" id="body" class="required"  aria-required="true"></textarea>
                            </div>
                            <button type="submit">
                  <?php echo $lang['sendmessage']?>
                </button>
        
                            
                        </form>
                    </div><!-- /form -->
    
                  </div><!-- /left column -->
            
                  <!-- right column -->
                  <aside class="four columns offset-by-one">
                      <div class="widget-box">
                          <div class="widget-box-content">
                              <h3><?php echo $lang['fullinfo']?></h3>
            
                              <p><strong><?php echo $lang['office']?></strong><br />
                              <?php echo $lang['upeslejas']?><br />
                              <?php echo $lang['ropazunovads']?><br />
                                    <?php echo $lang['street']?><br />
                                    <?php echo $lang['postindex']?></p>
    
                              <p><?php echo $lang['tel']?><br />
                              </p>
    
                              <p><a href="#"><?php echo $lang['contactemail']?></a><br /></p>
                          </div>
                      </div>
                  </aside><!-- /right column -->  
             
                  </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Contact Section
      ================================================== -->
      
      
    <!-- Footer Social Section
      ================================================== -->
        <section id="footer-social-section" class="section-wrapper footer-social-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3 black70"><!-- add background color css to this div -->
                <div class="section-inner overlay6-20"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <!-- <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> -->  
                  <!-- <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> -->
    
                    <div class="container">
                
                      <h2 class="outlined-title"><?php echo $lang['stayconnected']?></h2>
                        
                            <div class="sixteen columns">
                                     
                            <div class="widget-box-content no-svg">
                                <a href="https://www.facebook.com/groups/FunCatchersLV/" target="blank"><i class="fc-webicon facebook large"></i></a>
                              <a href="https://www.instagram.com/funcatcherslv/" target="blank"><i class="fc-webicon instagram large"></i></a>
                                </div>
                            
                              
                              </div>                      
                
            </div><!-- /container -->
                           
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Footer Social Section
      ================================================== -->
      


    <!-- Footer
      ================================================== -->
        <footer class="footCreditsContainer">
            <div class="container footerCredits">
         
                <div class="eight columns">
                    <p class="creditsLeft">&copy;<script type="text/javascript">document.write(new Date().getFullYear())</script><?php echo $lang['reserved']?></p>
                </div>
         
                <div class="eight columns">
                    <p class="creditsRight"><?php echo $lang['join']?><a href="usermanagement/index.php"><?php echo $lang['maintitle']?></a></p>
                </div>
            </div>  
        </footer>        
    <!-- End Footer
      ================================================== -->
  
    <!-- to top button -->
    <p id="back-top">
    <a href="#home-marker"><i class="icon-up-open-big"></i></a>
  </p><!-- /to top button -->
    
</div><!-- /#main wrapper -->
    
   <!-- JS
  ================================================== -->
    
  <script src="javascripts/jquery-1.11.3.min.js"></script> 


    <!-- preloader -->
  <script type="text/javascript">
  jQuery(document).ready(function() {
  jQuery("body").addClass("hidden_body");
   })
        jQuery(window).load(function() { // makes sure the whole site is loaded
          jQuery("#status").fadeOut(); // will first fade out the loading animation
          jQuery("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
          jQuery("body").removeClass("hidden_body"); 
       })
  </script>

    <!-- google map -->
  <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="javascripts/jquery.gmap.min.js"></script>
    <!-- end google map -->

    <!-- camera slider -->
  <script src="assets/camera/scripts/camera.js"></script> 
    <!-- end camera slider -->
    
     <script src="javascripts/jquery.validate.pack.js"></script>
     
    <script src="javascripts/scripts-lv.js"></script>
    <script src="javascripts/screen.js"></script>
    <script src="menuButton.js"></script>






</body>
</html>
  var count = 0;
  var currQsn = 0;
  var completed = false;

$(document).ready(function(){

//hide elements at startup
  $('.question, .container, .complete' ).hide();
  

//begin load form
  $('.start').click(function(e){
    e.preventDefault();
    $('.next').hide();
    $('.start, .complete').hide();
    $('.container, .question').fadeIn(500);
    restart();
    loadQ();
    enableForm();
  var target = $(e.target);
    if (target.hasClass("hard")) {
        qsnList.push(fifty, fiftyone, fiftytwo, fiftythree, fiftyfour, fiftyfive, fiftysix, fiftyseven, fiftyeight, fiftynine, sixty, sixtyone, sixtytwo, sixtythree, sixtyfour, sixtyfive, sixtysix, sixtyseven, sixtyeight, sixtynine, seventy, seventyone, seventytwo, seventythree);
    }
    else if(target.hasClass("medium")) {
        qsnList.push(twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty, fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive, fourtysix, fourtyseven, fourtyeight, fourtynine);
    }
    else {
      qsnList.push(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive);
  }
});

function Question(Question, a1, a2, a3, a4, correct){
  this.Question=Question;
  this.a1=a1;
  this.a2=a2;
  this.a3=a3;
  this.a4=a4;
  this.correct=correct;
}

    var one = new Question("<p class='question_num'>Question 1 of 25</p><img class='picture' src='img/easy/1.png'>", "Homer J. Fong", "Homer Thompson", "Homer Simpson", "Max Power", 3);
    var two = new Question("<p class='question_num'>Question 2 of 25</p><img class='picture' src='img/easy/2.png'>", "Millhouse van Houten", "Ralph Wiggum", "Bart Simpson", "Todd Flanders", 3);
    var three = new Question("<p class='question_num'>Question 3 of 25</p><img class='picture' src='img/easy/3.png'>", "Monty Burns", "Waylon Smithers", "Scott Christian", "Kent Brockman", 1);
    var four = new Question("<p class='question_num'>Question 4 of 25</p><img class='picture' src='img/easy/4.png'>", "Greg", "Slime Q Slime Dog", "Apu de Beaumarche", "Apu Nahasapeemapetilon", 4);
    var five = new Question("<p class='question_num'>Question 5 of 25</p><img class='picture' src='img/easy/5.png'>", "Wendell Borton", "Ralph Wiggum", "Nelson Muntz", "Martin Prince", 2);
    var six = new Question("<p class='question_num'>Question 6 of 25</p><img class='picture' src='img/easy/6.png'>", "Milhouse Van Houten", "Kirk Van Houten", "Norbert Van Houten", "Van Hooten", 1);
    var seven = new Question("<p class='question_num'>Question 7 of 25</p><img class='picture' src='img/easy/7.png'>", "Eugene", "Rusty", "Cletus", "Spudford", 3);
    var eight = new Question("<p class='question_num'>Question 8 of 25</p><img class='picture' src='img/easy/8.png'>", "Lenny Leonard", "Carl Carlson", "Barney Gumble", "Moe Szyslak", 4);
    var nine = new Question("<p class='question_num'>Question 9 of 25</p><img class='picture' src='img/easy/9.png'>", "Groundskeeper Sheamus", "Groundskeeper Willie", "Groundskeeper Seymour", "GK Willington", 2);
    var ten = new Question("<p class='question_num'>Question 10 of 25</p><img class='picture' src='img/easy/10.png'>", "Otto Mann", "Otto Martin", "Otto Skinner", "Otto Simpson", 1);
    var eleven = new Question("<p class='question_num'>Question 11 of 25</p><img class='picture' src='img/easy/11.png'>", "Marge Simpson", "Patty Bouvier", "Selma Bouvier", "Lisa Simpson", 1);
    var twelve = new Question("<p class='question_num'>Question 12 of 25</p><img class='picture' src='img/easy/12.png'>", "Joe Laboot", "Jake Boyman", "Grant Connor", "Chester Turley", 4);
    var thirteen = new Question("<p class='question_num'>Question 13 of 25</p><img class='picture' src='img/easy/13.png'>", "Adam J. Simpson", "Abraham J. Simpson", "Herbert Simpson", "Orville J. Simpson", 2);
    var fourteen = new Question("<p class='question_num'>Question 14 of 25</p><img class='picture' src='img/easy/14.png'>", "Disco Stu", "Disco Lou", "Disco Joe", "Disco Apu", 1);
    var fifteen = new Question("<p class='question_num'>Question 15 of 25</p><img class='picture' src='img/easy/15.png'>", "Lisa", "Janie", "Sherri", "Maggie", 4);
    var sixteen = new Question("<p class='question_num'>Question 16 of 25</p><img class='picture' src='img/easy/16.png'>", "Dick Fiddler", "Armen Tamzarian", "Seymour Skinner", "Gary Chalmers", 3);
    var seventeen = new Question("<p class='question_num'>Question 17 of 25</p><img class='picture' src='img/easy/17.png'>", "Kearney Zzyzwicz", "Dolph Starbeam", "Jimbo Jones", "Nelson Muntz", 4);
    var eighteen = new Question("<p class='question_num'>Question 18 of 25</p><img class='picture' src='img/easy/18.png'>", "Waylon Smithers", "Lenny Leonard", "Moe Szyslak", "Seymour Skinner", 1);
    var nineteen = new Question("<p class='question_num'>Question 19 of 25</p><img class='picture' src='img/easy/19.png'>", "Lisa Margaret Simpson", "Lisa J Simpson", "Maggie Simpson", "Lisa Marie Simpson", 4);
    var twenty = new Question("<p class='question_num'>Question 20 of 25</p><img class='picture' src='img/easy/20.png'>", "Noodles The Clown", "Rusty The Clown", "Krusty The Clown", "Hyman Krustofsky", 3);
    var twentyone = new Question("<p class='question_num'>Question 21 of 25</p><img class='picture' src='img/easy/21.png'>", "Scott Christian", "Arnie Pie", "Marty", "Kent Brockman", 4);
    var twentytwo = new Question("<p class='question_num'>Question 22 of 25</p><img class='picture' src='img/easy/22.png'>", "Barney Rubble", "Barney Gumble", "Chester Turley", "Carl Carlson", 2);
    var twentythree = new Question("<p class='question_num'>Question 23 of 25</p><img class='picture' src='img/easy/23.png'>", "Dr. Julius Hibbert", "Dr. Jonas Fong", "Dr. Cheeks", "Dr. Nick Riviera", 4);
    var twentyfour = new Question("<p class='question_num'>Question 24 of 25</p><img class='picture' src='img/easy/24.png'>", "Barry Duffman", "Larry Duffman", "Gary Duffman", "Terry Duffman", 1);
    var twentyfive = new Question("<p class='question_num'>Question 25 of 25</p><img class='picture' src='img/easy/25.png'>", "Dr. Julius Hibbert", "Dr. J Loren Prior", "Dr. Nick Riviera", "Dr. Zweig", 1);

    var twentysix = new Question("<p class='question_num'>Question 2 of 25</p><img class='picture' src='img/medium/26.png'>", "Devon Bradley", "Lenny Leonard", "Carl Carlson", "Jebus", 3);
    var twentyseven = new Question("<p class='question_num'>Question 3 of 25</p><img class='picture' src='img/medium/27.png'>", "Eddie", "Clancy", "Lou", "Frank", 1);
    var twentyeight = new Question("<p class='question_num'>Question 4 of 25</p><img class='picture' src='img/medium/28.png'>", "Steffan August", "Gil Gunderson", "Troy McClure", "Frank Grimes", 2);
    var twentynine = new Question("<p class='question_num'>Question 5 of 25</p><img class='picture' src='img/medium/29.png'>", "Hans Moleman", "Barney Gumble", "Fausto", "Sheldon Skinner", 1);
    var thirty = new Question("<p class='question_num'>Question 6 of 25</p><img class='picture' src='img/medium/30.png'>", "Sgt. Activity", "Fantastic Dan", "John Frink", "Herman Hermann", 4);
    var thirtyone = new Question("<p class='question_num'>Question 7 of 25</p><img class='picture' src='img/medium/31.png'>", "Larry Burns", "Dr. Velimirovic", "Montgomery Burns", "C M Burns", 1);
    var thirtytwo = new Question("<p class='question_num'>Question 8 of 25</p><img class='picture' src='img/medium/32.png'>", "Arthur Fortune", "Lenny Leonard", "Carl Carlson", "Devon Bradley", 2);
    var thirtythree = new Question("<p class='question_num'>Question 9 of 25</p><img class='picture' src='img/medium/33.png'>", "Dr. Zweig", "Dr. Fong", "Dr. Riviera", "Dr. Lowenstein", 1);
    var thirtyfour = new Question("<p class='question_num'>Question 10 of 25</p><img class='picture' src='img/medium/34.png'>", "Troy McClure", "Miguel Sanchez", "Lyle Lanley", "Lionel Hutz", 4);
    var thirtyfive = new Question("<p class='question_num'>Question 11 of 25</p><img class='picture' src='img/medium/35.png'>", "Lou", "Eddie", "Clancy", "Gavin", 1);
    var thirtysix = new Question("<p class='question_num'>Question 12 of 25</p><img class='picture' src='img/medium/36.png'>", "Selma Bouvier", "Agnes Skinner", "Patty Bouvier", "Jacqueline Bouvier", 3);
    var thirtyseven = new Question("<p class='question_num'>Question 13 of 25</p><img class='picture' src='img/medium/37.png'>", "Barry Lovejoy", "Timothy Lovejoy", "Gary Lovejoy", "Todd Lovejoy", 2);
    var thirtyeight = new Question("<p class='question_num'>Question 14 of 25</p><img class='picture' src='img/medium/38.png'>", "Devon Bradley", "Wally Kogen", "Royce Lumpkin", "J Loren Pyror", 4);
    var thirtynine = new Question("<p class='question_num'>Question 15 of 25</p><img class='picture' src='img/medium/39.png'>", "Arnie Pie", "Birch Barlow", "Dave Shutton", "Rex Banner", 4);
    var fourty = new Question("<p class='question_num'>Question 16 of 25</p><img class='picture' src='img/medium/40.png'>", "Rod Flanders", "Todd Flanders", "Jimbo Jones", "Jesse Grass", 1);
    var fourtyone = new Question("<p class='question_num'>Question 17 of 25</p><img class='picture' src='img/medium/41.png'>", "Don Vittorio", "Roger Meyers Jr.", "Roger Meyers Sr.", "Dave Shutton", 2);
    var fourtytwo = new Question("<p class='question_num'>Question 18 of 25</p><img class='picture' src='img/medium/42.png'>", "Selma Bouvier", "Jacqueline Bouvier", "Agnes Skinner", "Patty Bouvier", 1);
    var fourtythree = new Question("<p class='question_num'>Question 19 of 25</p><img class='picture' src='img/medium/43.png'>", "Freddy Quimby", "Dave Shutton", "Arthur Crandall", "Jeff Albertson", 4);
    var fourtyfour = new Question("<p class='question_num'>Question 20 of 25</p><img class='picture' src='img/medium/45.png'>", "Langdon Alger", "Patches", "Todd Flanders", "Donny", 3);
    var fourtyfive = new Question("<p class='question_num'>Question 21 of 25</p><img class='picture' src='img/medium/44.png'>", "Lyle Lanley", "Arthur Fortune", "Buck McCoy", "Randall Curtis", 1);
    var fourtysix = new Question("<p class='question_num'>Question 22 of 25</p><img class='picture' src='img/medium/46.png'>", "Betsy Bidwell", "Eleanor Abernathy", "Chloe Talbot", "Cookie Kwan", 4);
    var fourtyseven = new Question("<p class='question_num'>Question 23 of 25</p><img class='picture' src='img/medium/47.png'>", "Hugh Parkfield", "Grant Connor", "Randall Curtis", "Stark Richdale", 1);
    var fourtyeight = new Question("<p class='question_num'>Question 24 of 25</p><img class='picture' src='img/medium/48.png'>", "Juliet Hobbes", "Chloe Talbot", "Nancy Gladness", "Eleanor Abernathy", 4);
    var fourtynine = new Question("<p class='question_num'>Question 25 of 25</p><img class='picture' src='img/medium/49.png'>", "Üter Zörker", "Gunter", "Ugolín", "Maurice", 1);
    
    var fifty = new Question("<p class='question_num'>Question 2 of 25</p><img class='picture' src='img/hard/50.png'>", "Art", "Vince", "Shelby", "Sheldon", 3);
    var fiftyone = new Question("<p class='question_num'>Question 3 of 25</p><img class='picture' src='img/hard/51.png'>", "Bart Simpson", "Simon Woosterfield", "Brad Simpson", "Ralph Wiggum", 2);
    var fiftytwo = new Question("<p class='question_num'>Question 4 of 25</p><img class='picture' src='img/hard/52.png'>", "Cowboy Bob", "Cowboy Steve", "Arthur Fortune", "Lyle Lanley", 1);
    var fiftythree = new Question("<p class='question_num'>Question 5 of 25</p><img class='picture' src='img/hard/53.png'>", "Bob Terwilliger, Jr.", "Cecil Terwilliger", "Neil Terwilliger", "Gino Terwilliger", 4);
    var fiftyfour = new Question("<p class='question_num'>Question 6 of 25</p><img class='picture' src='img/hard/54.png'>", "Tebor", "César", "Fritz", "Ugolín", 4);
    var fiftyfive = new Question("<p class='question_num'>Question 7 of 25</p><img class='picture' src='img/hard/55.png'>", "Homer Simpson", "Herb Simpson", "Herb Powell", "Harold Peters", 3);
    var fiftysix = new Question("<p class='question_num'>Question 8 of 25</p><img class='picture' src='img/hard/56.png'>", "Cora", "Susan", "Ginger", "Brandine", 1);
    var fiftyseven = new Question("<p class='question_num'>Question 9 of 25</p><img class='picture' src='img/hard/57.png'>", "Allison Taylor", "Chloe Talbot", "Betsy Bidwell", "Alex Whitney", 3);
    var fiftyeight = new Question("<p class='question_num'>Question 10 of 25</p><img class='picture' src='img/hard/58.png'>", "Vance Connor", "Geoff Jenkins", "Mitch Hartwell", "Jeremy Freedman", 4);
    var fiftynine = new Question("<p class='question_num'>Question 11 of 25</p><img class='picture' src='img/hard/59.png'>", "Ms. Pennycandy", "Mrs. Muntz", "Miss Wickerbottom", "Ms. Killebrew", 2);
    var sixty = new Question("<p class='question_num'>Question 12 of 25</p><img class='picture' src='img/hard/60.png'>", "Donny", "Gary", "Kevin", "Stanley", 3);
    var sixtyone = new Question("<p class='question_num'>Question 13 of 25</p><img class='picture' src='img/hard/61.png'>", "Caleb Thorn", "Devon Bradley", "Jack Crowley", "Randall Curtis", 1);
    var sixtytwo = new Question("<p class='question_num'>Question 14 of 25</p><img class='picture' src='img/hard/62.png'>", "Randall Curtis", "Jimmy The Scumbag", "Bob Arnold", "Louie", 4);
    var sixtythree = new Question("<p class='question_num'>Question 15 of 25</p><img class='picture' src='img/hard/63.png'>", "Ashley Grant", "Allison Taylor", "Chloe Talbot", "Alex Whitney", 1);
    var sixtyfour = new Question("<p class='question_num'>Question 16 of 25</p><img class='picture' src='img/hard/64.png'>", "Monty Burns", "Clifford Burns", "Wainwright Burns", "Zeph Burns", 3);
    var sixtyfive = new Question("<p class='question_num'>Question 17 of 25</p><img class='picture' src='img/hard/65.png'>", "Johnny", "Ronaldo", "Pepe", "Kavi", 2);
    var sixtysix = new Question("<p class='question_num'>Question 18 of 25</p><img class='picture' src='img/hard/66.png'>", "zutry", "Tebor", "César", "Gunter", 1);
    var sixtyseven = new Question("<p class='question_num'>Question 19 of 25</p><img class='picture' src='img/hard/67.png'>", "Tab Spangler", "Grant Connor", "Caleb Thorn", "Wally Kogen", 4);
    var sixtyeight = new Question("<p class='question_num'>Question 20 of 25</p><img class='picture' src='img/hard/68.png'>", "Zelda Fitzgerald", "Sara Sloane", "Stacey Swanson", "Nancy Gladness", 3);
    var sixtynine = new Question("<p class='question_num'>Question 21 of 25</p><img class='picture' src='img/hard/69.png'>", "Quenley Woosterfield", "Isabel Gutiérrez", "Mary Spuckler", "Greta Wolfcastle", 2);
    var seventy = new Question("<p class='question_num'>Question 22 of 25</p><img class='picture' src='img/hard/70.png'>", "Randall Curtis", "Grant Connor", "Tab Spangler", "Stark Richdale", 3);
    var seventyone = new Question("<p class='question_num'>Question 23 of 25</p><img class='picture' src='img/hard/71.png'>", "Howell Huser", "Mason Fairbanks", "Arthur Fortune", "Charles Heathbar", 3);
    var seventytwo = new Question("<p class='question_num'>Question 24 of 25</p><img class='picture' src='img/hard/72.png'>", "Virgil Simpson", "Vance Connor", "Lucius Sweet", "Gabriel", 1);
    var seventythree = new Question("<p class='question_num'>Question 25 of 25</p><img class='picture' src='img/hard/73.png'>", "Geoff Jenkins", "Dexter Colt", "Stark Richdale", "Langdon Alger", 4);

    var qsnList = [one];


//button hovers
    $('.begin button').on({
      mouseover:function(){
        $('.start').addClass('over');
      },
      mouseleave:function(){
        $('.start').removeClass('over');
      }
    });

    $('.container button').on({
      mouseover:function(){
          $(this).closest('.choice').addClass('hover');
      },
      mouseleave:function(){
          $(this).closest('.choice').removeClass('hover');
      },
      click:function(){
        if($(this).closest('.choice').attr('id') == qsnList[currQsn].correct){
          $(this).closest('.choice').addClass('correct').removeClass('hover');
          $('.next').addClass('over');
          addPoint();
          disableForm();
          addNext();
        }
        else{
          $(this).closest('.choice').addClass('incorrect').removeClass('hover');
          correctAnswer();
          disableForm();
          addNext();
        }
      }
    });

//next button reveal
   function addNext(){
    if(qsnList === twentyfive) {
      $('.next').text("Finish");
      $('.next').fadeIn(500);
    }
    else if(qsnList === fourtynine) {
      $('.next').text("Finish");
      $('.next').fadeIn(500);
    }
    else if(qsnList === seventythree) {
      $('.next').text("Finish");
      $('.next').fadeIn(500);
    }
    else{
      $('.next').text("Next");
      $('.next').fadeIn(500);
    }
   }


//add point
   function addPoint(){
    count++;
    $('').text(count);
   }

   function disableForm(){
    $('.container').find('.choice').attr('disabled', true);
   }

   function enableForm(){
    $('.container').find('.choice').attr('disabled', false);
   }

   function clearClass(){
    $('.choice').removeClass('correct');
    $('.choice').removeClass('incorrect');
   }


    function finish() {
       finalScore();
      $('.container').fadeOut(500);
      $('.complete').fadeIn(500);
    }
    
//question toggle
   $('.choice').click(function(e){
    e.preventDefault();
    if(currQsn === 24){
      $('.next').text("Finish");
      $('.next').fadeIn(500);
      $('.next').click(finish);
    }
    else{
      currQsn++;
      addNext();
    }
   });


//question load
   function loadQ(){
    $('.question').html(qsnList[currQsn].Question);
    $('.choice:nth-child(1)').text(qsnList[currQsn].a1);
    $('.choice:nth-child(2)').text(qsnList[currQsn].a2);
    $('.choice:nth-child(3)').text(qsnList[currQsn].a3);
    $('.choice:nth-child(4)').text(qsnList[currQsn].a4);
    $('.next').hide();
    clearClass();
    return;
   }

//next button
    $('.next').click(function(){
    clearClass();
    loadQ();
    enableForm();
    });


//quiz restart
   function restart(){
    count = 0;
    currQsn = 0;
   }

//answer reveals
  function correctAnswer(){
    var ans = qsnList[currQsn].correct;
    $('.container').find('.choice#' + qsnList[currQsn].correct).addClass('correct', 500);
  }

function play_again(){
$('.complete').append("<input type='button' class='choice restart' value='Play Again' onClick='window.location.reload()'>");
}


 

//final
   function finalScore(){
    $('.complete p').html(count);
    if(count <= 3){
      $('.complete').prepend("<img class='winning_picture' src='img/Edna_Krabappel.png'>");
      $('.complete p').html( + count + " out of 25 correct <br /> Keep studying.");
    }
     else if (count <= 5) {
      $('.complete').prepend("<img class='winning_picture' src='img/Johnny_Tightlips.png'>");
      $('.complete p').html(  + count + " out of 25 correct <br /> Tell 'em to go suck a lemon.");
    }
    else if (count <= 10){
      $('.complete').prepend("<img class='winning_picture' src='img/Yes_Guy.png'>");
      $('.complete p').html( + count + " out of 25 correct <br /> Eeeh-Ye-e-e-es!");
    }
    else if (count <= 15){
      $('.complete').prepend("<img class='winning_picture' src='img/Young_Burns.png'>");
      $('.complete p').html( + count + " out of 25 correct <br /> Excellent!");
    }
    else if (count <= 20) {
      $('.complete').prepend("<img class='winning_picture' src='img/Rich_Texan.png'>");
      $('.complete p').html( + count + " out of 25 correct <br /> Yee Haa!");
    }
    else if (count <= 24) {
      $('.complete').prepend("<img class='winning_picture' src='img/Chief_Wiggum.png'>");
      $('.complete p').html(+ count + " out of 25 correct <br /> You have the right to remain fabulous!");
    }
    else{
      $('.complete').prepend("<img class='winning_picture' src='img/medium/43.png'>");
      $('.complete p').html(+ count + " out of 25 correct <br /> Biggest NERD EVER!!!");
    }
    $('.question').hide();
    $('.container').hide();
    $('.question_num').hide();
    play_again();
    }
});
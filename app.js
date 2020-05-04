var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var pickedImage;
    var pcImage;
    var player1 = [];
    var player2 = [];
    var cp = [];
    var cp2 = [];
    var cp3 = [];
    var c1;
    var c2;
    var c3;
    var c4;
    var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    var winSub;
    var winSub2;
    var pcWin;
    var pcWin2;
    var pcWin3;
    var pcWin4;
    var pcWin5;
    var pcWin6;
    var pcWin7;
    var pl1 = [];
    var pl2 = [];
    var pl3 = [];
    var pl4 = [];
    var pl5 = [];
    var plWin;
    var plWin2;
    var plWin3;
    var plWin4;
    var plWin5;
    var ram;
    var ram2;
    var ram3;
    var i;
    var taken = [];
    var taken2 = [];
    var taken3 = [];
    var x;
    var win1=[];
    var win2=[];
    var win3=[];
    var win4=[];
    var win5=[];
    var checking1;
    var checking2;
    var checking3;
    var checking4;
    var checking5;
    var checking6;
    var checking7;
    var checking8;
    var checking9;
    var checkingT1;
    var checkingT2;
    var checkingT3;
    var checkingT4;
    var checkingT5;
    var checkingT6;
    var checkingT7;
    var checkingT8;
    var checkingT9;


   $(document).ready(function() {
       $('.game').hide();
       $('#start').hide();
   });


   //select game1
    $('#p1').on('click', function() {
        $('#selector').hide();
        $('#start').show();

        //user to select image
        $('#x').on('click', function () {
            $('#bt').empty();
            $('.game').show();
            pickedImage = '<img class="bt" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-alphanumeric/068133-3d-transparent-glass-icon-alphanumeric-x-mark.png">';
            pcImage = '<img class="bt" src="http://www.drodd.com/images14/o23.jpg">';
        });

        $('#o').on('click', function () {

            $('#bt').empty();
            $('.game').show();
            pickedImage = '<img class="bt" src="o_mark.jpg">';
            pcImage = '<img class="bt" src="x_mark.svg">';

        });

        //user to play
        $('#1').one('click', function () {
            $('#1').append(pickedImage);
            player1.push(1);

            wins();
            move();

        });

        $('#2').one('click', function () {
            $('#2').append(pickedImage);
            player1.push(2);

            wins();
            move();

        });

        $('#3').one('click', function () {
            $('#3').append(pickedImage);
            player1.push(3);

            wins();
            move();
        });

        $('#4').one('click', function () {
            $('#4').append(pickedImage);
            player1.push(4);

            wins();
            move();
        });

        $('#5').one('click', function () {
            $('#5').append(pickedImage);
            player1.push(5);

            wins();
            move();
        });

        $('#6').one('click', function () {
            $('#6').append(pickedImage);
            player1.push(6);

            wins();
            move();
        });

        $('#7').one('click', function () {
            $('#7').append(pickedImage);
            player1.push(7);

            wins();
            move();
        });

        $('#8').one('click', function () {
            $('#8').append(pickedImage);
            player1.push(8);

            wins();
            move();
        });

        $('#9').one('click', function () {
            $('#9').append(pickedImage);
            player1.push(9);

            wins();
            move();
        });

    });


    
       
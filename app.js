var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var pickedImage;
    var pcImage;
    var player1 = [];
   
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
            pickedImage = '<img class="bt" src="http://www.drodd.com/images14/o23.jpg"">';
            pcImage = '<img class="bt" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-alphanumeric/068133-3d-transparent-glass-icon-alphanumeric-x-mark.png">';
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


   

    

    




        function move() {

            x = setTimeout(function () {
                $('#' + c1).append(pcImage);
                $('#' + c2).append(pcImage);
                $('#' + c3).append(pcImage);
                $('#' + c4).append(pcImage);
            }, 500);

            //1st move
            //pick random number between 1 to 9
            ram = 1 + Math.floor((Math.random() * 9));
            ram2 = ram + 1;
            ram3 = ram - 1;

            if (player1.length == 1) {

                if (ram == player1[0]) {
                    if (player1[0] == 9) {
                        c1 = ram3;
                        cp.push(c1);
                    }

                    else {
                        c1 = ram2;
                        cp.push(c1);
                    }
                }

                else {
                    c1 = ram;
                    cp.push(c1);
                }
            }

            //2nd move
            else if (player1.length == 2) {

                //player1 in winning array
                for (i = 0; i < win.length; i++) {

                    // to find the winning subarray containing player's 2 numbers and return the 3rd the number in the winning subarray
                    winSub = win[i];
                    pcWin = winSub.filter(function (element) {
                        return this.indexOf(element) < 0;
                    }, player1);

                    if (pcWin.length == 1 && pcWin != c1) {
                        c2 = parseInt(pcWin);
                        cp.push(c2);
                        c1 = null;
                    }
                }

                //player1 not in winning array
                if (isNaN(c2)) {
                    taken.push(player1[0], player1[1], cp[0]);
                    pcWin2 = array.filter(function (element) {
                        return this.indexOf(element) < 0;
                    }, taken);

                    c2 = pcWin2[Math.floor(Math.random() * pcWin2.length)];
                    cp.push(c2);
                    c1 = null;
                }
            }

            //3rd move
            else if (player1.length == 3) {

                //pc in winning array
                for (i = 0; i < win.length; i++) {

                    winSub2 = win[i];
                    pcWin3 = winSub2.filter(function (element) {
                        return this.indexOf(element) < 0;
                    }, cp);


                    if (pcWin3.length == 1 && pcWin3 != player1[0] && pcWin3 != player1[1] ) {
                        c3 = parseInt(pcWin3);
                        cp.push(c3);
                        c1 = null;
                        c2 = null;
                        lose();
                    }
                }

                //player1 in winning array a
                if (isNaN(c3)) {

                    pl1.push(player1[0], player1[2]);

                    for (i = 0; i < win.length; i++) {

                        winSub2 = win[i];
                        plWin = winSub2.filter(function (element) {
                            return this.indexOf(element) < 0;
                        }, pl1);

                        if (plWin.length == 1 && plWin != cp[0] && plWin != cp[1] && plWin != player1[1]) {
                            c3 = parseInt(plWin);
                            cp.push(c3);
                            c2 = null;
                            c1 = null;


                        }
                    }

                    //player1 in winning array b
                    if (isNaN(c3)) {

                        pl2.push(player1[1], player1[2]);

                        for (i = 0; i < win.length; i++) {

                            winSub2 = win[i];
                            plWin2 = winSub2.filter(function (element) {
                                return this.indexOf(element) < 0;
                            }, pl2);

                            if (plWin2.length == 1 && plWin2 != cp[0] && plWin != cp[1] && plWin != player1[0]) {
                                c3 = parseInt(plWin2);
                                cp.push(c3);
                                c2 = null;
                                c1 = null;


                            }
                        }

                        //nothing in winning array
                        if (isNaN(c3)) {

                            taken2.push(player1[0], player1[1], player1[2], cp[0], cp[1]);
                            pcWin4 = array.filter(function (element) {
                                return this.indexOf(element) < 0;
                            }, taken2);

                            c3 = pcWin4[Math.floor(Math.random() * pcWin4.length)];
                            cp.push(c3);
                            c1 = null;
                            c2 = null;
                        }
                    }
                }
            }

            //4th move
            else if (player1.length == 4) {

                //pc in winning array a
                cp2.push(cp[0], cp[2]);

                for (i = 0; i < win.length; i++) {

                    winSub2 = win[i];
                    pcWin5 = winSub2.filter(function (element) {
                        return this.indexOf(element) < 0;
                    }, cp2);

                    if (pcWin5.length == 1 && pcWin5 != player1[0] && pcWin5 != player1[1] && pcWin5 != player1[2] && pcWin5 != player1[3]) {
                        c4 = parseInt(pcWin5);
                        cp.push(c4);
                        c1 = null;
                        c2 = null;
                        c3 = null;

                        lose();
                    }
                }

                if (isNaN(c4)) {

                    //pc in winning array b
                    cp3.push(cp[1], cp[2]);

                    for (i = 0; i < win.length; i++) {

                        winSub2 = win[i];
                        pcWin6 = winSub2.filter(function (element) {
                            return this.indexOf(element) < 0;
                        }, cp3);

                        if (pcWin6.length == 1 && pcWin6 != player1[0] && pcWin6 != player1[1] && pcWin6 != player1[2] && pcWin6 != player1[3]) {
                            c4 = parseInt(pcWin6);
                            cp.push(c4);
                            c1 = null;
                            c2 = null;
                            c3 = null;

                            lose();
                        }
                    }


                    //player1 in winning array a
                    if (isNaN(c4)) {
                        pl3.push(player1[0], player1[3]);

                        for (i = 0; i < win.length; i++) {

                            winSub2 = win[i];
                            plWin3 = winSub2.filter(function (element) {
                                return this.indexOf(element) < 0;
                            }, pl3);

                            if (plWin3.length == 1 && plWin3 != player1[1] && plWin3 != player1[2] && plWin3 != cp[0] && plWin3 != cp[1] && plWin3 != cp[2]) {
                                c4 = parseInt(plWin3);
                                cp.push(c4);
                                c2 = null;
                                c1 = null;
                                c3 = null;
                            }
                        }

                        //player1 in winning array b
                        if (isNaN(c4)) {

                            pl4.push(player1[1], player1[3]);

                            for (i = 0; i < win.length; i++) {

                                winSub2 = win[i];
                                plWin4 = winSub2.filter(function (element) {
                                    return this.indexOf(element) < 0;
                                }, pl4);

                                if (plWin4.length == 1 && plWin4 != player1[0] && plWin4 != player1[2] && plWin4 != cp[0] && plWin4 != cp[1] && plWin4 != cp[2]) {
                                    c4 = parseInt(plWin4);
                                    cp.push(c4);
                                    c2 = null;
                                    c1 = null;
                                    c3 = null;
                                }
                            }

                            //player1 in winning array c
                            if (isNaN(c4)) {

                                pl5.push(player1[2], player1[3]);

                                for (i = 0; i < win.length; i++) {

                                    winSub2 = win[i];
                                    plWin5 = winSub2.filter(function (element) {
                                        return this.indexOf(element) < 0;
                                    }, pl5);

                                    if (plWin5.length == 1 && plWin5 != player1[0] && plWin5 != player1[1] && plWin5 != cp[0] && plWin5 != cp[1] && plWin5 != cp[2]) {
                                        c4 = parseInt(plWin5);
                                        cp.push(c4);
                                        c2 = null;
                                        c1 = null;
                                        c3 = null;
                                    }
                                }

                                //nothing in winning array
                                if (isNaN(c4)) {

                                    taken3.push(player1[0], player1[1], player1[2], player1[3], cp[0], cp[1], cp[2]);
                                    pcWin7 = array.filter(function (element) {
                                        return this.indexOf(element) < 0;
                                    }, taken3);

                                    c4 = pcWin7[Math.floor(Math.random() * pcWin7.length)];
                                    cp.push(c4);
                                    c1 = null;
                                    c2 = null;
                                    c3 = null;
                                }
                            }
                        }
                    }
                }
            }

            //last move
            else over();

        }





        //player 1 win
        function wins() {
            win1 = [player1[0], player1[1], player1[2]];
            win2 = [player1[0], player1[1], player1[3]];
            win3 = [player1[0], player1[1], player1[4]];
            win4 = [player1[0], player1[2], player1[3]];
            win5 = [player1[0], player1[2], player1[4]];
            win6 = [player1[0], player1[3], player1[4]];
            win7 = [player1[1], player1[2], player1[3]];
            win8 = [player1[1], player1[2], player1[4]];
            win9 = [player1[2], player1[3], player1[4]];


            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking1 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win1);

                if (checking1.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking2 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win2);

                if (checking2.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking3 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win3);

                if (checking3.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking4 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win4);

                if (checking4.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking5 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win5);

                if (checking5.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking6 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win6);

                if (checking6.length == 0) {
                    winMessage();
                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking7 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win7);

                if (checking7.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking8 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win8);

                if (checking8.length == 0) {
                    winMessage();

                }
            }

            for (i = 0; i < win.length; i++) {
                winSub2 = win[i];
                checking9 = winSub2.filter(function (element) {
                    return this.indexOf(element) < 0;
                }, win9);

                if (checking9.length == 0) {
                    winMessage();

                }
            }
        }

    




    function restart() {
        setTimeout(function () {
            location.reload();
        }, 1000);
    }

    function winMessage() {

        setTimeout(function () {
            alert('Player One Wins!');
            clearInterval(x);

        }, 500);

        restart();
    }

    function winMessage2() {

        setTimeout(function () {
            alert('Player Two Wins!');

        }, 500);

        restart();
    }
    function lose() {
        if (checking1.length != 0 && checking2.length != 0 && checking3.length != 0 && checking4.length != 0
            && checking5.length != 0 && checking6.length != 0 && checking7.length != 0 && checking8.length != 0 && checking9.length != 0) {

            setTimeout(function () {
                alert('You Lose!');
                clearInterval(x);
            }, 1000);

            setTimeout(function () {
                location.reload();
            }, 1500);
        }
    }

    function over(){
        if (player1.length == 5) {

                clearInterval(x);
                setTimeout(function () {
                    alert('Game Over');
                }, 500);

                restart();
            }


    }

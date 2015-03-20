/**
 * Created by Nadia on 16.09.15.
 */

/**

 * Auto-generated code below aims at helping you parse

 * the standard input according to the problem statement.

 **/

var inputs = readline().split(' ');

var W = parseInt(inputs[0]); // width of the building.

var H = parseInt(inputs[1]); // height of the building.

var N = parseInt(readline()); // maximum number of turns before game over.

var inputs = readline().split(' ');

var X0 = parseInt(inputs[0]);

var Y0 = parseInt(inputs[1]);

function Batman ( x , y , w , h )

{

    this.x = x;

    this.y = y;

    this.buildingX0 = 0;

    this.buildingX1 = w -1;

    this.buildingY0 = 0;

    this.buildingY1 = h -1;



    this.U = function ()

    {

        this.buildingY1 = this.y;

        this.y -= Math.round( ( this.y - this.buildingY0 ) / 2 ) ;

    }



    this.R = function ()

    {

        this.buildingX0 = this.x;

        this.x += Math.round( (this.buildingX1 - this.x) / 2 )  ;

    }



    this.D = function ()

    {

        this.buildingY0 = this.y;

        this.y += Math.round ( (this.buildingY1 - this.y) / 2 ) ;

    }



    this.L = function()

    {

        this.buildingX1 = this.x;

        this.x -= Math.round( (this.x - this.buildingX0) / 2) ;

    }

}

var batman = new Batman ( X0 , Y0 , W, H);

while (true) {

    var BOMB_DIR = readline(); // the direction of the bombs from batman's

    current location (U, UR, R, DR, D, DL, L or UL)



    if( BOMB_DIR.length == 2)

    {

        batman[BOMB_DIR[0]]();

        batman[BOMB_DIR[1]]();

    }

    else

    {

        batman[BOMB_DIR]();

    }



    print(batman.x+' '+batman.y); // the location of the next window Batman should

    jump to.

}
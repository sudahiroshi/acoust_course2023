let element = document.querySelector('#graph1');
let graphicsCtx = element.getContext( '2d' );

document.querySelector('#btn2').addEventListener( 'click', () => {
    console.log( "graph" );
    graphicsCtx.beginPath();
    graphicsCtx.moveTo( 0, 400 );
    for( let x=1; x<element.width; x++ ) {
        graphicsCtx.lineTo( x, 200-(chanL[x*4]*200) );
    }
    graphicsCtx.stroke();
});
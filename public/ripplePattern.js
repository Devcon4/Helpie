registerPaint('ripple', class RipplePainter {
    static get inputProperties() { return ['--ripple-speed', '--ripple-color', '--ripple-origin-x', '--ripple-origin-y', '--animation-tick']; }
    paint(ctx, geo, properties) {
        // console.log(ctx);
        // console.log(geo);
        // console.log(properties);
        // console.log(properties.get('--grid-zoom'));

        let rippleSpeed = parseInt(properties.get('--ripple-speed').toString());

        // ctx.lineStyle(3, 0x424242, 1);
        const color = (properties.get('--ripple-color') || 'red').toString();

        const tick = parseInt(properties.get('--animation-tick').toString());

        const origin = {
            x: +(properties.get('--ripple-origin-x') || 0),
            y: +(properties.get('--ripple-origin-y') || 0),
        };

        if(tick > 1000) return;

        if(tick > 0) {

            if(tick > 750) {
                ctx.globalAlpha = 1-(tick%750)/250;
                console.log(1-(tick%750)/250);
            }

            ctx.fillStyle = color;
            ctx.arc(origin.x, origin.y, tick * (rippleSpeed), 0, 2 * Math.PI);
        }

        // const halfWidth = geo.width / 2;
        // const halfHeight = geo.height / 2;
        // const cellSize = desiredZoom;
        // for (let x = halfWidth % cellSize - (cellSize / 2); x < geo.width; x += cellSize) {
        //   ctx.moveTo(x, 0);
        //   ctx.lineTo(x, geo.height);
        // }
    
        // for (let y = halfHeight % cellSize - (cellSize / 2); y < geo.height; y += cellSize) {
        //   ctx.moveTo(0, y);
        //   ctx.lineTo(geo.width, y);
        // }

        ctx.fill();
    }
});
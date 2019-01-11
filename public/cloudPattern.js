
console.log('Register!');

const id = Math.random() * 100000;

let points = [];

registerPaint('cloudPattern', class CloudPainter {
    static get inputProperties() { return ['--cloud-count', '--cloud-speed', '--cloud-color', '--cloud-seed']; }

    get points() {
        return points;
    }

    set points(val) {
        points = val;
    }

    constructor() {
        this.points = [];
    }

    get cloudLookup() {
        return [
            (ctx, origin) => this.cloudSmall(ctx, origin),
            (ctx, origin) => this.cloudNormal(ctx, origin),
            (ctx, origin) => this.cloudLarge(ctx, origin)
        ];
    }

    addPoint(geo) {
        let mod = this.randomPoint();

        let point = {};
        console.log(mod);
        point.x = mod.x * (geo.width / 2);
        point.y = -100 + (mod.y * (geo.height * 1.2));
        point.cloudFunc = this.cloudLookup[Math.floor(Math.random() * this.cloudLookup.length)];

        return point;
    }
        
    randomPoint() {
        return {x: Math.random(), y: Math.random() };
    }

    paint(ctx, geo, properties) {
        const seed = parseInt(properties.get('--cloud-seed').toString());

        console.log(id);
        // console.log(ctx);
        // console.log(geo);
        // console.log(properties);

        const count = parseInt((properties.get('--cloud-count') || 3).toString());
        const speed = parseInt((properties.get('--cloud-speed')).toString()) || 3;

        if(typeof count !== "number") {
            console.error('Property --cloud-count is not a number!');
        }

        console.log(count);
        const length = this.points.length;
        if(length < count) {
            for(let x = length; x < count; x++) {
                this.points.push(this.addPoint(geo));
            }
        }

        console.log(this.points);
        const color = (properties.get('--cloud-color') || 'lightgray').toString();

        for(let i in this.points) {
            let point = this.points[i];
            ctx.fillStyle = color;
            point.cloudFunc(ctx, point);
        }

        // console.log(properties.get('--grid-zoom'));

        // let cloudSpeed = parseInt(properties.get('--cloud-speed').toString());

        // ctx.lineStyle(3, 0x424242, 1);
    }

    cloudNormal(ctx, origin) {
        // layer1/Ellipse
        ctx.save();
        ctx.translate(origin.x, origin.y);
        ctx.beginPath();
        ctx.moveTo(203.0, 129.0);
        ctx.bezierCurveTo(203.0, 173.7, 157.6, 210.0, 101.5, 210.0);
        ctx.bezierCurveTo(45.4, 210.0, 0.0, 173.7, 0.0, 129.0);
        ctx.bezierCurveTo(0.0, 84.3, 45.4, 48.0, 101.5, 48.0);
        ctx.bezierCurveTo(157.6, 48.0, 203.0, 84.3, 203.0, 129.0);
        ctx.closePath();
        ctx.fill();

        // layer1/Ellipse
        ctx.beginPath();
        ctx.moveTo(333.0, 105.0);
        ctx.bezierCurveTo(333.0, 163.0, 284.6, 210.0, 225.0, 210.0);
        ctx.bezierCurveTo(165.4, 210.0, 117.0, 163.0, 117.0, 105.0);
        ctx.bezierCurveTo(117.0, 47.0, 165.4, 0.0, 225.0, 0.0);
        ctx.bezierCurveTo(284.6, 0.0, 333.0, 47.0, 333.0, 105.0);
        ctx.closePath();
        ctx.fill();

        // layer1/Ellipse
        ctx.beginPath();
        ctx.moveTo(239.0, 110.5);
        ctx.bezierCurveTo(239.0, 165.5, 290.0, 210.0, 353.0, 210.0);
        ctx.bezierCurveTo(416.0, 210.0, 467.0, 165.5, 467.0, 110.5);
        ctx.bezierCurveTo(467.0, 55.5, 416.0, 11.0, 353.0, 11.0);
        ctx.bezierCurveTo(290.0, 11.0, 239.0, 55.5, 239.0, 110.5);
        ctx.closePath();
        ctx.fill();

        // layer1/Ellipse
        ctx.beginPath();
        ctx.moveTo(346.0, 126.0);
        ctx.bezierCurveTo(346.0, 172.4, 400.4, 210.0, 467.5, 210.0);
        ctx.bezierCurveTo(534.6, 210.0, 589.0, 172.4, 589.0, 126.0);
        ctx.bezierCurveTo(589.0, 79.6, 534.6, 42.0, 467.5, 42.0);
        ctx.bezierCurveTo(400.4, 42.0, 346.0, 79.6, 346.0, 126.0);
        ctx.closePath();
        ctx.fill();

        // layer1/Rectangle
        ctx.beginPath();
        ctx.moveTo(474.0, 210.0);
        ctx.lineTo(102.0, 210.0);
        ctx.lineTo(102.0, 129.0);
        ctx.lineTo(474.0, 129.0);
        ctx.lineTo(474.0, 210.0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    cloudLarge(ctx, origin) {

      // layer1/Ellipse
      ctx.save();
      ctx.translate(origin.x, origin.y);
      ctx.beginPath();
      ctx.moveTo(203.0, 178.0);
      ctx.bezierCurveTo(203.0, 222.7, 157.6, 259.0, 101.5, 259.0);
      ctx.bezierCurveTo(45.4, 259.0, 0.0, 222.7, 0.0, 178.0);
      ctx.bezierCurveTo(0.0, 133.3, 45.4, 97.0, 101.5, 97.0);
      ctx.bezierCurveTo(157.6, 97.0, 203.0, 133.3, 203.0, 178.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(333.0, 154.0);
      ctx.bezierCurveTo(333.0, 212.0, 284.6, 259.0, 225.0, 259.0);
      ctx.bezierCurveTo(165.4, 259.0, 117.0, 212.0, 117.0, 154.0);
      ctx.bezierCurveTo(117.0, 96.0, 165.4, 49.0, 225.0, 49.0);
      ctx.bezierCurveTo(284.6, 49.0, 333.0, 96.0, 333.0, 154.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(239.0, 129.5);
      ctx.bezierCurveTo(239.0, 201.0, 290.0, 259.0, 353.0, 259.0);
      ctx.bezierCurveTo(416.0, 259.0, 467.0, 201.0, 467.0, 129.5);
      ctx.bezierCurveTo(467.0, 58.0, 416.0, 0.0, 353.0, 0.0);
      ctx.bezierCurveTo(290.0, 0.0, 239.0, 58.0, 239.0, 129.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(353.0, 159.5);
      ctx.bezierCurveTo(353.0, 214.5, 404.0, 259.0, 467.0, 259.0);
      ctx.bezierCurveTo(530.0, 259.0, 581.0, 214.5, 581.0, 159.5);
      ctx.bezierCurveTo(581.0, 104.5, 530.0, 60.0, 467.0, 60.0);
      ctx.bezierCurveTo(404.0, 60.0, 353.0, 104.5, 353.0, 159.5);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(449.0, 175.0);
      ctx.bezierCurveTo(449.0, 221.4, 503.4, 259.0, 570.5, 259.0);
      ctx.bezierCurveTo(637.6, 259.0, 692.0, 221.4, 692.0, 175.0);
      ctx.bezierCurveTo(692.0, 128.6, 637.6, 91.0, 570.5, 91.0);
      ctx.bezierCurveTo(503.4, 91.0, 449.0, 128.6, 449.0, 175.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Rectangle
      ctx.beginPath();
      ctx.moveTo(570.0, 259.0);
      ctx.lineTo(102.0, 259.0);
      ctx.lineTo(102.0, 178.0);
      ctx.lineTo(570.0, 178.0);
      ctx.lineTo(570.0, 259.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    cloudSmall(ctx, origin) {

      // layer1/Ellipse
      ctx.save();
      ctx.translate(origin.x, origin.y);
      ctx.beginPath();
      ctx.moveTo(203.0, 129.0);
      ctx.bezierCurveTo(203.0, 173.7, 157.6, 210.0, 101.5, 210.0);
      ctx.bezierCurveTo(45.4, 210.0, 0.0, 173.7, 0.0, 129.0);
      ctx.bezierCurveTo(0.0, 84.3, 45.4, 48.0, 101.5, 48.0);
      ctx.bezierCurveTo(157.6, 48.0, 203.0, 84.3, 203.0, 129.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(253.0, 105.0);
      ctx.bezierCurveTo(253.0, 163.0, 204.6, 210.0, 145.0, 210.0);
      ctx.bezierCurveTo(85.4, 210.0, 37.0, 163.0, 37.0, 105.0);
      ctx.bezierCurveTo(37.0, 47.0, 85.4, 0.0, 145.0, 0.0);
      ctx.bezierCurveTo(204.6, 0.0, 253.0, 47.0, 253.0, 105.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(343.0, 111.0);
      ctx.bezierCurveTo(343.0, 165.7, 298.7, 210.0, 244.0, 210.0);
      ctx.bezierCurveTo(189.3, 210.0, 145.0, 165.7, 145.0, 111.0);
      ctx.bezierCurveTo(145.0, 56.3, 189.3, 12.0, 244.0, 12.0);
      ctx.bezierCurveTo(298.7, 12.0, 343.0, 56.3, 343.0, 111.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Ellipse
      ctx.beginPath();
      ctx.moveTo(154.0, 129.0);
      ctx.bezierCurveTo(154.0, 173.7, 208.4, 210.0, 275.5, 210.0);
      ctx.bezierCurveTo(342.6, 210.0, 397.0, 173.7, 397.0, 129.0);
      ctx.bezierCurveTo(397.0, 84.3, 342.6, 48.0, 275.5, 48.0);
      ctx.bezierCurveTo(208.4, 48.0, 154.0, 84.3, 154.0, 129.0);
      ctx.closePath();
      ctx.fill();

      // layer1/Rectangle
      ctx.beginPath();
      ctx.moveTo(285.0, 210.0);
      ctx.lineTo(102.0, 210.0);
      ctx.lineTo(102.0, 129.0);
      ctx.lineTo(285.0, 129.0);
      ctx.lineTo(285.0, 210.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

});
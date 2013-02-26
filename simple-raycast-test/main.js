window.addEventListener('load', function () {
	var canvas = document.getElementById('viewport');
	main(canvas, 25, 25);
})

var paint = {};

function main (canvas, rx, ry) {
	var sph = sphere(10, 10, 10);

	var ctx = canvas.getContext('2d');

	var canel = document.createElement('canvas');
	var ctxo = canel.getContext('2d');
	
	var imgd = ctxo.createImageData(canvas.width, canvas.height);

	var camx = 0, camy = 0;
	paint = paintall(ctx, ctxo, imgd, sph, rx, ry, camx, camy);

	console.log('sphere points:', sph);
}

function sphere (sx, sy, sz) {
	var psx = sx / 2 | 0, nsx = -psx,
		psy = sy / 2 | 0, nsy = -psy,
		psz = sz / 2 | 0, nsz = -psz,
		points = { sx: sx, sy: sy, sz: sz };

	for (var x = nsx; x < psx; x++) {
		for (var y = nsy; y < psy; y++) {
			for (var z = nsz; z < psz; z++) {
				// if (x * x + y * y + z * z == 1) {
				if (Math.sqrt(x * x + y * y + z * z) % 1 == 0) {
					points[x * sx + y] = z;
				}
			}
		}
	}

	return points;
}

function paintall(ctx, ctxo, imgd, points, rx, ry, camx, camy) {
	var pw = imgd.width / rx | 0,
		ph = imgd.height / ry | 0,
		color = [0, 0, 0, 255];

	for (var y = 0, h = imgd.height; y < h; y++) {
		for (var x = 0, w = imgd.width; x < w; x++) {
			var index = (y + x * w) * 4;
			color = raycast(points, x, y, pw, ph, color);
			imgd[index    ] = color[0];
			imgd[index + 1] = color[1];
			imgd[index + 2] = color[2];
			imgd[index + 3] = color[3];
		}
	}

	ctxo.putImageData(imgd, 0, 0);
	console.log(ctxo);
	ctx.drawImage(ctxo.canvas, 0, 0);

	return this;
}

function raycast (points, x, y, pw, ph, color) {
	// var i = x * points.sx * 
	// if (points[)
	
	color[0] = 127;

	return color;
}

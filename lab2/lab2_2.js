
function getPi(method) {
	var currentPi;

	switch(method) {
		case 1:
			return {
				'name': 'Метод Монте-Карло',
				'compute': function() {
					var N = 10000;
					var s = 0;
					for(i = 0; i < N; i++) {
						var x = Math.random();
						var y = Math.random();
						if(x * x + y * y <= 1) {
							s++;
						}
					}
					return 4 * s / N;
				}
			};

		case 2:
			return {
				'name': 'Ряды Лейбница',
				'compute': function() {
					var pi = 0;
					var c = 0;
					for(i = 1; i <=1000; i++) {
						c = math.pow(-1, i);
						pi += (4*c) / (2*i+1);
					}
					return pi;
				}
			};

		case 3:
			return {
				'name': 'Произведения (6-я формула)',
				'compute': function() {
					var pi = 0;
					var k = 1;
					for(k = 1; i <=100; i++) {
						k = pow(k, 2)/(pow(k,2)-pow((5/6),2));
						}
					pi=6/5*1/2*k;
					return pi;
				}
			};
	}
}

function print(x) {
	if(x instanceof Object && x.name) {
		console.log(x.name);
	} else {
		console.log(x);
	}
}

method1 = getPi(1);
method2 = getPi(2);
method3 = getPi(3);

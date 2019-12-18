let regexIsNumber = /[0-9]+/;

function shuntingYard(input) {
	let stack = [], queue = [], flag = true;
	for (let i = 0; i < input.length; i++) {
		if (regexIsNumber.test(input[i])) {
			queue.push(input[i])
		}
		else {
			switch (input[i]) {
				case "+":
				case "-":
					while (flag) {
						if (stack.length !== 0) {
							queue.push(stack.pop());
						}
						else {
							flag = false;
							stack.push(input[i]);
						}
					}
					flag = true;
					break;
				case "*":
				case "/":
					while (flag) {
						if (stack[stack.length - 1] !== "+" && stack[stack.length - 1] !== "-" && stack.length !== 0) {
							queue.push(stack.pop());
						}
						else {
							flag = false;
							stack.push(input[i]);
						}
					}
					flag = true;
					break;
				default:
					stack.push(input[i]);
			}
		}
	}
	while (stack.length !== 0) {
		queue.push(stack.pop());
	}
	return queue;
}


function reversePolishNotation(input) {
	let stack = [], queue = shuntingYard(input), num1, num2, oper;
	while (queue.length !== 0) {
		if (regexIsNumber.test(queue[0])) {
			stack.push(queue.shift());
		}
		else {
			num1 = parseFloat(stack.pop());
			num2 = parseFloat(stack.pop());
			oper = queue.shift();
			// eslint-disable-next-line
			switch (oper) {
				case "+":
					stack.push(num2 + num1);
					break;
				case "-":
					stack.push(num2 - num1);
					break;
				case "*":
					stack.push(num2 * num1);
					break;
				case "/":
					stack.push(num2 / num1);
					break;
				case "^":
					stack.push(Math.pow(num2, num1));
					break;
			}
		}
	}
	return +parseFloat(stack.pop()).toFixed(4);
}

export { reversePolishNotation };
const button = document.getElementById("btn");
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

function delayMessage(time) {
	return new Promise((resolve , reject) => {
		setTimeout(() => {
			resolve();
		}, time)
	})
}

async function showMessage() {
	const text = text.innerText.value;
	const delay = Number(delayInput.value);
	output.innerText = "";
	await delayMessage(delay);
	output.innerText = text;
}

button.addEventListener("click" , () => {
	showMessage;
})
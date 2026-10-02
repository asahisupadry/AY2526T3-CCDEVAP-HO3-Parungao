let n1, n2, op, cAns;
let score = 0;
const operators ={"+", "-", "*"];

function generateQuestion(){
	n1 = Math.floor(Math.random() * 11);
	n2 = Math.floor(Math.random() * 11);
	op = operators[Math.floor(Math.random() * operators.length)];

	if(op =="+"){
		cAns = n1+n2;
		}
		elseif(op == "-"{
			cAns = n1-n2;
		}
		else{
			cAns = n1*n2;
			}
			
	document.getElementById("question").innerHTML =n1 + " " + op + " " +n2;
}

function checkAnswer(){
	let userAnswer = Number(document.getElementById("answer").value);
	let message = document.getElementById("message");
	
	if(userAnswer == cAns){
		score++;
		message.innerHTML = "Correct";
		message.style.color = "green";
		} else{
			message.innerHTML = "Wrong. correct answer is " + cAns;
			message.style.color = "red";
		}
		
	document.getElementById("score").innerHTML = score;
	document.getElementById("answer").value = "";
	
	generateQuestion();
	
	if (score == 5){
	document.getElementById("div-questions").style.display = "none";
	document.getElementById("div-success").style.display ="block";
	}
}

function playAgain(){
	score = 0;
	document.getElementById("score").innerHTML=score;
	document.getElementById("message").innerHTML = "";
	
	document.getElementById("div-success").style.display="none";
	document.getElementById("div-questions").style.display="block";
	
	generateQuestion();
}
generateQuestion();

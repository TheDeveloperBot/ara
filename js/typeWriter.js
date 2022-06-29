
let i = 0;
let text1 = "Hi there, miss Rania! I know this might be cheesy because I never actually speak to you like this but I guess there's always a first for everything. When I think about you, I smile. When I dream about you, I sleep better. I love our talks, your awkward sense of humor and your soft kisses on the forehead. The fact that you would fight a bear for me is astounding and your ability to make me feel safe and loved takes a weight from my shoulders that I didn’t even know was there. Thank you so much Chris!";
let text2 = "Today is the Big Day."
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};

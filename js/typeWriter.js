
let i = 0;
let text1 = "Hi there, miss Rania! I know this might be cheesy because I've never actually spoken to you like this but I guess there's always a first time for everything. To be honest, I could never comprehend my feelings into words fully, but since that might be the only option available right now, I’ll have to use them. So I recommend you to take a seat and put on your glasses. I'm not good when it comes to typing out my feelings into words so I'm sorry if it seems like it's going everywhere I'll try to keep it together and clean. I know we took a slow start when we first met but know that this comes from a guy who had a past that was broken and he was used dealing with everything on his own. He was used and poorly treated without realizing his life is gonna have a big change since he's about to meet someone who's gonna see him for who he is. yeah I fell in love with you hardcore but I wasn't sure about it myself because I never had anyone who cared about me like you did, by time goes on I started loving every second we spent together. I started loving you every second of the day. And I’ve never loved anyone as I love you that's when I knew I actually have feelings for you. I remember that when I found about that I was crying over you not because I was in pain but because I felt so blessed that I just couldn't hide my emotions. Even till now you are on my mind every moment. I’ve never missed anyone as I miss you. You are someone special to me. I couldn't even bring myself to think about losing you for even a second. Even if I say I love you to you a million times, it is simply not enough. Words are never enough to express someone's feelings. That's why I always try to annoy you in some kind of way but don't take me too wrong no matter how many times we fight or argue, I always want to work it out. You have touched me more profoundly than I ever thought you could. No one could ever take the place that you're holding right now in my heart.. Because you are amazing in every way and I am better with you. You understand me as no one else can. I love you and will always fight for you. To be honest to me I have never experienced such love and appreciation. In such fucked and messed up world, finding someone who genuinely cares about you is a huge blessing. So I have to thank you for dealing with every negative bit about me. Nobody compares to you. It’s a rare thing to find both a lover and a best friend in life. It feels so wonderful to have both things in my life. I'm really blessed to have someone like you who I can genuinely feel comfortable with. You helped me through the bad times and being there to help me celebrate the good times, I cherish all of the moments that we shared together. Knowing you and having you in my life has filled me with so much hope and a deeper sense of appreciation for everything that I have in my life. Because of you, I feel special. Before you, my life was so much harder and darker. Before you were by my side, I felt so cold and alone. I never knew what warmth and love truly felt like until you were here. I can't stop being myself to lose someone like you. even when you feel weak, I am here to be strong for you. When you are strong, I’m here to lift you and make you stronger. When you are sad, I am here to bring a smile to your face. And when you are happy, I am here to enjoy every minute of it. Because you do all these things for me. When I am weak, you give me strength. When I am sad, you can make me smile every time. I am so grateful for you and our life together. Just by thinking about you makes me smile. I just love everything about you, our random long talks, your awkward sense of humor, your cute laughs, your soft voice, and there are many more that I could just keep going all day long. The fact is everything that you've done for me is astounding and your ability to make me feel safe and loved took a big weight from my shoulders that I didn’t even know was there. Thank you so much Rania for everything!";
let text2 = "ps: good luck on your upcoming exam, you have my full support and I know you can do it! always remember im here for you and you worked for your exam! I love you so much ara (^з^)"
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

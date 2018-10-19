	const target = document.querySelectorAll('.item');
	document.addEventListener('scroll', handlerScroll);
	window.addEventListener('resize', handlerScroll)
	
	function handlerScroll () {
		const center = document.documentElement.clientHeight/2;
		target.forEach((elem) => {
			const data = elem.getBoundingClientRect();
			const height = data.height;
			const top = data.top;
			const position = center - (height/2);
			elem.style.opacity = (top <= position) ? 1 : 0.2
		})
	}


// 	const div = document.createElement('div');
// 	const target = document.getElementById('one');
// 	const mutationConfig = {
// 		childList: true,
// 		subtree: true,
// 		characterData: true,
// 	}

// 	const observer = new MutationObserver(function(mutations){
// 		  const elem = mutations[0].addedNodes[0]
// 		  appendTG(elem)
// 	});
// 	observer.observe(target, mutationConfig)

// function appendTG(elem){
// 	const clone = elem.cloneNode(true)
// 	const next = document.getElementById('two');
// 	next.appendChild(clone)
// }

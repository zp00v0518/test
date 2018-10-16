	const div = document.createElement('div');
	const target = document.getElementById('one');
	const mutationConfig = {
		childList: true,
		subtree: true,
		characterData: true,
	}

	const observer = new MutationObserver(function(mutations){
		  const elem = mutations[0].addedNodes[0]
		  appendTG(elem)
	});
	observer.observe(target, mutationConfig)

function appendTG(elem){
	const clone = elem.cloneNode(true)
	const next = document.getElementById('two');
	next.appendChild(clone)
}


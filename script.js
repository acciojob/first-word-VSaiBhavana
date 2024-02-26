function firstWord(s) {
  let Fs=s.split(' ');
	let F=Fs[0];
	return F;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

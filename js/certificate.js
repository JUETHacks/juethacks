window.addEventListener('load', () => {
	document.getElementById('getCert').addEventListener('click', fetchCert);
	document.getElementById('certID').addEventListener('keypress', e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			fetchCert();
		}
	});
});

async function fetchCert() {
	const IDElement = document.getElementById('certID');

	if (!IDElement.checkValidity()) {
		return IDElement.reportValidity();
	}

	const ID = IDElement.value;
	
	if (!ID) {
		return alert('Invalid ID!');
	}

	try {
		const url = window.CERT_URL + `certificate/${ID}`;
		// const resp = await axios.head(url);

		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.target = '_blank';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	} catch (e) {
		console.error(e);
		return alert('Invalid ID!');
	}
}
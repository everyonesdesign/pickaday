function killView(view) {
	view.stopListening();
	view.el.innerHTML = '';
}

module.exports = {
	killView,
};
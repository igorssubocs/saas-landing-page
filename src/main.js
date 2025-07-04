const features = [
	{
		image: './src/assets/features/cards.svg',
		cardTitle: "Customizable card",
		cardSubtitle: "Custom your own card for your exact incomes and expenses needs.",
	},
	{
		image: './src/assets/features/coin.svg',
		cardTitle: "No payment fee",
		cardSubtitle: "Transfer your payment all over the world with no payment fee.",
	},
	{
		image: './src/assets/features/wallet.svg',
		cardTitle: "All in one place",
		cardSubtitle: "The right place to keep your credit and debit cards, boarding passes & more.",
	},
];


document.addEventListener("DOMContentLoaded", () => {
	
	const list = document.getElementById("features-list");

	features.forEach(({ image, cardTitle, cardSubtitle }) => {
		const li = document.createElement("li");
		li.className = "card";
		li.innerHTML = `
			<img src="${image}" alt="${cardTitle}" class="card__img" />
			<h3 class="card__title">${cardTitle}</h3>
			<p class="card__subtitle">${cardSubtitle}</p>
		`;
		list.appendChild(li);
	});
});

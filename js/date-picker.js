import datepicker from "js-datepicker";

const dateInput=document.getElementById("date");
datepicker("#date", {
	startDay: 1,
	showAllDates: true,
	disableMobile: true,
	maxDate: new Date(2020, 4, 10),
	minDate: new Date().toISOString().substring(0, 10),
	dateSelected: new Date(2020, 0, 5),
	overlayPlaceholder: "4-Stelliges Jahr",
	customMonths: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	],
	customOverlayMonths: [
		"Jan",
		"Feb",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"Aug",
		"Sep",
		"Okt",
		"Nov",
		"Dez"
	],
	customDays: ["So", "Mo", "Di", "Mi", "DO", "Fr", "Sa"],
	overlayButton: "Auswahl",
	onSelect: (instance, date) => {
		const value=date.toISOString().substring(0, 10);
		console.log(date);
		dateInput.value=value;
	}
});

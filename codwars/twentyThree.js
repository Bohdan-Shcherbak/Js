// Стоимость дней отпуска, включая скидку
function rentalCarCost(d) { return d < 3 ? d*40 : d >= 7 ? d * 40-50 : d >= 3 ? d * 40-20 : 0;}

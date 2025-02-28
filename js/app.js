// contructors

function vehicle(brand, model, year, type) {
  this.brand = brand;;
  this.model = model;
  this.year = year;
  this.type = type;
}

function UI(){}

// fill the year options
UI.prototype.fillYearOptions = () => {
    const maxyear = new Date().getFullYear(),
          minyear = maxyear - 20;

    const selectYear = document.querySelector('#year');

    for(let i = maxyear; i > minyear; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// instance UI functions
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.fillYearOptions();
});

function eventlisteners() {
    const form = document.querySelector('#insurance-form');
    form.addEventListener('submit', quoteInsurance)
}
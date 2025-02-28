// contructors

function vehicle(brand, model, year, coverage) {
  this.brand = brand;;
  this.model = model;
  this.year = year;
  this.coverage = coverage;
}
// quote the data already processed

vehicle.prototype.quote = function() {
    let basePrice = 2000;
    let coverage = this.coverage;
    let year = this.year;
    let brand = this.brand

  if(coverage === 'basic'){
    basePrice = basePrice * 1
  } else if(coverage === 'normal'){
    basePrice = basePrice * 1.5
  } else if(coverage === 'full'){
    basePrice = basePrice * 2
  }
  if(brand === 'toyota' || brand === 'nissan' || brand === 'honda'){
    basePrice = basePrice * 1.1
  } else {
    basePrice = basePrice * 1.2
  }
// read the year
  const currentYear = new Date().getFullYear();
//for each year the price get reduced by 3%
  const difference = currentYear - this.year
  for (let i = 0; i < difference; i++) {
    basePrice = basePrice * 0.97
  }
  return basePrice.toFixed(2);
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
// Show the error message if the data is not fullfilled
UI.prototype.showMessage = (message, type, vehicle) => {
    const form = document.querySelector('#insurance-form');
    const errorDiv = document.createElement('div');
    if (type === 'error'){
        errorDiv.className = `alert ${type}`;
        errorDiv.textContent = message;
        if (!document.querySelector(`.${type}`)){
            form.insertBefore(errorDiv, document.querySelector('.custom-loader'));
            setTimeout(() => errorDiv.remove(), 3000);
        }
    } else {
        errorDiv.className = `alert ${type}`;
        errorDiv.innerHTML = message;
        form.insertBefore(errorDiv, document.querySelector('.custom-loader'));
        document.querySelector('.custom-loader').classList.add('show');
        setTimeout(() => {
            document.querySelector('.custom-loader').classList.remove('show');
            errorDiv.innerHTML = `Marca: ${vehicle.brand} <br/>
            Modelo: ${vehicle.model} <br/>
            Año: ${vehicle.year} <br/>
            Seguro: ${vehicle.coverage} <br/>
            Total a pagar: $${vehicle.quote()}`;

        }, 3000);
    }
}

// instance UI functions
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
    ui.fillYearOptions();
});

eventlisteners()
function eventlisteners() {
    const form = document.querySelector('#insurance-form');
    form.addEventListener('submit', quoteInsurance)
}

function quoteInsurance(e) {
    e.preventDefault();
    //read the form data
    const brand = document.querySelector('#brand').value,
          model = document.querySelector('#model').value,
          year = document.querySelector('#year').value,
          coverage = document.querySelector('#coverage').value;
    if (brand === '' || model === '' || year === '' || coverage === '') {
        ui.showMessage('Todos los campos son obligatorios', 'error');
        return;
    } else {
        const quoted = new vehicle(brand, model, year, coverage)
        quoted.quote()
        ui.showMessage('Cotizando', 'correct', quoted)
    }
}
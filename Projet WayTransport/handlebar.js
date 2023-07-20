const source = document.getElementById('templateHB').innerHTML;
const template = Handlebars.compile(source);

const contextSalon = {
    lesMeublesSalon: [
        {
            image: 'images/canape.png',
            element: 'Canapé',
            quantity: 0,
            index: 0,
            volume: 3
        },
        {
            image: 'images/canape.png',
            element: 'Lit',
            quantity: 0,
            index: 0,
            volume: 4
        },
        {
            image: 'images/bed.svg.png',
            element: 'Lit double',
            quantity: 0,
            index: 0,
            volume: 1
        }
    ]
};

const compiledHtmlSalon = template(contextSalon);
const injectionObjetSalon = document.getElementById('meuble-salon');
injectionObjetSalon.innerHTML = compiledHtmlSalon;

const contextChambre = {
    lesMeublesChambre: [
        {
            image: 'images/bed.svg.png',
            element: 'Lit double',
            quantity: 0,
            index: 0,
            volume: 1
        }
    ]
}

const compiledHtmlChambre = template(contextChambre);
const injectionObjetChambre = document.getElementById('meuble-chambre');
injectionObjetChambre.innerHTML = compiledHtmlChambre;

const contextCuisine = {
    lesMeublesCuisine: [
        {
            image: 'images/frigo.svg',
            element: 'Frigo',
            quantity: 0,
            index: 0,
            volume: 1
        }
    ]
}

const compiledHtmlCuisine = template(contextCuisine);
const injectionObjetCuisine = document.getElementById('meuble-cuisine');
injectionObjetCuisine.innerHTML = compiledHtmlCuisine;

const contextBain = {
    lesMeublesBain: [
        {
            image: 'images/machine-a-laver.svg',
            element: 'Machine à laver',
            quantity: 0,
            index: 0,
            volume: 1
        }
    ]
}

const compiledHtmlBain = template(contextBain);
const injectionObjetBain = document.getElementById('meuble-bain');
injectionObjetBain.innerHTML = compiledHtmlBain;


////////////////////////////////////////////////////////////////////////////////
            //FUNCTIONS
///////////////////////////////////////////////////////////////////////////////


let totalVolume = 0; //use variable globale pour stocker le volume total des meubles 

function renderCategory (containerElement, products) {
    // initially render our HTML with Handlebars
    containerElement.innerHTML = template({
      products: products
    });
  
    const addOneBtns = containerElement.querySelectorAll("[data-increase]");
    const removeOneBtns = containerElement.querySelectorAll("[data-decrease]");
    const quantityDisplays = containerElement.querySelectorAll("[data-quantity]");
  
    function renderQuantities () {
      quantityDisplays.forEach((quantityDisplay, index) => {
        const quantity = products[index].quantity;
        quantityDisplay.textContent = String(quantity);
      }) 
    };

    function updateTotalVolumeDisplay() {
      const totalVolumeDisplay = document.getElementById("volume-total");
      totalVolumeDisplay.textContent = totalVolume;
    }
    function updateTotalPriceDisplay() {
      const totalPriceDisplay = document.getElementById("prix-total");
      totalPrice = totalVolume * 5 + '€';
      totalPriceDisplay.textContent = totalPrice;
    }

    addOneBtns.forEach(addOneBtn => {
        addOneBtn.addEventListener('click', function (event) {
          const index = Number(event.target.dataset.increase);
          products[index].quantity += 1;
          totalVolume += products[index].volume;
          renderQuantities();
          updateTotalVolumeDisplay();
          updateTotalPriceDisplay();
        });
      });
  
      removeOneBtns.forEach(removeOneBtn => {
        removeOneBtn.addEventListener('click', function (event) {
          const index = Number(event.target.dataset.decrease);
          if (products[index].quantity === 0) { return; }
          products[index].quantity = products[index].quantity - 1;
          totalVolume -= products[index].volume;
          if(totalVolume < 0){
            totalVolume = 0;
          }
          renderQuantities();
          updateTotalVolumeDisplay();
          updateTotalPriceDisplay();
        });
      });
      
      function updateTotalVolumeDisplay() {
        const totalVolumeDisplay = document.getElementById("volume-total");
        totalVolumeDisplay.textContent = totalVolume;
      }
      function updateTotalPriceDisplay() {
        const totalPriceDisplay = document.getElementById("prix-total");
        totalPrice = totalVolume * 5 + '€';
        totalPriceDisplay.textContent = totalPrice;
      }
    }

///////////////////////////////////////////////////////////////////////////////////////////////


  const salonContainer = document.getElementById('meuble-salon');
  renderCategory(salonContainer, contextSalon.lesMeublesSalon);

  const chambreContainer = document.getElementById('meuble-chambre');
  renderCategory(chambreContainer, contextChambre.lesMeublesChambre);

  const cuisineContainer = document.getElementById('meuble-cuisine');
  renderCategory(cuisineContainer, contextCuisine.lesMeublesCuisine);

  const bainContainer = document.getElementById('meuble-bain');
  renderCategory(bainContainer, contextBain.lesMeublesBain);
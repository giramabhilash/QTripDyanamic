import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    let result = await  fetch(`${config.backendEndpoint}/reservations`)
    let data = await result.json();
    return data;
  } catch (error) {
    return null;
  }

  // Place holder for functionality to work in the Stubs
 
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  //    let banner = document.getElementById("no-reservation-banner");
  //    let parentTable =document.getElementById("reservation-table-parent");
  //    let tableBody = document.getElementById("reservation-table");
  
  //  if(reservations.length){
  //     banner.setAttribute("style", "display:none")
  //     parentTable.setAttribute("style", "display:block")
    
  //   reservations.forEach(element => {
  //     let date = new Date(element.date);
  //     let bookingTime = new Date(element.time);

  //     tableBody.innerHTML+=`
  //     <tr>
  //     <td>${element.id}</td>
  //     <td>${element.name}</td>
  //     <td>${element.adventureName}</td>
  //     <td>${element.person}</td>
  //     <td>${date.toLocaleDateString("en-IN")}</td>
  //     <td>${element.price}</td>
  //     <td>${bookingTime.toLocalString("en-IN",{day:"numeric",month:"long",year:"numeric"})}, ${bookingTime.toLocaleTimeString("en-IN")}</td>
  //     <td><button class="reservation-visit-button" id="${element.id}">
  //     <a href="../detail/?adventure=${element.adventure}">Visit Adventure</a>
  //     </button>
  //     </td>
  //     </tr>`
  //   });  
  //  }
  //  else{
  //   banner.setAttribute("style", "display:block")
  //     parentTable.setAttribute("style", "display:none")
  //  }
    // TODO: MODULE_RESERVATIONS
    // 1. Add the Reservations to the HTML DOM so that they show up in the table
    console.log(reservations)
    let banner = document.getElementById("no-reservation-banner")
    //Conditionally render the no-reservation-banner and reservation-table-parent
    let table = document.getElementById("reservation-table-parent")
    let tbody = document.getElementById("reservation-table")
    
   if(reservations.length){
         banner.setAttribute('style',"display:none")
         table.setAttribute('style',"display:block")
    reservations.forEach(element => {
      let date = new Date(element.date)
      let bookingDateAndTime = new Date(element.time)
      console.log(date)
        tbody.innerHTML+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.adventureName}</td>
        <td>${element.person}</td>
        <td>${date.toLocaleDateString("en-IN")}</td>
        <td>${element.price}</td>
        <td>${bookingDateAndTime.toLocaleString('en-IN',{day:'numeric',month:'long',year:'numeric'})}, ${bookingDateAndTime.toLocaleTimeString('en-IN')}</td>
        <td><button class="reservation-visit-button" id="${element.id}"><a href="../detail/?adventure=${element.adventure}">Visit Adventure</a></button></td>
        </tr>`
    })
    }
    else {
      banner.setAttribute('style',"display:block")
      table.setAttribute('style',"display:none")
   
    }
    /*r
      Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
      The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page
  
      Note:
      1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
      2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
    */
  
  
}
//Conditionally render the no-reservation-banner and reservation-table-parent
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page
    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
export { fetchReservations, addReservationToTable };

//Constantes globales para el calendario
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Variables
let c_date = new Date();
let day = c_date.getDay();
let month = c_date.getMonth();
let year = c_date.getFullYear();

// Funcion para agregar el HTML del calendario a la pagina
(function App() {
    // Calendario con los dias mapeados
    const calendar = `
    <div class="calendar">
            <div class="row">
                <div class="col-sm-6 col-12 d-flex">
                    <div class="card border-0 flex-fill">
                        <div class="card-header py-3 d-flex justify-content-between">
                            <span class="prevMonth"><i class="fas fa-chevron-left"></i></span>
                            <span><strong id="s_m"></strong></span>
                            <span class="nextMonth"><i class="fas fa-chevron-right"></i></span>
                        </div>
                        <div class="card-body px-1 py-3">
                            <div class="table-responsive">
                                <table class="table table-sm table-borderless">
                                    <thead class="days text-center">
                                        <tr>
                                            ${Object.keys(days).map(key => (
                                                `<th><span>${days[key].substring(0,2)}</span></th>`
                                            )).join('')}                                            
                                        </tr>
                                    </thead>
                                    <tbody id="dates" class="dates text-center"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-12 d-flex pa-sm">
                    <div class="card border-0 flex-fill d-none" id="event">
                        <div class="card-header py-3 text-center">
                            Hora
                            <button type="button" class="close hide">
                                <span aria-hidden="true"><i class="fas fa-times"></i></span>
                            </button>
                        </div>
                        <div class="card-body px-1 py-3">
                            <div class="text-center">
                                <span class="event-date">06 June 2020</span><br>
                                <span class="event-day">Monday</span>
                            </div> 
                            <div class="events-today my-3 px-3">
                            </div>                
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
        <div aria-live="polite" aria-atomic="true" style="position: relative;">
            <div class="toast" style="position: absolute; top: 0; right: 15px;" data-delay="3000">
                <div class="toast-header">
                <strong class="mr-auto">Calendar</strong>
                <small>Just now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
            </div>
        </div>`;
    document.getElementById('app').innerHTML = calendar;
})()

// Seleccionar la fecha de internet
function renderCalendar(m, y) {
    //Month's first weekday
    let firstDay = new Date(y, m, 1).getDay();
    //Days in Month
    let d_m = new Date(y, m + 1, 0).getDate();
    //Days in Previous Month
    let d_pm = new Date(y, m, 0).getDate();


    let table = document.getElementById('dates');
    table.innerHTML = '';
    let s_m = document.getElementById('s_m');
    s_m.innerHTML = months[m] + ' ' + y;
    let date = 1;

    //remaing dates of last month
    let r_pm = (d_pm - firstDay) + 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                let span = document.createElement('span');
                let cellText = document.createTextNode(r_pm);
                span.classList.add('ntMonth');
                span.classList.add('prevMonth');
                cell.appendChild(span).appendChild(cellText);
                row.appendChild(cell);
                r_pm++;
            } else if (date > d_m && j < 7) {
                if (j !== 0) {
                    let i = 0;
                    for (let k = j; k < 7; k++) {
                        i++
                        let cell = document.createElement('td');
                        let span = document.createElement('span');
                        let cellText = document.createTextNode(i);
                        span.classList.add('ntMonth');
                        span.classList.add('nextMonth');
                        cell.appendChild(span).appendChild(cellText);
                        row.appendChild(cell);
                    };
                }
                break;
            } else {
                let cell = document.createElement('td');
                let span = document.createElement('span');
                let cellText = document.createTextNode(date);
                span.classList.add('showEvent');
                if (date === c_date.getDate() && y === c_date.getFullYear() && m === c_date.getMonth()) {
                    span.classList.add('bg-danger','text-white');
                }
                cell.appendChild(span).appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        table.appendChild(row);
    }
}
renderCalendar(month, year)


$(function () {
    function showEvent(eventDate) {
        let storedEvents = JSON.parse(localStorage.getItem('events'));

    }

    $(document).on('click', '.prevMonth', function () {
        year = (month === 0) ? year - 1 : year;
        month = (month === 0) ? 11 : month - 1;
        renderCalendar(month, year);
    })
    $(document).on('click', '.nextMonth', function () {
        year = (month === 11) ? year + 1 : year;
        month = (month + 1) % 12;
        renderCalendar(month, year);
    })

    $(document).on('click', '.showEvent', function () {
        $('.showEvent').removeClass('active');
        $('#event').removeClass('d-none');
        $(this).addClass('active');
        let todaysDate = $(this).text() + ' ' + (months[month]) + ' ' + year;
        let eventDay = days[new Date(year, month, $(this).text()).getDay()];
        let eventDate = $(this).text() + month + year;
        console.log('cliked');
        $('.event-date').html(todaysDate).data('eventdate', eventDate);
        $('.event-day').html(eventDay);
        showEvent(eventDate);
        console.log(todaysDate);
        console.log(eventDay);
    })
    $(document).on('click', '.hide', function () {
        $('#event').addClass('d-none');
    })
})
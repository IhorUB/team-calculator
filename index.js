const items = document.querySelectorAll('.inner');
console.log(items);


function buildTeamItems(e) {
    const handleClick = e.target.value;
    switch (handleClick) {
        //Developer
        case 'developer':
            $(this).closest('.label_item').addClass('item-selected');
            $('.dev-technology').addClass('active-item-team');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            break;
        case 'dev-tech':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.dev-seniority').addClass('active-item-team');
            break;
        case 'dev-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.team-btn-area').addClass('active-item-team');
            // create object with person data
              var teamMember = {
                position: 'Developer',
                level: 'Senior',
                technology: $(".dev-technology .item-selected").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-s-' + $(".dev-technology .item-selected").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            storageFunction();
            break;
        case 'dev-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.team-btn-area').addClass('active-item-team');
             // create object with person data
              var teamMember = {
                position: 'Developer',
                level: 'Middle',
                technology: $(".dev-technology .item-selected").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-m-' + $(".dev-technology .item-selected").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            storageFunction();
            break;
    }

}


 items.forEach(el => el.addEventListener('change', buildTeamItems));

$('.get-quote').click(function() {
    alert('done');
})

$('.add-member').click(function() {
    $('.calculate-wrap').find('.item-selected').each(function() {
        $(this).removeClass('.item-selected');
    })
})

storageFunction = () => {
    for (let key in sessionStorage) {
        if (!sessionStorage.hasOwnProperty(key)) {
            continue;
        } else if (sessionStorage.length > 0) {

            const data = JSON.parse(sessionStorage.getItem(key));
            console.log(`${key}`);
            const addPerson = `<div class="person-added" id="${key}">
                    <p class="position">${data.position}<br>
                        <span class="person-info">${data.technology} ${data.level} ${data.price}</span>
                    </p>
                    <div class="member-count">
                        <button class="btn-minus">-</button>
                        <input type="number" value="1">
                        <button class="btn-plus">+</button>
                    </div>
                </div>`
            $(".team-sidebar").append(addPerson);
        }
        else console.log('starageeeeeee')
    }
}




// let items = document.querySelectorAll('.inner');

// function memberCheck(e) {
//     const handleClick = e.target.classList[1];
//     switch (handleClick) {
//         // Developer
//         case 'developer':
//             $(this).addClass('item-selected');
//             $('.dev-technology').addClass('active-item-team');
//             break;
//         case 'dev-tech':
//             $(this).addClass('item-selected');
//             $('.dev-seniority').addClass('active-item-team');
//             break;
//         case 'dev-senior':
//         sessionStorage.clear();
//             $(this).addClass('item-selected');
//             // create object with team-member data
//             var teamMember = {
//                 position: 'Developer',
//                 level: 'Senior',
//                 technology: $(".dev-technology .item-selected").text(),
//                 price: $(this).data("id")
//             }
//             // push into local storage
//             sessionStorage.setItem('dev-s', JSON.stringify(teamMember));
//             storageFunction();
//             break;
//         case 'dev-middle':
//         sessionStorage.clear();
//             $(this).addClass('item-selected');
//             var teamMember = {
//                 position: 'Developer',
//                 level: 'Middle',
//                 technology: $(".dev-technology .item-selected").text(),
//                 price: $(this).data("id")
//             }
//             // push into local storage
//             sessionStorage.setItem('dev-m', JSON.stringify(teamMember));
//             storageFunction();
//             break;
//             // QA 
//         case 'qa':
//             $(this).addClass('item-selected');
//             $('.qa-technology').addClass('active-item-team');
//             break;
//         case 'qa-tech':
//             $(this).addClass('item-selected');
//             $('.qa-seniority').addClass('active-item-team');
//             break;
//         case 'qa-middle':
//             $(this).addClass('item-selected');
//             sessionStorage.setItem('qa-middle', $(this).data("id"));
//             break;
//         case 'qa-senior':
//             $(this).addClass('item-selected');
//             sessionStorage.setItem('qa-senior', $(this).data("id"));

//             break;
//         default:
//             console.log('else');
//     }
// }

// items.forEach(el => el.addEventListener('click', memberCheck));

// function storageFunction() {
//     for (let key in sessionStorage) {
//         if (!sessionStorage.hasOwnProperty(key)) {
//             continue;
//         } else if (sessionStorage.length > 0) {     
//             let count = 1; 
//             const data = JSON.parse(sessionStorage.getItem(key));
//             console.log(`${key}`);
//             const test = `<div class="person-added" id="${key}">
//                     <p class="position">${data.position}<br>
//                         <span class="person-info">${data.technology} ${data.level}</span>
//                     </p>
//                     <div class="member-count">
//                         <button class="btn-minus">-</button>
//                         <input type="number" value="${count}">
//                         <button class="btn-plus">+</button>
//                     </div>
//                 </div>`
//             $(".team-sidebar").prepend(test);
//             count++
//         }
//         else console.log('starageeeeeee')
//     }
// }
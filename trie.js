const buildTeam = document.getElementById('build-team')
const items = document.querySelectorAll('.inner');


function UpdateListener(e) {
	// find all inputs and update Listener
    const items = document.querySelectorAll('.inner');
    items.forEach(el => el.addEventListener('click', buildTeamItems));
   // if add new member
    if (e.target.classList[1] == 'add-member') {
    	$('.add-member').on('click', addNewMember);
    }
}

function buildTeamItems(e) {
	// variables with html-content for dynamic team-blocks
	    const devStack =
        `<div class="dev-technology">
                    <h6>Technology</h6>
                    <div class="item">
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Angular</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Laravel</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Salesforce</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">NodeJS</label>
                        <label class="label_item"><input type="radio" name="technology"class="inner" value="dev-tech">Wordpress</label>
                    </div>
                </div>`;
    const devSen =
        `<div class="dev-seniority">
                    <h6>Seniority</h6>
                    <div class="item">
                        <label class="label_item" data-id="6750"><input type="radio" name="seniority"class="inner" value="dev-senior">Senior</label>
                        <label class="label_item" data-id="5040"><input type="radio" name="seniority"class="inner" value="dev-middle">Middle</label>
                    </div>
                </div>`;
    const btns =
        `<div class="team-btn-area">
                    <button class="btn-calc get-quote">Get quote</button>
                    <button class="btn-calc add-member">+ Member</button>
                </div>`
    const handleClick = e.target.value;
    switch (handleClick) {
        //Developer
        case 'developer':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(devStack);
            break;
        case 'dev-tech':
            $(this).closest('.label_item').addClass('item-selected dev-value');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(devSen);
            break;
        case 'dev-senior':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Developer',
                level: 'Senior',
                technology: $(".dev-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-s-' + $(".dev-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            // update sidebar
            storageFunction();
            console.log(sessionStorage)
            break;
        case 'dev-middle':
            $(this).closest('.label_item').addClass('item-selected');
            $(this).closest('.label_item').siblings().addClass('disabled_item');
            $('.build-team').append(btns);
            // create object with person data
            var teamMember = {
                position: 'Developer',
                level: 'Middle',
                technology: $(".dev-technology .dev-value").text(),
                price: $(this).closest('.label_item').data("id")
            }
            //create unique key for object 
            var keyMember = 'dev-m-' + $(".dev-technology .dev-value").text();
            // push into session storage
            sessionStorage.setItem(keyMember, JSON.stringify(teamMember));
            console.log(sessionStorage)
            // update sidebar
            storageFunction();
            break;
    }

}

// check sessionStorage and build sidebar
storageFunction = () => {
	let memberInSidebar = document.querySelectorAll('person-added');
	console.log(memberInSidebar);
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
        } else console.log('else Storage function')
    }
}


// listeners 
buildTeam.addEventListener('click', UpdateListener);
items.forEach(el => el.addEventListener('click', buildTeamItems));


// add new member
function addNewMember() {
    const newSpeciality = `<div class="speciality">
                    <h6>Speciality</h6>
                    <div class="item">
                        <label class="label_item"><input type="radio" name="speciality"class="inner dev" value="developer">Developer</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="qa">QA</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="project manager">Project Manager</label>
                        <label class="label_item"><input type="radio" name="speciality"class="inner" value="designer">Designer</label>
                    </div>
                </div>`
    $('.build-team').append(newSpeciality);
    // delete choosen technology for previous team-member
    $('.build-team').find('.item-selected').removeClass('dev-value');
}
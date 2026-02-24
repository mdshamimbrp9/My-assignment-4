let interViewList = [];
let rejectList = [];
let currentStatus = 'all';

//Header 3 button
const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

//totalJob
const totalJob = document.getElementById('totalJob');

//main container
const allCard = document.getElementById('allCard');

//All Button
const allJobBtn = document.getElementById('allJob-btn');
const allInterViewBtn = document.getElementById('interview-btn');
const allRejectedBtn = document.getElementById('rejected-btn');

//Job button
// const interViewBtn = document.querySelectorAll('.interview-btn');
// const rejectedBtn = document.querySelectorAll('.rejected-btn');
// const removeBtn = document.querySelectorAll('.remove-btn');
// const status = document.querySelectorAll('.status');


//filterSection
const filteredSection = document.getElementById('filter-section');


//total section
function calculateJobPost() {
  total.innerText = allCard.children.length;
  interview.innerText = interViewList.length;
  rejected.innerText = rejectList.length;
  // totalJob.innerText = allCard.children.length;
}
calculateJobPost()


//step - 1 (full okey no prolem)
function btnToggle(id) {
  currentStatus = id;
  console.log(currentStatus);
  allJobBtn.classList.remove('normal-btn')
  allInterViewBtn.classList.remove('normal-btn')
  allRejectedBtn.classList.remove('normal-btn')
  allJobBtn.classList.remove('checked-btn');

  //add btn class
  allJobBtn.classList.add('normal-btn');
  allInterViewBtn.classList.add('normal-btn');
  allRejectedBtn.classList.add('normal-btn');

  const selected = document.getElementById(id);
  selected.classList.remove('normal-btn')
  selected.classList.add('focus-btn')


  if (id === 'interview-btn') {
    allCard.style.display = 'none';
    filteredSection.classList.remove('hidden');
    renderInterview();
  }

 else if (id == 'allJob-btn') {
    allCard.style.display = 'block';
    filteredSection.classList.add('hidden');
  }

 

 else if (id == 'rejected-btn') {
    allCard.style.display = 'none';
    filteredSection.classList.remove('hidden');
    renderReject();
  }
}



//step : 2

allCard.addEventListener('click', function (event) {

  if (event.target.classList.contains('interview-btn')) {
   
   const parentNode = event.target.parentNode.parentNode;
   const companyName = parentNode.querySelector('.company-name').innerText;
   const position = parentNode.querySelector('.position').innerText;
   const locationTypeSelery = parentNode.querySelector('.location-type-selery').innerText;
   const status = parentNode.querySelector('.status').innerText;
   const description = parentNode.querySelector('.description').innerText;

    parentNode.querySelector('.status').innerText = 'Interview';
    parentNode.querySelector('.status').style.color = '#10B981';
    parentNode.querySelector('.status').style.border = '2px solid #10B981';
    const cardInfo = {
      companyName,
      position,
      locationTypeSelery,
      status: 'Interview',
      description,
    };

    const interviewExist = interViewList.find(item => item.companyName == cardInfo.companyName);
    if (!interviewExist) {
      interViewList.push(cardInfo);
    }

    //step 2 finish

    // Remove
    rejectList = rejectList.filter(item => item.companyName !== cardInfo.companyName);

    //After remove rerender the html
    if (currentStatus == 'rejected-btn') {
      renderReject();
    }
 
    calculateJobPost();
  }

 else  if (event.target.classList.contains('rejected-btn')) {
      const parentNode = event.target.parentNode.parentNode;
      const companyName = parentNode.querySelector('.company-name').innerText;
      const position = parentNode.querySelector('.position').innerText;
      const locationTypeSelery = parentNode.querySelector('.location-type-selery').innerText;
      const status = parentNode.querySelector('.status').innerText;
      const description = parentNode.querySelector('.description').innerText;

      parentNode.querySelector('.status').innerText = 'Rejected';
      parentNode.querySelector('.status').style.color = '#EF4444';
      parentNode.querySelector('.status').style.border = '2px solid #EF4444';


      const cardInfo = {
        companyName,
        position,
        locationTypeSelery,
        status: 'Rejected',
        description
      }

    const rejectExist = rejectList.find(item => item.companyName == cardInfo.companyName);
    if (!rejectExist) {
      rejectList.push(cardInfo);
    }

    interViewList = interViewList.filter(item => item.companyName != cardInfo.companyName);

    if (currentStatus === 'interview-btn') {
       renderInterview();
    }
    calculateJobPost();
   }



})

//create element section
function renderInterview() {
  //make the filter empty every time
  filteredSection.innerHTML = '';



  for (let inter of interViewList) {
    let div = document.createElement('div');
    div.className = 'card-1 flex';
    div.style.justifyContent = 'space-between';

    div.innerHTML = `
      <div class="part-1">
        <h3 class="company-name">${inter.companyName}</h3>
        <p class="position">${inter.position}</p>
        <div>
          <p class="location-type-selery">${inter.locationTypeSelery}</p>
          <button class="status btn">${inter.status}</button>
          <p class="description">${inter.description}</p>
        </div>
        <div class="two-btn">
          <button class="interview-btn btn">Interview</button>
          <button class="rejected-btn btn">Rejected</button>
        </div>
      </div>
         <!-- part 2  -->
        <div>
          <img class="remove-btn"  src="./media/Group 1.png" alt="delete icon" width="32px" height="32px">
        </div>
    `;

    filteredSection.appendChild(div);
  }

  if (interViewList.length === 0) {
    filteredSection.innerHTML = `
      <div style="text-align:center; padding:40px; background-color: #ffffff ; border-radius: 8px; padding: 100px">
        <img src="./media/jobs.png" width="120">
        <h3>No Jobs Available</h3>
        <p>Check back soon for new job opportunity</p>
      </div>
    `;
    // return;
  }
}


function renderReject() {
  filteredSection.innerHTML = '';


  for (let reject of rejectList) {
    let div = document.createElement('div');
    div.className = 'card-1 flex';
    div.style.justifyContent = 'space-between';
    div.innerHTML = `
            <!-- part-1  -->
        <div class="part-1">
          <h3 class="company-name">${reject.companyName}</h3>
          <p class="position">${reject.position}</p>
          <div>
            <p class="location-type-selery">${reject.locationTypeSelery}</p>
            <button class="status btn">${reject.status}</button>
            <p class="description">${reject.description}</p>
          </div>
          <div class="two-btn">
            <button
              class="interview-btn btn">Interview</button>
            <button
              class="rejected-btn btn">Rejected</button>
          </div>
        </div>
        <!-- part 2  -->
        <div>
          <img class="remove-btn" src="./media/Group 1.png" alt="delete icon" width="32px" height="32px">
        </div>
    `;

    filteredSection.appendChild(div)
  }

  if (rejectList.length === 0) {
    filteredSection.innerHTML = `
      <div style="text-align:center; padding:40px; background-color: #ffffff ; border-radius: 8px; padding: 100px">
        <img src="./media/jobs.png" width="120">
        <h3>No Jobs Available</h3>
        <p>Check back soon for new job opportunity</p>
      </div>
    `;
    // return;
  }
}
let interViewList = [];
let rejectList = [];

//Header 3 button
const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

//totalJob
const totalJob = document.getElementById('totalJob');

//All Button
const allJobBtn = document.getElementById('allJob-btn');
const allInterViewBtn = document.getElementById('interview-btn');
const allRejectedBtn = document.getElementById('rejected-btn');

//Job button
const interViewBtn = document.querySelectorAll('.interview-btn');
const rejectedBtn = document.querySelectorAll('.rejected-btn');
const removeBtn = document.querySelectorAll('.remove-btn');
const status = document.querySelectorAll('.status');

//main container
const allCard = document.getElementById('allCard');

//total section
function calculateJobPost() {
  total.innerText = allCard.children.length;
  interview.innerText = interViewList.length;
  rejected.innerText = rejectList.length;
}
calculateJobPost()

//Toggle button (all, interview, rejected);
function btnToggle(id) {
  console.log('Clicked', id);
}

// allJobBtn.addEventListener('click', function () {
//   alert('all job clicked')
// })
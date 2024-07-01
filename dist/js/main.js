document.addEventListener('DOMContentLoaded', function() {
    const moreIcon = document.getElementById('moreIcon');
    const iconContainer = document.getElementById('iconContainer');

    moreIcon.addEventListener('click', function() {
        iconContainer.classList.toggle('show');
    });
});

// Script to Show hide the content based on the selected tab

const recapTab = document.getElementById('recapTab');
const transcriptTab = document.getElementById('transcriptTab');
const qualityTab = document.getElementById('qualityTab');
const recapContent = document.getElementById('recapContent');
const transcriptContent = document.getElementById('transcriptContent');
const qualityContent = document.getElementById('qualityContent');


recapTab.addEventListener('click', () => {
    recapTab.classList.add('active');
    transcriptTab.classList.remove('active');
    qualityTab.classList.remove('active');
    recapContent.style.display = 'block';
    transcriptContent.style.display = 'none';
    qualityContent.style.display = 'none';
});

transcriptTab.addEventListener('click', () => {
    transcriptTab.classList.add('active');
    recapTab.classList.remove('active');
    qualityTab.classList.remove('active');
    transcriptContent.style.display = 'block';
    recapContent.style.display = 'none';
    qualityContent.style.display = 'none';

});

qualityTab.addEventListener('click', () => {
    qualityTab.classList.add('active');
    recapTab.classList.remove('active');
    transcriptTab.classList.remove('active');
    qualityContent.style.display = 'block';
    recapContent.style.display = 'none';
    transcriptContent.style.display = 'none';
});
    

// Add event listeners to each tab
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    if (tab) { // Check if tab is defined
        tab.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of the click event

            // Remove active class from all tabs and tab contents
            tabs.forEach((tab) => tab.classList.remove('active'));
            tabContents.forEach((content) => content.classList.remove('active'));

            // Add active class to the clicked tab and corresponding tab content
            tab.classList.add('active');
            if (tabContents[index]) { // Check if tab content exists
                tabContents[index].classList.add('active');
            }
        });
    }
});

// Set default selection for the first tab
recapTab.classList.add('active');
recapContent.style.display = 'block';

// Hide content for other tabs
transcriptContent.style.display = 'none';
qualityContent.style.display = 'none';

// Define variables for comments, scoreboard, and playbook
const commentsContent = document.getElementById('commentsContent');
const aiScorecardsContent = document.getElementById('aiScorecardsContent');
const aiPlaybooksContent = document.getElementById('aiPlaybooksContent');

// Hide content for comments, scoreboard, and playbook by default
commentsContent.style.display = 'none';
aiScorecardsContent.style.display = 'none';
aiPlaybooksContent.style.display = 'none';

// Add event listeners to show the content when the action happens
document.getElementById('showCommentsButton').addEventListener('click', function() {
    bottomSheet.style.display = 'block';
    commentsContent.style.display = 'block';
    aiPlaybooksContent.style.display = 'none';
    aiScorecardsContent.style.display = 'none';
});

document.getElementById('showScorecardsButton').addEventListener('click', function() {
    bottomSheet.style.display = 'block';
    aiScorecardsContent.style.display = 'block';
    commentsContent.style.display = 'none';
    aiPlaybooksContent.style.display = 'none';
});

document.getElementById('showPlaybooksButton').addEventListener('click', function() {
    bottomSheet.style.display = 'block';
    aiPlaybooksContent.style.display = 'block';
    commentsContent.style.display = 'none';
    aiScorecardsContent.style.display = 'none';
});

// Add event listener to close the bottom sheet
const closeButtons = document.querySelectorAll('.closeBottomSheet');
const overlay = document.getElementById('overlay');

closeButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const parentContent = button.parentElement;
        parentContent.style.display = 'none';
    });
});

// Add event listener to close the bottom sheet when the user clicks outside the bottom sheet   

window.addEventListener('click', function(event) {
    if (event.target == bottomSheet) {
        const contentBlocks = document.querySelectorAll('.content');
        contentBlocks.forEach((content) => {
            content.style.display = 'none';
        });
    }
});

// Add event listener to close the bottom sheet when the user presses the escape key    
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (bottomSheet) {
            bottomSheet.style.display = 'none';
        }
        if (commentsContent) {
            commentsContent.style.display = 'none';
        }
        if (aiScorecardsContent) {
            aiScorecardsContent.style.display = 'none';
        }
        if (aiPlaybooksContent) {
            aiPlaybooksContent.style.display = 'none';
        }
    }
});



var checkList = document.getElementById('list1');
var anchor = checkList.getElementsByClassName('anchor')[0];
var dropdownVisible = false;

anchor.addEventListener('click', function() {
    dropdownVisible = !dropdownVisible;
    checkList.classList.toggle('visible', dropdownVisible);
});

window.addEventListener('click', function(event) {
    if (!checkList.contains(event.target)) {
        dropdownVisible = false;
        checkList.classList.remove('visible');
    }
});








/// Function to filter moments based on selected options
function filterMoments() {
    // Get all selected checkboxes
    const selectedCheckboxes = document.querySelectorAll('#list1 li[name] input[type="checkbox"]:checked');

    // Get all moments
    const moments = document.querySelectorAll('.moment');

    // Hide all moments
    moments.forEach((moment) => {
        moment.style.display = 'none';
        moment.classList.remove('display-block');
    });

    // Show moments related to selected options
    selectedCheckboxes.forEach((checkbox) => {
        const optionText = checkbox.parentElement.getAttribute('name');
        const relatedMoments = document.querySelectorAll(`.moment[data-moment="${optionText}"]`);

        relatedMoments.forEach((moment) => {
            moment.style.display = 'block';
            moment.classList.add('display-block');
        });
    });
}

// Get all checkboxes
const selectedOptions = document.querySelectorAll('#list1 li[name] input[type="checkbox"]');

// Add event listener to checkboxes
selectedOptions.forEach((checkbox) => {
    checkbox.addEventListener('change', filterMoments);
});

// Function to show all moments
function showAllMoments() {
    const moments = document.querySelectorAll('.moment');
    moments.forEach((moment) => {
        moment.style.display = 'block';
        moment.classList.add('display-block');
    });
}

// Add event listener to check if all checkboxes are unchecked
selectedOptions.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        const allUnchecked = document.querySelectorAll('#list1 li[name] input[type="checkbox"]:checked').length === 0;
        if (allUnchecked) {
            showAllMoments();
        } else {
            filterMoments();
        }
    });
});


// Add event listeners to moments
const moments = document.querySelectorAll('.moment');
moments.forEach((moment) => {
    moment.addEventListener('click', function() {
        // Get the selected transcript-item
        const momentId = moment.getAttribute('data-moment');
        const selectedTranscriptItem = document.querySelector(`.meeting-transcript .transcript-item[data-moment="${momentId}"]`);

        // If the transcript-item is already highlighted, unhighlight it and scroll to the top
        if (selectedTranscriptItem.classList.contains('highlight')) {
            selectedTranscriptItem.classList.remove('highlight');
            window.scrollTo({ top: selectedTranscriptItem.offsetTop - (2 * selectedTranscriptItem.offsetHeight), behavior: 'smooth' });
        } else {
            // Remove highlight from all transcript-items
            const transcriptItems = document.querySelectorAll('.meeting-transcript .transcript-item');
            transcriptItems.forEach((item) => {
                item.classList.remove('highlight');
            });

            // Highlight the selected transcript-item
            selectedTranscriptItem.classList.add('highlight');

            // Scroll to the selected transcript-item with smooth transition and offset
            selectedTranscriptItem.scrollIntoView({ behavior: 'smooth', block: 'center'});

            // Show the "back to top" link
            const backToTopLink = document.querySelector('.back-to-top');
            backToTopLink.style.display = 'block';

            // Check if user has scrolled to the top and hide the "back to top" link
            window.addEventListener('scroll', function() {
                if (window.scrollY === 0) {
                    backToTopLink.style.display = 'none';
                }
            });
        }
    });
});

function handleClick() {
    // If this moment is already selected, unselect it and return early
    if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        return;
    }

    // Remove the 'selected' class from all moments
    moments.forEach((moment) => {
        moment.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked moment
    this.classList.add('selected');
}

// Add the handleClick function as a click event listener to all moments
moments.forEach((moment) => {
    moment.addEventListener('click', handleClick);
});


//Adding a Reset Filter link

const resetFilterLink = document.getElementById('resetFilterLink');

// Hide the "Reset Filters" link by default
resetFilterLink.style.display = 'none';

// Add an event listener to all checkboxes
selectedOptions.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        // If any checkbox is checked, show the "Reset Filters" link
        if (this.checked) {
            resetFilterLink.style.display = 'block';
        } else {
            // If no checkboxes are checked, hide the "Reset Filters" link
            const anyChecked = Array.from(selectedOptions).some(checkbox => checkbox.checked);
            if (!anyChecked) {
                resetFilterLink.style.display = 'none';
            }
        }
    });
});

resetFilterLink.addEventListener('click', function() {
    // Uncheck all checkboxes
    selectedOptions.forEach((checkbox) => {
        checkbox.checked = false;
    });
    // Hide the "Reset Filters" link
    this.style.display = 'none';
    // Show all moments
    showAllMoments();
});


const meetingVideo = document.getElementById('meetingVideo');

if (!meetingVideo) {
    console.error('Could not find video element with id "meetingVideo"');
} else {
    // Check if the device is a touch device
    const isTouchDevice = window.matchMedia('(hover: none)').matches;

    if (isTouchDevice) {
        // If it's a touch device, set the video width to 100%
        meetingVideo.style.width = '100%';
    } else {
        // If it's not a touch device, make the video resizable
        let isDragging = false;
        let startX;
        let startWidth;

        meetingVideo.addEventListener('mousedown', function(event) {
            isDragging = true;
            startX = event.clientX;
            startWidth = parseInt(document.defaultView.getComputedStyle(meetingVideo).width, 10);
        });

        document.addEventListener('mousemove', function(event) {
            if (!isDragging) return;
            
            const width = startWidth + (event.clientX - startX);
            const maxWidth = window.innerWidth;
            const finalWidth = Math.min(width, maxWidth);
            const height = (finalWidth / 16) * 9;
            
            meetingVideo.style.width = `${finalWidth}px`;
            meetingVideo.style.height = `${height}px`;
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
    }
}
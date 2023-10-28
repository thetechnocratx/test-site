const departmentSelect = document.getElementById("departmentSelect");
const batchSelect = document.getElementById("batchSelect");
const daySelect = document.getElementById("daySelect");
const selectedImage = document.getElementById("selectedImage");
const prevDayButton = document.getElementById("prevDayButton");
const nextDayButton = document.getElementById("nextDayButton");
const prevBatchButton = document.getElementById("prevBatchButton");
const nextBatchButton = document.getElementById("nextBatchButton");

const departments = {
    sy1: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    sy2: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "D1", "D2"],
    sy3: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"],
};

let currentDepartment = departmentSelect.value;
let currentBatchIndex = 0;
let currentDayIndex = 0;

// Function to update batch options based on the selected department
function updateBatchOptions() {
    batchSelect.innerHTML = "";
    const selectedDepartment = departmentSelect.value;
    departments[selectedDepartment].forEach((batch) => {
        const option = document.createElement("option");
        option.value = batch;
        option.textContent = batch;
        batchSelect.appendChild(option);
    });
    currentDepartment = selectedDepartment;
    currentBatchIndex = 0;
    updateImage();
}

// Function to display the selected image
function updateImage() {
    const selectedDepartment = departmentSelect.value;
    const selectedBatch = batchSelect.value;
    const selectedDay = daySelect.value;
    const imageSource = `${selectedBatch}_${selectedDay}_${currentDayIndex}.jpg`;
    selectedImage.src = imageSource;
}

// Event listeners for form elements
departmentSelect.addEventListener("change", updateBatchOptions);
batchSelect.addEventListener("change", updateImage);
daySelect.addEventListener("change", updateImage);

// Event listeners for navigation buttons
prevDayButton.addEventListener("click", () => {
    currentDayIndex = (currentDayIndex - 1 + 3) % 3;
    updateImage();
});

nextDayButton.addEventListener("click", () => {
    currentDayIndex = (currentDayIndex + 1) % 3;
    updateImage();
});

prevBatchButton.addEventListener("click", () => {
    currentBatchIndex = (currentBatchIndex - 1 + departments[currentDepartment].length) % departments[currentDepartment].length;
    batchSelect.value = departments[currentDepartment][currentBatchIndex];
    updateImage();
});

nextBatchButton.addEventListener("click", () => {
    currentBatchIndex = (currentBatchIndex + 1) % departments[currentDepartment].length;
    batchSelect.value = departments[currentDepartment][currentBatchIndex];
    updateImage();
});

// Initialize batch options and the first image
updateBatchOptions();

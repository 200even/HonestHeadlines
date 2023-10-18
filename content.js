// Function to change all headlines to "Foo Bar"
function replaceHeadlinesWithFooBar() {
  const headlineElements = document.querySelectorAll('.ArticlePreview__title'); // Replace with the appropriate selector

  headlineElements.forEach((headlineElement) => {
    headlineElement.textContent = "Foo Bar";
  });
}

// Call the function when the page is fully loaded
window.addEventListener('load', replaceHeadlinesWithFooBar);
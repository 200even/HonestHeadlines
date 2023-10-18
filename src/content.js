import OpenAI from 'openai';

// Function to generate clickbait headlines from headlines in the specified HTML structure
async function generateClickbaitFromElement() {
  const openai = new OpenAI({
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    dangerouslyAllowBrowser: true,
  });

  const headlineElements = document.querySelectorAll('.ArticlePreview__title');
  headlineElements.forEach(async (headlineElement) => {
    // Get the text from the 'a' element
    const originalHeadline = headlineElement.textContent;

    try {
      const response = await openai.chat.completions.create({
        messages: [{role: 'user', content: `Transform the headline: "${originalHeadline}" into a clickbait headline. Be creative with the response and try not to use You won't believe.`}],
        model: 'gpt-3.5-turbo',
      });

      // Extract the generated clickbait headline
      const clickbaitHeadline = response.choices[0].message.content.replace(/^"|"$/g, '');

      // Modify the 'a' element with the clickbait headline
      headlineElement.textContent = clickbaitHeadline;
    } catch (error) {
      console.error('GPT API request error:', error);
    }
  });
}

// Call the function when the page is fully loaded
window.addEventListener('load', generateClickbaitFromElement);

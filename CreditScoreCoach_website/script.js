// Replace with your OpenAI API key (better: use a server endpoint)
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

async function askAI() {
  const question = document.getElementById("userQuestion").value;
  const aiResponse = document.getElementById("aiResponse");

  if (!question) {
    aiResponse.innerText = "Please type a question first.";
    return;
  }

  aiResponse.innerText = "Thinking…";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful credit coach for South Africans." },
          { role: "user", content: question }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    aiResponse.innerText = data.choices[0].message.content;
  } catch (error) {
    aiResponse.innerText = "Sorry, there was an error. Try again later.";
    console.error(error);
  }
}

// eBook download simulation
function downloadEbook() {
  const email = document.getElementById("ebookEmail").value;
  const msg = document.getElementById("ebookMessage");

  if (!email) {
    msg.innerText = "Please enter your email.";
    return;
  }

  msg.innerText = `Success! Check your email (${email}) for the eBook link.`;
}

function toggleTip(element) {
  const content = element.querySelector(".content");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

async function askAI() {
  const q = document.getElementById("userQuestion").value;
  const aiResponse = document.getElementById("aiResponse");

  if (!q) {
    aiResponse.innerText = "Please type a question first.";
    return;
  }

  aiResponse.innerText = "Thinking…";

  // BASIC AI RESPONSE (no API key needed yet)
  aiResponse.innerText =
    "Tip: Keep your credit usage under 30%. If you want a full analysis, check your report on Experian or TransUnion.";
}

function downloadEbook() {
  const email = document.getElementById("ebookEmail").value;
  const msg = document.getElementById("ebookMessage");

  if (!email) {
    msg.innerText = "Please enter your email.";
    return;
  }

  msg.innerText = "Your eBook link has been sent to " + email;
}
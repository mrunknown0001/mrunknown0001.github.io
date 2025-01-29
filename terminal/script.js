const input = document.querySelector('.input');
const output = document.querySelector('.output');

const commands = {
  help: `Available commands: <br>
  - about: Learn more about me. <br>
  - services: See what I offer. <br>
  - projects: View my projects. <br>
  - social: Find me on social media. <br>
  - clear: Clear the terminal. <br>
  - exit: Return to the homepage.`,

  about: `I’m a Full Stack Laravel Developer with expertise in HTML, CSS, JavaScript, jQuery, Laravel Livewire, 
  and API integration with practical knowledge on Linux and Cloud Server Management. Passionate about creating dynamic, responsive applications, 
  I continuously seek new challenges to refine my skills.`,

  services: `I offer:<br>
  - Web Development using Laravel<br>
  - API Integration<br>
  - Cloud Server Management (GCP,AWS,Digital Ocean)<br>
  - Technical Consulting`,

  projects: `My Projects:<br>
  - <a href="https://bizlens.ai" target="_blank">BizLensAI</a>: An AI-powered business intelligence platform. <br>
  => Role: Full Stack Developer/Colaborator<br>
  - <a href="https://bfcgroup.ph" target="_blank">Authenticator</a>: A custom Laravel App for centralized authentication. <br>
  => Role: Full Stack Developer<br>
  - <a href="https://smd.bfcgroup.ph" target="_blank">Sales and Marketing Dashboard</a>: A Laravel dashboard for tracking sales and marketing data. <br>
  => Role: Full Stack Developer<br>`,

  social: `Find me on: <br>
  - GitHub: <a href="https://github.com/mrunknown0001" target="_blank">github.com/mrunknown0001</a><br>
  - LinkedIn: <a href="https://www.linkedin.com/in/michael-adam-trinidad-x001/" target="_blank">linkedin.com</a><br>
  - X: <a href="https://x.com/madamt0001" target="_blank">x.com</a>`,

  exit: 'Goodbye! 👋',
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    input.value = '';

    if (command === 'clear') {
      output.innerHTML = '';
      return;
    }

    if (command === 'exit') {
      window.location.href = '../index.html';
      return;
    }

    const response = commands[command] || `Command not found: ${command}. Type <span class="highlight">help</span> for a list of commands.`;
    output.innerHTML += `<p class="command">adam@portfolio:~$ ${command}</p><p class="output">${response}</p>`;
    output.scrollTop = output.scrollHeight;
  }
});
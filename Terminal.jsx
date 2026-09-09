import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const COMMANDS_DATABASE = {
  whoami: {
    cmd: 'whoami',
    output: 'sanikasuryawanshi - Computer Science Engineering graduate (2026). Technical expertise in Full Stack Development, Java, SQL, and Software Testing. Driven by solving practical development and QA challenges.'
  },
  skills: {
    cmd: 'skills',
    output: 'Languages: Java, Python, SQL, JavaScript, HTML, CSS\nFrameworks & Libraries: React.js, Pandas, NumPy, scikit-learn, Matplotlib\nQA & Testing: Manual Testing, Test Case Design, Defect Reporting\nTools & Platforms: Git, GitHub, VS Code, Jupyter Notebook, Google Colab'
  },
  status: {
    cmd: 'status',
    output: 'Current Focus: Java Full Stack Development training at QSpiders\nAvailability: Open to full-time Software Developer & QA engineering roles\nLocation: Pune / Kolhapur (Open to Relocation)'
  },
  education: {
    cmd: 'education',
    output: 'B.Tech in Computer Science & Engineering (CGPA: 82.13%)\nDiploma in Computer Science (Percentage: 84.51%)\nSSC (Percentage: 91.60%)'
  }
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { cmd: 'whoami', output: COMMANDS_DATABASE.whoami.output },
    { cmd: 'skills', output: COMMANDS_DATABASE.skills.output },
    { cmd: 'status', output: COMMANDS_DATABASE.status.output }
  ]);
  const [typingCommand, setTypingCommand] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of terminal when history changes
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, typingCommand]);

  const runCommand = (commandName) => {
    if (typingCommand !== '') return; // Wait for typing animation to finish
    
    const targetCmd = COMMANDS_DATABASE[commandName];
    if (!targetCmd) return;

    let progress = 0;
    const commandText = targetCmd.cmd;
    
    // Simulate typewriter effect typing the command
    const interval = setInterval(() => {
      setTypingCommand((prev) => prev + commandText[progress]);
      progress++;
      
      if (progress >= commandText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setHistory((prev) => [...prev, { cmd: targetCmd.cmd, output: targetCmd.output }]);
          setTypingCommand('');
        }, 150);
      }
    }, 40);
  };

  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot dot-red"></div>
          <div className="terminal-dot dot-yellow"></div>
          <div className="terminal-dot dot-green"></div>
        </div>
        <div className="terminal-title">guest@sanika-desktop:~</div>
        <div style={{ width: '36px' }}></div> {/* Spacer */}
      </div>

      <div className="terminal-body">
        {history.map((item, index) => (
          <div key={index} className="terminal-line">
            <div>
              <span className="terminal-prompt">guest@sanika:~$ </span>
              <span className="terminal-cmd">{item.cmd}</span>
            </div>
            <div className="terminal-output">
              {item.output.split('\n').map((line, lIdx) => (
                <div key={lIdx}>{line}</div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Typing Line */}
        <div className="terminal-line">
          <span className="terminal-prompt">guest@sanika:~$ </span>
          <span className="terminal-cmd">{typingCommand}</span>
          <span className="terminal-cursor"></span>
        </div>
        
        <div ref={terminalEndRef}></div>
      </div>

      <div className="terminal-controls">
        <button 
          className={`terminal-btn ${typingCommand ? 'disabled' : ''}`}
          onClick={() => runCommand('whoami')}
          disabled={!!typingCommand}
        >
          $ whoami
        </button>
        <button 
          className={`terminal-btn ${typingCommand ? 'disabled' : ''}`}
          onClick={() => runCommand('skills')}
          disabled={!!typingCommand}
        >
          $ skills
        </button>
        <button 
          className={`terminal-btn ${typingCommand ? 'disabled' : ''}`}
          onClick={() => runCommand('status')}
          disabled={!!typingCommand}
        >
          $ status
        </button>
        <button 
          className={`terminal-btn ${typingCommand ? 'disabled' : ''}`}
          onClick={() => runCommand('education')}
          disabled={!!typingCommand}
        >
          $ education
        </button>
      </div>
    </div>
  );
}

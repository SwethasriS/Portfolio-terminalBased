'use strict';

let output = document.querySelector(".output-data");
const def_text = document.querySelector(".in").innerHTML;
let input_cmd = document.querySelector('.type_pannu');
let help_helper = document.querySelector('.help-helper');
printHelpCmd();

function init() {
    document.querySelector('body').addEventListener('keydown', function(e) {
        var val = input_cmd.value;
        if (e.key === 'Enter' && val != "") {
            main(val.trim());
        }
    });
}

function main(val) {
    clearInputBox();
    modhalVelai(val);
    switch (val) {
        case 'help':
            printHelpCmd();
            break;
        case 'resume':
            printResumeCmd();
            break;
        case 'whoami':
            printAboutCmd();
            break;
        case 'projects':
            printProjectsCmd();
            break;
        case 'achievements':
            printAchievementsCmd();
            break;
        case 'techstack':
            printTechStackCmd();
            break;
            /*
            case 'certifications':
                printCertificationsCmd();
                break;
            case 'socials':
                printAllSocialsCmd();
                break;
            */
        case 'linkedin':
            openLinkedin();
            break;
        case 'github':
            openGit();
            break;
        case 'leetcode':
            openLeetcode();
            break;
        case 'skillrack':
            openSkillrack();
            break;
        case 'clear':
            clearOutput();
            break;
        default:
            illaSaab();
            break;
    }
    input_cmd.focus();
    input_cmd.scrollIntoView({ behavior: 'smooth' });
}

function clearInputBox() {
    input_cmd.value = "";
}

function clearOutput() {
    output.innerHTML = "";
}

function modhalVelai(cmd) {
    const html = `<p class="us-clr">${def_text}</p><p class = "text" style = "display:inline-block">${cmd}</p><br />`;
    output.insertAdjacentHTML('beforeend', html);
}

function illaSaab() {
    const html = `<br /><p class = "text">Command does not exist! ${help_helper.innerHTML}</p> <br />`;
    output.insertAdjacentHTML('beforeend', html);
}

function printHelpCmd() {
    let data = "";
    data += '<br />';
    data += "<p class = 'text' style='font-size: 20px;'><span class = 'highlight-cmd'>whoami</span> - A quick introduction about me.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>resume</span> - To take a look at my resume.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>projects</span> - To know & view my recent projects.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>achievements</span> - To know my accomplishments till now.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>techstack</span> - To take a look at my skillset.<br /></p>";
    /*data += "<span class = 'highlight-cmd'>certifications</span> - To view my certifications.<br />";
    data += "<span class = 'highlight-cmd'>socials</span> - To take a look at all my socials.<br />";*/
    data += "<p class = 'text'><span class = 'highlight-cmd'>linkedin</span> - To view my linkedin profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>github</span> - To view my Github profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>leetcode</span> - To check out my leetcode profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>skillrack</span> - To check out my skillrack profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>help</span> - To view all the available commands.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>clear</span> - To clear the terminal window.<br /></p>";
    data += `<br />`;

    output.insertAdjacentHTML('beforeend', data);
}

function openLinkedin() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening LinkedIn...</p><br />`);
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/swethasri-saravanaperumal-6826932a1/', 'blank ');
    }, 3000);
}

function openGit() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text" >Opening GitHub...</p><br />`);
    setTimeout(() => {
        window.open('https://github.com/SwethasriS', '_blank');
    }, 3000);
}

function openLeetcode() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening Leetcode...</p><br />`);
    setTimeout(() => {
        window.open('https://leetcode.com/u/swethawork7/', 'blank ');
    }, 3000);
}

function openSkillrack() {
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening Skillrack...</p><br />`);
    setTimeout(() => {
        window.open('http://www.skillrack.com/profile/404323/97b43af86daf14ea04a6d588530e524149e6f95a ', '_blank');
    }, 3000);
}

function printAboutCmd() {
    const html = `<br /><div class = "container">
    <div class = "container-right">
      <img class = "my-pic" src="swetha.png" alt="my-image" />
    </div>
    <div class = "container-left">
      <p class = "text"> I’m Swethasri,currently in my final year of Computer Science and Engineering at National Engineering College, Kovilpatti, with a strong CGPA of 8.93 up to the 7th semester. I'm also pursuing an Honours degree in Artificial Intelligence and Machine Learning, which aligns with my passion for AI and Full Stack Web Development.

I proudly serve as the Secretary of the Institution of Engineers (India) – IE(I) students' chapter and am an active volunteer in the National Service Scheme (NSS). I’ve also been actively involved in organizing and coordinating various technical and non-technical events in my college, which has enhanced my skills in planning, teamwork, and leadership.

I'm a continuous learner, certified by NPTEL as an active and disciplined learner, which reflects my dedication to growth and academic excellence.

My journey blends technical expertise, leadership, and service, and I’m excited about the opportunities to contribute meaningfully in the field of technology.

</p>
    </div>
  </div><br />`;
    output.insertAdjacentHTML('beforeend', html);
}

//update your resume
function printResumeCmd() {
    const html = `<br /><a href = "resume.pdf" download = "swethasri-cv" target = "_blank">swethasri-cv.pdf</a><br /><br />`;
    output.insertAdjacentHTML('beforeend', html);
}
//update project details here.
function printProjectsCmd() {
    const html = `<p class = "text"><ul type = "square">
    <li><a href = "    https://github.com/SwethasriS/Calorify---YOLO-Based-Food-Recognition-with-AI-Chatbot-and-Report-Summarizer
" target="_blank">Calorify: Smart Food Scanner, Calorie Tracker, and Health Assistant</a></li> 
    <li><a href = "https://guess-the-number-flame-sigma.vercel.app/" target="_blank">Retro Guess my number game</a></li> 
    <li><a href = "https://github.com/SwethasriS/WizardCam" target="_blank">MuggleCam: Unlock Your Inner Wizard</a></li>

    <li>Terminal based portfolio - The one you're currently on!😉 </li>
    </ul></p>`;
    output.insertAdjacentHTML('beforeend', html);
}

//update achievements heere
function printAchievementsCmd() {
    const html = `<ul> 
    <li>300+ programs solved on Leetcode.</li>
    <li>1500+ programs solved on Skillrack including mastery of 
    150+ daily challenges and completion of 100+ daily tests.</li>
    <li>Secured a spot in the Top 1000 worldwide in TCS CodeVita, one of the world’s largest coding competitions.</li>
    <li> Grand Finalist at Uttar Pradesh GPT-4o Solve-a-thon, organized by IIIT Nagpur.</li>
    <li> Honored as Discipline Star by NPTEL, IIT Madras, for outstanding course performance and dedication.</li>
    <li>Winner of the Consistent Coder Award from GeeksforGeeks (GFG) — received official merchandise (T-shirt) as recognition.</li></ul>`;
    output.insertAdjacentHTML('beforeend', html);
}

function printTechStackCmd() {
    const html = `<ul type = "square">
    <li>Java</li>
    <li>HTML, CSS</li>
    <li>Javascript</li>
    <li>CPP</li>
    <li>SQL</li>
    <li>C</li>
    <li>Git</li>
    <li>Python</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend', html);
}

//yet to implement certifications,all socials
// main code starts here
init();
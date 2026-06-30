const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Home.jsx
    content = content.replace(/₹50\+ CRORE ANNUAL TURNOVER LEGACY/g, "35+ YEARS OF ENGINEERING EXCELLENCE");
    
    // Pages / Generic
    content = content.replace(/\(₹50\+ Cr turnover\)/g, "(35+ Years Experience)");
    content = content.replace(/Over ₹50\+ Crores annual turnover executing/g, "Over 35+ years of engineering experience executing");
    content = content.replace(/delivering ₹50\+ Crore annual corporate turnover/g, "delivering 35+ years of engineering excellence");
    content = content.replace(/₹50\+ Crore Turnover/gi, "35+ Years Excellence");
    content = content.replace(/₹50\+ Cr Annual Turnover Facility/g, "35+ Years Engineering Legacy");
    content = content.replace(/₹50\+ Cr Corporate Turnover Desk/g, "Corporate Engineering Desk");
    content = content.replace(/₹50\+ Cr Annual Turnover Legacy/g, "35+ Years Engineering Legacy");
    content = content.replace(/Annual Turnover Profile/g, "Engineering Profile");
    content = content.replace(/Trusted 50\+ Crore Annual Turnover Engineering Legacy/g, "Trusted 35+ Years Engineering Legacy");
    content = content.replace(/With an annual turnover exceeding ₹50\+ Crores,/g, "With over 35 years of engineering expertise,");
    content = content.replace(/Annual Turnover Legacy/g, "Engineering Legacy");
    content = content.replace(/Annual Turnover/gi, "Engineering Legacy");
    content = content.replace(/₹50\+ Crore/gi, "35+ Years");
    content = content.replace(/₹50\+ Cr/gi, "35+ Years");
    
    // Address replacements
    content = content.replace(/Sector-17A, Greater Noida/gi, "D 211, SURAJPUR SITE 5, KASNA GREATER NOIDA UP 201312");
    // Some addresses might be written differently, we'll check manually later if needed.

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(directoryPath);
console.log('Replacement complete.');

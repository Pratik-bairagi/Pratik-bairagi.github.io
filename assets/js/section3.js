  //rotating words TagCloud https://www.cssscript.com/animated-sphere-tag-cloud/  https://github.com/mcc108/TagCloud

// One shared list for desktop and phone
const subjectTags = [
  // DBMS
  'DBMS', 'SQL', 
  // COA
  'COA',
  // OS
  'OS', 'Scheduling', 'Virtual Memory',
  // ML
  'ML', 'AI', 'Neural Networks',
  // Quantum Computing
  'Quantum Computing', 'Qubits', 'Superposition', 'Entanglement'
];

var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0'];

// Desktop cloud
TagCloud('.content', subjectTags, {
  radius: 300,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});
document.querySelector('.content').style.color = colors[Math.floor(Math.random() * colors.length)];

// Phone cloud
TagCloud('.content_phone', subjectTags, {
  radius: 210,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
});
document.querySelector('.content_phone').style.color = colors[Math.floor(Math.random() * colors.length)];

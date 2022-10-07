module.exports = {
  name: 'Rhys Shaw',
  title: 'M.Inst.P, MSc, BSc \\ Astrophysicist',
  facts: {
    'Residence': 'Wales, Uk',
    'Homepage': `<a href="https://RhysAlfShaw.github.io/">
                  <span class="print">https://RhysAlfShaw.github.io/</span>
                  <span class="screen">https://RhysAlfShaw.github.io/</span>
                </a>`,
    'Email': '<a href="mailto:rhysalfshaw@gmail.com">rhysalfshaw@gmail.com</a>',
    'LinkedIn': 'https://www.linkedin.com/in/rhys-shaw-6766a8166/',
  },
  skills: [
    ['Astrophysics', '++++'],
    ['Mathematics', '++++'],
    ['Computational Physics', '++++'],
    ['Python', '++++'],
    ['Fortan', '+++'],
    ['JavaScript', '+++'],
    ['CSS', '++'],
    ['HTML', '+++'],
    ['React.js', '+++'],
    ['Node.js', '+++'],
  ],
  
  projects: [
    {
      title: 'PhD Research: Radio source multipicity and Machine Learning.',
      written: 'Inprogress ~ Due for completion 2026',
      badges : ['Python', 'Software Engineering', 'Machine Learning', 'Neural Networks','Computational Astrophysics','Radiowave Sources'],
      contents : ' Developing tools to create true associations between seperated radio sources using morphological, spectral and flux analysis of the source to feed into a neural network to learn characteristics of these associations. This will allow for quick processing of SKA and future radio observational data.'
    },
    {
      title: 'MSc Project: Studing the effect of Substucture in Star Clusters.',
      written: '2021',
      badges: ['Python','Linux' , 'Fortan','Computational Physics', 'Problem Solving'],
      contents: 'Simulating a planetary system orbiting solar mass stars within a fractally substructured cluster using a dual integrator approach, where the cluster was integrated with NBODY6++ and star positions interpolated for use by the planetary integrator.'
    },
    {
      title: 'BSc Project: Examining Galaxy Cluster Properties from seperatly selected samples.',
      written: '2020',
      badges: ['Python', 'Data Analysis', 'Linux', 'Problem Solving'],
      contents: 'Measuring galaxy cluster morphology, with a custom algorithm, and their luminosity-temperature scaling relation with observational data from the Chandra observatory was done to compare two samples of galaxy clusters.'
    }
  ]
};

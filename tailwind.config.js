module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#F2F2F2',
      secondary: '#E5E5E5',
      danger: '#e3342f',
      footer: '#333333',
      button: {
        primary: '#2F80ED',
      },
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#2F80ED',
      secondary: '#828282',
      danger: '#e3342f',
    }),

    fontFamily: {
      redhat: ['Red Hat Display', 'sans-serif'],
    },

    extend: {
      backgroundImage: (theme) => ({
        'home-1': "url('/images/bg_home1.png')",
        'home-2': "url('/images/bg_home2.png')",
        'home-3': "url('/images/bg_home3.png')",
      }),
      padding: {
        px160: '160px',
        px124: '124px',
        px69: '69px',
      },
      fontSize: {
        hxl: ['40px', '132%'],
        hlg: ['25px', '132%'],
        hmd: ['20px', '30px'],
      },
      maxWidth: {
        672: '672px',
        914: '914px',
      },
      borderColor: {
        primary: '#2F80ED',
      },
      boxShadow: {
        primary: '4px 4px 4px rgba(0, 0, 0, 0.33)',
      },
      minHeight: {
        70: '70px',
      },
    },
  },
};

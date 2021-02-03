module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#F2F2F2',
      secondary: '#F9F9F9',
      danger: '#e3342f',
      footer: '#333333',
      menu: '#F9F9F9',
      button: {
        primary: '#2F80ED',
        hover: '#2769c1',
      },
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#2F80ED',
      secondary: '#828282',
      card: '#4F4F4F',
      danger: '#e3342f',
      footer: '#333333',
    }),

    fontFamily: {
      redhat: ['Red Hat Display', 'sans-serif'],
    },

    extend: {
      backgroundImage: (theme) => ({
        'home-1': "url('/images/bg_home1.png')",
        'home-2': "url('/images/bg_home2.png')",
        'home-3': "url('/images/bg_home3.png')",
        'ourteam-1': "url('/images/bg_ourteam1.png')",
        'solutions-1': "url('/images/bg_solutions1.png')",
        'solutions-2': "url('/images/bg_solutions2.png')",
        'solutions-3': "url('/images/bg_solutions3.png')",
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
        secondary: 'rgba(47, 128, 237, 0.21)',
      },
      boxShadow: {
        primary: '4px 4px 4px rgba(0, 0, 0, 0.17)',
        card: '6px 8px 4px rgba(47, 128, 237, 0.21)',
        'card-1': '11px 12px 14px -5px rgba(14, 113, 251, 0.14)',
        box: 'inset 0px 4px 4px #BDBDBD;',
      },
      minHeight: {
        70: '70px',
        500: '500px',
      },
      height: {
        500: '500px',
      },
      borderRadius: {
        card: '70px',
      },
    },
  },
};

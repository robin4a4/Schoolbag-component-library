module.exports = {
  important: true,
  theme: {
    extend: {
        fontSize: {
            '2xs': '0.5rem',
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
            '8': '2rem',
            '9': '2.25rem',
            '10': '2.5rem',
            '12': '3rem',
            '14': '3.5rem',
            '16': '4rem',
            '18': '4.5rem',
            '20': '5rem',
            '22': '5.5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '70': '17.5rem',
            '80': '20rem',
            '90': '22.5rem',
            '125': '31.25rem',
            '150': '37.5rem',
            '200': '50rem',

        },
        colors: {
            brandColor: {
                100: '#fffaf0',
                200: '#feebc8',
                300: '#fbd38d',
                400: '#f6ad55',
                500: '#ed8936',
                600: '#dd6b20',
                700: '#c05621',
                800: '#9c4221',
                900: '#7b341e',
            },
            brandColorHover: 'yellow',
            gradient: 'linear-gradient(#e66465, #9198e5)',
        },
        margin: {
            '96': '24rem',
            '128': '32rem',
        },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}

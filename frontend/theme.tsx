import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const colors = {
  primary: {
    main: '#7A46DA',
    dark: '#673bba',
  },
  secondary: {
    main: '#3C1583',
    dark: '#1B083E',
  },
  background: {
    paper: '#e7e7e7',
    default: '#ffffff',
  },
  border: {
    inactive: '#C1BDC8',
    active: '#7845D7',
  },
  error: '#E63E3E',
};

const breakpoints = createBreakpoints({});

const themeOptions = {
  palette: {
    type: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      'Raleway',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 18,
    lineHeight: '21px',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          lineHeight: 'inherit',
          fontWeight: 'inherit',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingRight: 40,
          paddingLeft: 40,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 60,
          textTransform: 'none',
          fontSize: 18,
          fontWeight: 700,
          lineHeight: '20px',
          [breakpoints.up('xs')]: {
            fontSize: 16,
            lineHeight: '19px',
          },
          [breakpoints.up('sm')]: {
            fontSize: 18,
            lineHeight: '20px',
          },
        },
        outlined: {
          boxShadow: `inset 0 0 0 1px ${colors.primary.main}`,
          '&:hover': {},
          '&.Mui-disabled': {
            boxShadow: 'none',
            borderColor: colors.border.inactive
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            transition: 'box-shadow 100ms linear',
          },
          '&.MuiInputBase-colorPrimary': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.border.inactive,
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.error,
            },
            '&:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.border.active,
              boxShadow: `0 0 1px 0 ${colors.primary.main}`,
            },
            '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
            },
            input: {
              [breakpoints.up('xs')]: {
                fontSize: 16,
                lineHeight: '19px',
              },
              [breakpoints.up('md')]: {
                fontSize: 20,
                lineHeight: '23px',
              },
            },
          },
          '&.MuiInputBase-colorSecondary': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.background.default,
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.error,
            },
            '&:hover:not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline':
              {
                borderColor: colors.background.default,
                boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 0px 2px',
              },
            '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 0px 4px',
              borderWidth: 1,
            },
            input: {
              color: colors.background.default,
              fontSize: 20,
              lineHeight: '23px',
              [breakpoints.up('xs')]: {
                fontSize: 16,
                lineHeight: '19px',
              },
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '16px',
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          '&.Mui-error': {
            color: colors.error,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 70,
          boxShadow: 'none',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&[disabled]': {
            color: '#C1BDC8',
            textDecoration: 'none',
            cursor: 'initial',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: '20px 0',
        },
        thumb: {
          color: colors.background.default,
          width: '36px',
          height: '36px',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'rgb(255 255 255 / 30%) 0px 0px 0px 4px',
          },
        },
        track: {
          color: colors.background.default,
          height: '8px',
          border: 'none',
        },
        rail: {
          color: '#6135B1',
          height: '8px',
        },
        markLabel: {
          top: '40px',
          color: colors.background.default,
          fontSize: '16px',
          fontWeight: '19px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiAutocomplete-endAdornment': {
            top: '50%',
            transform: 'translate(0, -50%)',
          },
        },
      },
    },
  },
};

export default themeOptions;

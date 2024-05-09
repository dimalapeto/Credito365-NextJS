export const accordion = {
  marginBottom: '20px',
  borderRadius: '10px',
  backgroundColor: '#fefefe',
  boxShadow: 'none',
  ':first-of-type': { 
    marginTop: { xs: '20px', lg: '40px' },
   },
  ':before': {
    backgroundColor: 'transparent',
  },
};

export const summary = {
  paddingLeft: 0,
  '> div': {
    margin: '0 !important',
  },
};

export const title = {
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '130%',
  padding: '25px 60px 25px 20px',
};

export const details = {
  padding: '0 20px 25px',
};

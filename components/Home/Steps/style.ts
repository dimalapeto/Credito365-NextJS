export const container = {
  padding: { xs: '40px 0', lg: '100px 0' },
  backgroundColor: '#f8f8f8',
};

export const blockLayout = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: { xs: 'column', lg: 'row' },
  gap: { xs: '25px', lg: '50px' },
  alignItems: { xs: 'normal', lg: 'center' },
  maxWidth: { xs: '962px', lg: '1140px' },
  margin: 'auto',
  padding: { xs: '0 15px', lg: 0 },
};

export const title = {
  fontSize: { xs: '26px', lg: '44px' },
  marginBottom: 0,
  flex: '1 0',
};

export const button = {
  flex: '0 0',
  padding: '13px',
  minWidth: 'min(290px,100%)',
  order: { xs: '5', lg: 0 },
  marginTop: { xs: '5px', lg: 0 },
};

export const stepsContainer = {
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  flex: '1 0 100%',
  gap: { xs: '20px', lg: '30px' },
};

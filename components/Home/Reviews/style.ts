export const container = {
  padding: { xs: '40px 0', lg: '100px 0' },
  backgroundColor: '#fefefe',
  width: '100%',
};

export const blockLayout = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: { xs: 'column', lg: 'row' },
  gap: { xs: '25px', lg: '50px' },
  alignItems: 'center',
  maxWidth: { xs: '962px', lg: '1140px' },
  margin: 'auto',
  padding: { xs: '0 15px', lg: 0 },
};

export const title = {
  fontSize: { xs: '26px', lg: '44px' },
  marginBottom: 0,
  flex: '1 0',
  fontWeight: 700,
  lineHeight: '130%',
};

export const reviewWrapper = {
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  flex: '0 0 100%',
  gap: { xs: '20px', lg: '30px' },
  overflow: 'hidden',
  width: '100%',
};

export const reviewBanner = {
  flex: '0 0 calc(33.3333% - 10px)',
  position: 'relative',
};

export const image = {
  position: { xs: 'static', lg: 'absolute' },
  left: 0,
  top: 0,
  borderRadius: '10px',
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

export const imageBtn = {
  backgroundColor: '#6948eb',
  borderRadius: '10px',
  bottom: '58px',
  color: '#fefefe',
  display: 'block',
  fontSize: { xs: '12px', lg: '16px' },
  fontWeight: 700,
  left: { xs: '15px', lg: '23px' },
  lineHeight: '120%',
  padding: { xs: '16px', lg: '20px' },
  position: 'absolute',
  right: { xs: '15px', lg: '23px' },
  textAlign: 'center',
  textDecoration: 'none',
  transition: '.3s',
};

export const sliderContainer = {
  flex: '1 0',
  width: { xs: '100%', lg: 'calc(66.6666% - 30px)' },
};

export const sliderWrapper = {
  listStyle: 'none',
  marginLeft: 'auto',
  marginRight: 'auto',
  overflow: 'hidden',
  padding: 0,
  position: 'relative',
  zIndex: 1,
};

export const reviewItem = {
  background: '#f8f8f8',
  borderRadius: '10px',
  padding: '25px 20px',
  position: 'relative',
  flexShrink: 0,
  height: '100%',
  transitionProperty: 'transform',
  // marginRight: '30px',
};

export const reviewNumber = {
  color: '#697395',
  fontSize: '10px',
  fontWeight: 500,
  lineHeight: '130%',
  position: 'absolute',
  right: '20px',
  top: '25px',
};

export const reviewRating = {
  marginBottom: '25px',
  height: '20px',
  backgroundImage: `url('/star.svg')`,
};

export const reviewTitle = {
  color: '#282828',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '120%',
  marginBottom: '25px',
};

export const sliderControls = {
  display: 'flex',
  flex: { xs: '1 0', lg: '0 0' },
  gap: '10px',
  justifyContent: { xs: 'center', lg: 'none' },
  marginTop: { xs: '-15px', lg: 0 },
  order: { xs: '4', lg: 0 },
};

export const sliderControl = {
  backgroundColor: '#f8f8f8',
  borderRadius: '50%',
  cursor: 'pointer',
  height: '40px',
  width: '40px',
};

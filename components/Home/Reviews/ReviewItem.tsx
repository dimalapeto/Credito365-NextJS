import { Box } from '@mui/material';
import * as S from './style';

interface ReviewItemProps {
  date: string;
  title: string;
  author: string;
  children: React.ReactNode;
  rating: number;
}

export const ReviewItem = ({ date, title, author, children, rating }: ReviewItemProps): JSX.Element => {
  return (
    <Box sx={S.reviewItem}>
      <Box sx={S.reviewNumber}>{date}</Box>
      <Box width={`${rating * 20}px`} sx={S.reviewRating} />
      <Box sx={S.reviewTitle}>{title}</Box>
      <Box sx={{ color: '#282828' }} marginBottom="15px" lineHeight="130%">
        {children}
      </Box>
      <Box sx={{ color: '#697395' }} fontSize="14px" lineHeight="140%">
        {author}
      </Box>
    </Box>
  );
};

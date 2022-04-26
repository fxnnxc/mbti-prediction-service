import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MLinearProgress(props: LinearProgressProps & { value: number, mbti_name: text }) 
{
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${props.mbti_name}`}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default MLinearProgress;

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgressWithLabel value={progress} />
//     </Box>
//   );
// }


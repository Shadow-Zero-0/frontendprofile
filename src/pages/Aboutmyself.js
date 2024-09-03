import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Aboutmyself = () => {
  const drawerWidth = 240;
  return (
    <Box
      dir="auto"
      mt={10}
      sx={{
        marginLeft: `${drawerWidth}px`,
      }}
    >
      <div>
        <Typography m={2} variant="h4" color="primary">
          الاسم والعنوان
        </Typography>
        <Typography m={2} variant="h5">
          عمر احمد وانا اعيش في محافظه الفيوم بلده هواره المقطع
        </Typography>
      </div>
      <div>
        <Typography m={2} variant="h4" color="primary">
          اختصاصي
        </Typography>
        <Typography m={2} variant="h5">
          انا متعلم برمجه المواقع (front end development) والغات الخاصه بالتطوير
        </Typography>
        <Typography mr={2} variant="h5" > [html,css,javascript,react.js(firebase, Node.js API,
          Redux Toolkit,json-server )]</Typography>
      </div>
      <div>
      <Typography m={2} variant="h4" color="primary">
          <Link style={{
                textDecoration: 'none',
            textDecoration: 'none',
            color: '#027777'
          }} to='https://www.facebook.com'>للتواصل معي علي الفيس بوك</Link>
        </Typography><Typography m={2} variant="h4" color="primary">
          الشهادات
        </Typography>
<Stack className="imgase">
  
     
   
          <img className="Avater" alt="" src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1725235730/ASACC_xq7s0o.png" />

          
       
          <img className="Avater" alt="" src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1725235730/FDSDFSEF_cbqmp2.png" />
          <img className="Avater" alt="" src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1725235730/ASASD_pnu8uc.png" />
          <img className="Avater" alt="" src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1725235729/ASDFASD_cazo29.png" />
 
        
       
        </Stack>
</div>
    </Box>
  );
};

export default Aboutmyself;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './faq.css'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" className="expanded-head" id="panel1d-header">
       
          <Typography>1.  Do you provide NFT Development services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we provide end-to-end NFT development services and can help you create non fungible token marketplace that allows the trading and auction of NFTs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" className="expanded-head" id="panel2d-header">
          <Typography>2. How should I choose the right NFT Development company?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We offers customized cryptocurrency wallet development services. The project completion time depends on the features and functionality you want to add to your project. We will complete your projects in the least amount of time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>3. Which is the best NFT development company?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The sender's private key must align with the receiver's public address. By doing this, the sender can transfer his crypto assets to the receiver's wallet address, allowing him to use the coins.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>4. How can I create a NFT Token ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The cryptocurrency wallet development cost depends on several factors. Firstly, the features and functions you want to integrate into your wallet. A white label solution will be ideal as it saves development costs and saves a lot of time. The best thing is you don't have to start everything from scratch.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>5.  How much time does it take to create non fungible token ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Certain factors would enhance the security of your crypto wallet. Additionally, integrating web security protocols, Anti-DDoS modules, 12-word mnemonic phrases, and more would prevent breaches and hacks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>6.  What are the options for me to launch an NFT ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
TRC 20 has a unique infrastructure and functionality that resembles ERC 20, and several features can be integrated into decentralized mode via smart contract development. It allows users to perform transactions without any hassles. Our Blockchain analysts and developers will rapidly create and deploy a TRC 20 Wallet. Partner with us to procure the benefits of Blockchain technology and expertise and stand ahead of others with a performance-optimized product. We will add an extra layer of protection by integrating these high-graded security features into your wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>7. What is the cost to create an NFT Token ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can store more than one currency in a multi-cryptocurrency wallet. The wallet must support the cryptocurrency you are planning to store.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>8. How To create an NFT like platform Cryptopunks ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
Every time a transaction occurs, it will generate a new public key. The key makes it difficult for others to commit fraud on the wallet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>9.  How can I hire NFT developers ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We understand that everyone doesn't have sound technical knowledge about the project. This is when you will be supported by our developers, who will guide you step by step throughout the project development journey.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel3d-content" className="expanded-head" id="panel3d-header">
          <Typography>10. Do you provide NFT Launchpad Development Services ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
      
A hot wallet is the one that needs an internet connection to operate. Even the private keys are stored digitally within the wallet. The cold wallet is just like a pen drive that works offline and stores the private keys offline as well.
          </Typography>
          
        
        </AccordionDetails>
        
      </Accordion>

  
    </div>
  );
}

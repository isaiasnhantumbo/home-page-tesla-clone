import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import UniqueOverlay from '../UniqueOverlay';
import { Container,Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model 2',
            'Model 3',
            'Model 4',
            'Model 5',
            'Model 6',
            'Model 7',
          ].map(modelName => (
            <ModelSection
            key={modelName}
          className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online For Deliver"
              />
            }
          />
          ))}
          
        </div>
       <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
